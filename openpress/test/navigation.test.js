import assert from 'node:assert/strict'
import test from 'node:test'
import { buildPrevNext, buildSections } from '../src/navigation.js'

const pages = [
  { relativePath: 'crypto/README.md', routePath: '/crypto/', isIndex: true, title: 'Crypto' },
  { relativePath: 'crypto/BTC.md', routePath: '/crypto/BTC.html', isIndex: false, title: 'BTC' },
  { relativePath: 'crypto/ETH.md', routePath: '/crypto/ETH.html', isIndex: false, title: 'ETH' },
]

const sidebarMap = {
  '/crypto/': [
    {
      text: '',
      children: [
        { text: 'BTC', link: '/crypto/BTC.html' },
        { text: 'ETH', link: '/crypto/ETH.html' },
      ],
    },
  ],
}

test('buildSections orders the index first, then sidebar order', () => {
  const sections = buildSections(sidebarMap, pages)
  assert.deepEqual(
    sections.get('/crypto/').map((page) => page.routePath),
    ['/crypto/', '/crypto/BTC.html', '/crypto/ETH.html'],
  )
})

test('buildPrevNext links neighbours within a section', () => {
  const nav = buildPrevNext(buildSections(sidebarMap, pages))
  assert.equal(nav.get('/crypto/BTC.html').prev.routePath, '/crypto/')
  assert.equal(nav.get('/crypto/BTC.html').next.routePath, '/crypto/ETH.html')
  assert.equal(nav.get('/crypto/ETH.html').next, null)
})
