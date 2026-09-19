import assert from 'node:assert/strict'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { build } from '../src/build.js'
import { resolveConfig } from '../src/config.js'

function createSite() {
  const dir = mkdtempSync(join(tmpdir(), 'openpress-'))
  mkdirSync(join(dir, 'docs', 'guide'), { recursive: true })
  mkdirSync(join(dir, 'docs', 'public'), { recursive: true })
  writeFileSync(join(dir, 'docs', 'README.md'), '---\nhome: true\nheroText: Hi\n---\n\nWelcome\n')
  writeFileSync(join(dir, 'docs', 'guide', 'README.md'), '# Guide\n')
  writeFileSync(join(dir, 'docs', 'guide', 'start.md'), '# Start\n\n[home](../README.md)\n')
  writeFileSync(join(dir, 'docs', 'public', 'logo.svg'), '<svg></svg>')
  return dir
}

test('builds a site end to end', async () => {
  const dir = createSite()
  try {
    const config = resolveConfig(
      {
        title: 'Test',
        hostname: 'https://example.com',
        themeConfig: { lastUpdated: false },
        locales: { '/': { lang: 'en-US', title: 'Test', navbar: [{ text: 'Home', link: '/' }] } },
      },
      dir,
    )
    const { pages } = await build(config)

    assert.equal(pages.length, 3)
    for (const file of [
      'index.html',
      'guide/index.html',
      'guide/start.html',
      '404.html',
      'sitemap.xml',
      'assets/openpress.css',
      'assets/openpress.js',
      'logo.svg',
    ]) {
      assert.ok(existsSync(join(dir, 'dist', file)), `missing ${file}`)
    }

    const start = readFileSync(join(dir, 'dist', 'guide', 'start.html'), 'utf8')
    assert.match(start, /<h1 id="start">Start<\/h1>/)
    assert.match(start, /href="\/"/)
    assert.match(start, /op-sidebar-link/)

    const home = readFileSync(join(dir, 'dist', 'index.html'), 'utf8')
    assert.match(home, /id="main-title">Hi</)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test('runs lifecycle hooks', async () => {
  const dir = createSite()
  try {
    const seen = []
    const config = resolveConfig(
      {
        themeConfig: { lastUpdated: false },
        hooks: {
          extendPage: (page) => seen.push(`extend:${page.routePath}`),
          onPageRendered: (page, html) => `${html}<!-- ${page.routePath} -->`,
        },
      },
      dir,
    )
    await build(config)
    assert.ok(seen.includes('extend:/'))
    const home = readFileSync(join(dir, 'dist', 'index.html'), 'utf8')
    assert.match(home, /<!-- \/ -->/)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})
