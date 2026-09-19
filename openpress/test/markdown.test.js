import assert from 'node:assert/strict'
import test from 'node:test'
import { createMarkdown } from '../src/markdown/index.js'

function makeConfig({ lang = 'en-US', containers = {}, extensions = [] } = {}) {
  return {
    base: '/',
    locales: { '/': { lang } },
    markdown: { options: {}, extensions, containers },
  }
}

function render(markdown, config = makeConfig()) {
  return createMarkdown(config).render(markdown, { routePath: '/x.html', localePath: '/' })
}

test('uses locale default container titles', () => {
  const en = render('::: tip\n\nhello\n\n:::').html
  assert.match(en, /openpress-container-tip/)
  assert.match(en, /<p class="openpress-container-title">Tips<\/p>/)

  const zh = render('::: info\n\n你好\n\n:::', makeConfig({ lang: 'zh-CN' })).html
  assert.match(zh, /<p class="openpress-container-title">相关信息<\/p>/)
})

test('renders explicit container titles as inline markdown', () => {
  const html = render('::: tip **Bold** title\n\nbody\n\n:::').html
  assert.match(html, /<p class="openpress-container-title"><strong>Bold<\/strong> title<\/p>/)
})

test('honours container title overrides', () => {
  const html = render('::: tip\n\nx\n\n:::', makeConfig({ containers: { tip: 'Heads up' } })).html
  assert.match(html, /Heads up/)
})

test('deduplicates heading ids like markdown-it-anchor', () => {
  const { headers } = render('# A\n\n## Same\n\n## Same\n')
  assert.deepEqual(
    headers.map((header) => header.slug),
    ['a', 'same', 'same-1'],
  )
})

test('rewrites relative .md links to routes', () => {
  const { html } = createMarkdown(makeConfig()).render('[a](./b.md) [r](../research/README.md)', {
    routePath: '/crypto/x.html',
    localePath: '/',
  })
  assert.match(html, /href="\/crypto\/b\.html"/)
  assert.match(html, /href="\/research\/"/)
})

test('keeps external links untouched and opens them in a new tab', () => {
  const { html } = render('[e](https://example.com/a.md)')
  assert.match(html, /href="https:\/\/example\.com\/a\.md"/)
  assert.match(html, /target="_blank"/)
})

test('transforms Vue $withBase syntax into plain HTML', () => {
  const { html } = render('<img :src="$withBase(\'/kas/a.png\')" />')
  assert.match(html, /<img src="\/kas\/a\.png" \/>/)
  assert.doesNotMatch(html, /\$withBase/)
})
