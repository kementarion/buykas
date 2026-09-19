import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { resolveConfig } from '../src/config.js'
import { createDevServer } from '../src/dev-server.js'

function createSite() {
  const dir = mkdtempSync(join(tmpdir(), 'openpress-dev-'))
  mkdirSync(join(dir, 'docs'), { recursive: true })
  writeFileSync(join(dir, 'docs', 'README.md'), '# Home\n')
  return dir
}

function request(port, path) {
  return fetch(`http://127.0.0.1:${port}${path}`)
}

test('dev server serves pages and exposes a build version', async () => {
  const dir = createSite()
  let dev
  try {
    const config = resolveConfig({ themeConfig: { lastUpdated: false } }, dir)
    dev = await createDevServer(config, { port: 0, host: '127.0.0.1' })
    const port = dev.servers[0].address().port

    const home = await request(port, '/')
    assert.equal(home.status, 200)
    const html = await home.text()
    assert.match(html, /<div id="openpress-app">/)
    assert.match(html, /__openpress_version/)
    assert.match(home.headers.get('cache-control') ?? '', /no-store/)

    const version = await request(port, '/__openpress_version')
    assert.equal(version.status, 200)
    assert.match(await version.text(), /^\d+$/)

    const missing = await request(port, '/does-not-exist.html')
    assert.equal(missing.status, 404)
  } finally {
    dev?.close()
    rmSync(dir, { recursive: true, force: true })
  }
})

test('dev server serves a site mounted under a base path', async () => {
  const dir = createSite()
  let dev
  try {
    const config = resolveConfig({ base: '/sub/', themeConfig: { lastUpdated: false } }, dir)
    dev = await createDevServer(config, { port: 0, host: '127.0.0.1' })
    const port = dev.servers[0].address().port

    const home = await request(port, '/sub/')
    assert.equal(home.status, 200)
    assert.match(await home.text(), /<div id="openpress-app">/)

    const asset = await request(port, '/sub/assets/openpress.css')
    assert.equal(asset.status, 200)
  } finally {
    dev?.close()
    rmSync(dir, { recursive: true, force: true })
  }
})
