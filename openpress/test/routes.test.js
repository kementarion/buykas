import assert from 'node:assert/strict'
import test from 'node:test'
import { isActive, routeToFile, translateRoute } from '../src/utils/routes.js'

test('routeToFile maps routes to output files', () => {
  assert.equal(routeToFile('/out', '/'), '/out/index.html')
  assert.equal(routeToFile('/out', '/intro/'), '/out/intro/index.html')
  assert.equal(routeToFile('/out', '/crypto/BTC.html'), '/out/crypto/BTC.html')
})

test('translateRoute switches locale prefixes', () => {
  assert.equal(translateRoute('/crypto/BTC.html', '/', '/en/'), '/en/crypto/BTC.html')
  assert.equal(translateRoute('/en/crypto/BTC.html', '/en/', '/'), '/crypto/BTC.html')
  assert.equal(translateRoute('/', '/', '/en/'), '/en/')
  assert.equal(translateRoute('/en/', '/en/', '/'), '/')
})

test('isActive matches exact and nested routes', () => {
  assert.equal(isActive('/', '/'), true)
  assert.equal(isActive('/crypto/BTC.html', '/'), false)
  assert.equal(isActive('/crypto/BTC.html', '/crypto/'), true)
  assert.equal(isActive('/crypto/BTC.html', '/crypto/BTC.html'), true)
  assert.equal(isActive('/crypto/BTC.html', '/topic/'), false)
})
