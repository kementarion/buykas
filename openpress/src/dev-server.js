import { createReadStream, existsSync, statSync, watch } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize, sep } from 'node:path'
import { build } from './build.js'
import { resolveTheme } from './theme.js'

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
}

// Live reload uses short polling instead of a persistent SSE connection.
// Persistent connections occupy one of the browser's ~6 HTTP/1.1 connections
// per origin; with several tabs open this exhausts the pool and new requests
// (i.e. clicking a link) hang for a long time.
const LIVE_RELOAD_SCRIPT = `<script>
(function () {
  var current
  function check() {
    fetch('/__openpress_version', { cache: 'no-store' })
      .then(function (res) { return res.text() })
      .then(function (value) {
        if (current === undefined) current = value
        else if (value !== current) location.reload()
      })
      .catch(function () {})
  }
  setInterval(check, 1200)
  check()
})()
</script>`

function stripBase(pathname, base) {
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base
  if (!prefix) return pathname
  if (pathname === prefix) return '/'
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length)
  return pathname
}

function resolveRequestPath(config, urlPath) {
  const pathname = stripBase(decodeURIComponent(urlPath.split('?')[0]), config.base)
  const filePath = normalize(join(config.destDir, pathname))
  if (filePath !== config.destDir && !filePath.startsWith(config.destDir + sep)) return null
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    return join(filePath, 'index.html')
  }
  return filePath
}

export async function createDevServer(config, options = {}) {
  let version = 0
  let building = false
  let pending = false
  let timer = null

  async function rebuild() {
    if (building) {
      pending = true
      return
    }
    building = true
    const start = Date.now()
    try {
      await build(config)
      version += 1
      process.stdout.write(`\n  openpress  rebuilt in ${Date.now() - start}ms\n`)
    } catch (error) {
      process.stderr.write(`\n  openpress  build failed:\n${error.stack || error}\n`)
    } finally {
      building = false
      if (pending) {
        pending = false
        rebuild()
      }
    }
  }

  await build(config)
  version += 1

  const handleRequest = async (req, res) => {
    const url = req.url || '/'

    if (url.startsWith('/__openpress_version')) {
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store, must-revalidate',
      })
      res.end(String(version))
      return
    }

    const filePath = resolveRequestPath(config, url)
    if (!filePath || !existsSync(filePath) || statSync(filePath).isDirectory()) {
      const notFound = join(config.destDir, '404.html')
      if (existsSync(notFound)) {
        res.writeHead(404, { 'Content-Type': MIME_TYPES['.html'] })
        res.end(await readFile(notFound))
      } else {
        res.writeHead(404, { 'Content-Type': MIME_TYPES['.txt'] })
        res.end('404 Not Found')
      }
      return
    }

    const ext = extname(filePath).toLowerCase()
    const type = MIME_TYPES[ext] || 'application/octet-stream'

    if (ext === '.html') {
      const html = await readFile(filePath, 'utf8')
      res.writeHead(200, {
        'Content-Type': type,
        'Cache-Control': 'no-store, must-revalidate',
      })
      res.end(html.replace('</body>', `${LIVE_RELOAD_SCRIPT}</body>`))
      return
    }

    res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' })
    createReadStream(filePath).pipe(res)
  }

  const watchTargets = [config.sourceDir, config.publicDir]
  const theme = await resolveTheme(config)
  if (theme.dir) watchTargets.push(theme.dir)
  const watchers = []
  for (const target of watchTargets) {
    if (!existsSync(target)) continue
    const watcher = watch(target, { recursive: true }, () => {
      clearTimeout(timer)
      timer = setTimeout(rebuild, 120)
    })
    watchers.push(watcher)
  }

  const port = options.port ?? 8080
  // Bind both loopback families by default so `localhost`, `127.0.0.1` and `[::1]`
  // all work. Pass --host to bind a single specific address (e.g. 0.0.0.0 for LAN).
  const hosts = options.host ? [options.host] : ['127.0.0.1', '::1']
  const servers = []
  const listening = []
  let announced = false

  for (const host of hosts) {
    const server = createServer(handleRequest)
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        process.stderr.write(
          `\n  openpress  port ${port} is already in use.\n` +
            `  Stop the other process or pass --port <port>.\n\n`,
        )
      } else if (error.code === 'EADDRNOTAVAIL' || error.code === 'EAFNOSUPPORT') {
        // This address family is unavailable on this machine; ignore it.
        return
      } else {
        process.stderr.write(`\n  openpress  dev server error (${host}): ${error.message}\n\n`)
      }
      process.exitCode = 1
    })

    listening.push(
      new Promise((resolve) => {
        server.once('error', () => resolve())
        server.listen(port, host, () => {
          process.stdout.write(`\n  openpress dev server running at http://${host}:${port}/\n`)
          if (!announced) {
            announced = true
            process.stdout.write('  watching for changes... (Ctrl+C to stop)\n\n')
          }
          resolve()
        })
      }),
    )

    servers.push(server)
  }

  await Promise.all(listening)

  return {
    servers,
    close() {
      for (const server of servers) server.close()
      for (const watcher of watchers) watcher.close()
      clearTimeout(timer)
    },
  }
}
