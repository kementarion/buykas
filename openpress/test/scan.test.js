import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { resolveConfig } from '../src/config.js'
import { scanPages, toRoutePath } from '../src/scan.js'

function site(files) {
  const dir = mkdtempSync(join(tmpdir(), 'openpress-scan-'))
  for (const [relativePath, content] of Object.entries(files)) {
    const file = join(dir, 'docs', relativePath)
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, content)
  }
  return dir
}

test('toRoutePath maps README and markdown files', () => {
  assert.equal(toRoutePath('README.md'), '/')
  assert.equal(toRoutePath('guide/README.md'), '/guide/')
  assert.equal(toRoutePath('guide/start.md'), '/guide/start.html')
})

test('derives the title from the first real heading, not code comments', () => {
  const dir = site({
    'a.md': '```bash\n# this is a comment\n```\n\n# Real Title\n',
    'b.md': '```bash\n# only a comment\n```\n',
  })
  try {
    const config = resolveConfig({ title: 'Site', locales: { '/': { title: 'Site' } } }, dir)
    const pages = scanPages(config)
    const titles = Object.fromEntries(pages.map((page) => [page.relativePath, page.title]))
    assert.equal(titles['a.md'], 'Real Title')
    assert.equal(titles['b.md'], 'Site')
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test('does not treat files in the public directory as pages', () => {
  const dir = site({ 'guide/start.md': '# Start\n', 'public/asset.md': '# Asset\n' })
  try {
    const config = resolveConfig({}, dir)
    const pages = scanPages(config)
    assert.deepEqual(
      pages.map((page) => page.relativePath),
      ['guide/start.md'],
    )
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})
