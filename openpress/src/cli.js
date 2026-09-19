import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from './build.js'
import { loadConfig } from './config.js'

const pkg = JSON.parse(
  readFileSync(fileURLToPath(new URL('../package.json', import.meta.url)), 'utf8'),
)

const HELP = `openpress v${pkg.version} - a tiny, dependency-free static site generator

Usage:
  openpress build             Build the site into the output directory
  openpress dev [options]     Start a dev server with live reload
  openpress clean             Remove the output directory
  openpress init [dir]        Scaffold a new site
  openpress help              Show this message
  openpress version           Print the version

Options:
  --port, -p <port>           Dev server port (default: 8080)
  --host <host>               Dev server host (default: 127.0.0.1)

Configuration is read from openpress.config.js in the current directory.
`

function parseArgs(args) {
  const options = {}
  const rest = []
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg === '--port' || arg === '-p') {
      options.port = Number(args[++i])
    } else if (arg.startsWith('--port=')) {
      options.port = Number(arg.slice('--port='.length))
    } else if (arg === '--host') {
      options.host = args[++i]
    } else if (arg.startsWith('--host=')) {
      options.host = arg.slice('--host='.length)
    } else {
      rest.push(arg)
    }
  }
  return { options, rest }
}

function writeIfAbsent(file, content) {
  if (existsSync(file)) return false
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, content)
  return true
}

const INIT_CONFIG = `// Optional: \`import { defineConfig } from 'openpress'\` for editor IntelliSense.
export default {
  title: 'My Site',
  description: '',
  hostname: '',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'My Site',
      navbar: [{ text: 'Home', link: '/' }],
    },
  },
  themeConfig: {
    lastUpdated: false,
  },
}
`

const INIT_HOME = `---
home: true
heroText: My Site
tagline: A new site powered by openpress.
---

Welcome! Start writing in \`docs/\`.
`

const INIT_README = `# My Site

Built with [openpress](../openpress/README.md).

\`\`\`bash
npm run docs:dev
npm run docs:build
\`\`\`
`

function init(targetDir) {
  const dir = resolve(targetDir || process.cwd())
  mkdirSync(join(dir, 'docs', 'public'), { recursive: true })

  const created = []
  if (writeIfAbsent(join(dir, 'openpress.config.js'), INIT_CONFIG)) created.push('openpress.config.js')
  if (writeIfAbsent(join(dir, 'docs', 'README.md'), INIT_HOME)) created.push('docs/README.md')
  if (writeIfAbsent(join(dir, 'README.md'), INIT_README)) created.push('README.md')
  if (writeIfAbsent(join(dir, '.gitignore'), 'node_modules\ndist/\n')) created.push('.gitignore')

  if (!created.length) {
    process.stdout.write(`  openpress  nothing to do in ${dir}\n`)
  } else {
    process.stdout.write(`  openpress  scaffolded ${dir}\n`)
    for (const file of created) process.stdout.write(`    + ${file}\n`)
    process.stdout.write('\n  Next: npm run docs:dev\n\n')
  }
}

export async function run(argv = process.argv.slice(2)) {
  const command = argv[0] || 'build'
  const { options, rest } = parseArgs(argv.slice(1))

  if (command === 'help' || command === '--help' || command === '-h') {
    process.stdout.write(HELP)
    return
  }
  if (command === 'version' || command === '--version' || command === '-v') {
    process.stdout.write(`${pkg.version}\n`)
    return
  }

  if (command === 'init') {
    init(rest[0])
    return
  }

  const config = await loadConfig()

  if (command === 'build') {
    const start = Date.now()
    process.stdout.write('\n  openpress  building...\n')
    const { pages } = await build(config)
    process.stdout.write(
      `  openpress  built ${pages.length} pages in ${Date.now() - start}ms\n` +
        `  output: ${config.destDir}\n\n`,
    )
    return
  }

  if (command === 'dev') {
    const { createDevServer } = await import('./dev-server.js')
    await createDevServer(config, options)
    return
  }

  if (command === 'clean') {
    rmSync(config.destDir, { recursive: true, force: true })
    process.stdout.write(`  openpress  removed ${config.destDir}\n`)
    return
  }

  process.stderr.write(`Unknown command: ${command}\n\n${HELP}`)
  process.exitCode = 1
}
