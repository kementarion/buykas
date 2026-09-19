import assert from 'node:assert/strict'
import test from 'node:test'
import { defineConfig, resolveConfig, resolveLocale, withBase } from '../src/config.js'

test('defineConfig is an identity helper', () => {
  const input = { title: 'x' }
  assert.equal(defineConfig(input), input)
})

test('resolveConfig applies defaults', () => {
  const config = resolveConfig({}, '/tmp/site')
  assert.equal(config.base, '/')
  assert.equal(config.theme, 'default')
  assert.deepEqual(config.localeKeys, ['/'])
  assert.equal(config.themeConfig.sidebarDepth, 4)
  assert.deepEqual(config.markdown, { options: {}, extensions: [], containers: {} })
})

test('supports inline themes and theme selection strings', () => {
  const inline = { layouts: { default: () => '' } }
  assert.equal(resolveConfig({ theme: inline }).theme, inline)
  assert.equal(resolveConfig({ theme: './my-theme/index.js' }).theme, './my-theme/index.js')
})

test('treats a legacy theme options object as themeConfig', () => {
  const config = resolveConfig({ theme: { logo: '/logo.svg', sidebarDepth: 2 } })
  assert.equal(config.theme, 'default')
  assert.equal(config.themeConfig.logo, '/logo.svg')
  assert.equal(config.themeConfig.sidebarDepth, 2)
})

test('normalizes locale keys with a trailing slash', () => {
  const config = resolveConfig({ locales: { '/en': { title: 'EN' } } })
  assert.ok(config.locales['/en/'])
  assert.ok(config.locales['/'])
})

test('normalizes locale keys that omit the leading slash', () => {
  const config = resolveConfig({ locales: { en: { title: 'EN' }, '/': {} } })
  assert.ok(config.locales['/en/'])
  assert.equal(resolveLocale(config, '/en/crypto/BTC.html'), '/en/')
  assert.equal(resolveLocale(config, '/crypto/BTC.html'), '/')
})

test('normalizes base to an absolute prefix', () => {
  assert.equal(resolveConfig({ base: 'docs' }).base, '/docs')
  assert.equal(resolveConfig({ base: '/docs/' }).base, '/docs/')
  assert.equal(resolveConfig({}).base, '/')
  assert.equal(withBase({ base: '/docs' }, '/a.png'), '/docs/a.png')
})

test('withBase respects the configured base', () => {
  assert.equal(withBase({ base: '/' }, '/a.png'), '/a.png')
  assert.equal(withBase({ base: '/docs/' }, '/a.png'), '/docs/a.png')
  assert.equal(withBase({ base: '/' }, 'https://x.com/a.png'), 'https://x.com/a.png')
})

test('resolveLocale picks the longest matching prefix', () => {
  const config = resolveConfig({ locales: { '/': {}, '/en/': {} } })
  assert.equal(resolveLocale(config, '/crypto/BTC.html'), '/')
  assert.equal(resolveLocale(config, '/en/crypto/BTC.html'), '/en/')
})
