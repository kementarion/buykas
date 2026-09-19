import assert from 'node:assert/strict'
import test from 'node:test'
import { buildSidebarMap, getSidebar } from '../src/sidebar.js'

function page(relativePath, overrides = {}) {
  return {
    relativePath,
    routePath: overrides.routePath,
    localePath: overrides.localePath ?? '/',
    title: overrides.title ?? relativePath,
    isHome: false,
    isIndex: relativePath.endsWith('README.md'),
    ...overrides,
  }
}

const pages = [
  page('README.md', { routePath: '/', isHome: true }),
  page('crypto/README.md', { routePath: '/crypto/', title: 'Crypto' }),
  page('crypto/BTC.md', { routePath: '/crypto/BTC.html', title: 'Bitcoin' }),
  page('crypto/ETH.md', { routePath: '/crypto/ETH.html', title: 'Ethereum' }),
  page('introduction/README.md', { routePath: '/introduction/', title: 'Intro' }),
]

const config = {
  sidebar: 'auto',
  localeKeys: ['/'],
  sidebarOrder: {},
  sidebarTitles: {},
}

test('generates a section per directory, excluding README when there are siblings', () => {
  const map = buildSidebarMap(config, pages)
  assert.deepEqual(
    map['/crypto/'][0].children.map((child) => child.link),
    ['/crypto/BTC.html', '/crypto/ETH.html'],
  )
})

test('lists the README when a section only has an index page', () => {
  const map = buildSidebarMap(config, pages)
  assert.deepEqual(
    map['/introduction/'][0].children.map((child) => child.link),
    ['/introduction/'],
  )
})

test('applies sidebarOrder overrides', () => {
  const map = buildSidebarMap({ ...config, sidebarOrder: { crypto: ['ETH', 'BTC'] } }, pages)
  assert.deepEqual(
    map['/crypto/'][0].children.map((child) => child.link),
    ['/crypto/ETH.html', '/crypto/BTC.html'],
  )
})

test('getSidebar picks the longest matching prefix', () => {
  const map = buildSidebarMap(config, pages)
  assert.equal(getSidebar(config, map, '/crypto/BTC.html').length, 1)
  assert.deepEqual(getSidebar(config, map, '/unknown/page.html'), [])
})

test('getSidebar hides sections that only have a single page', () => {
  const map = buildSidebarMap(config, pages)
  assert.deepEqual(getSidebar(config, map, '/introduction/'), [])
  assert.equal(getSidebar(config, map, '/crypto/').length, 1)
})
