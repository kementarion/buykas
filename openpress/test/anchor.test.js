import assert from 'node:assert/strict'
import test from 'node:test'
import { extractText, slugify } from '../src/markdown/anchor.js'

test('slugify matches the VuePress / @mdit-vue algorithm', () => {
  assert.equal(slugify('1. 创世诞生（2008 - 2009年）'), '_1-创世诞生-2008-2009年')
  assert.equal(slugify('Hello World'), 'hello-world')
  assert.equal(slugify('Kaspa: The True Successor'), 'kaspa-the-true-successor')
  assert.equal(slugify('2. Solana goes down'), '_2-solana-goes-down')
  assert.equal(slugify('Foo/Bar'), 'foo-bar')
  assert.equal(slugify('a  b'), 'a-b')
  assert.equal(slugify('123'), '_123')
  assert.equal(slugify(''), '')
})

test('extractText walks inline tokens', () => {
  const tokens = [
    { type: 'text', text: 'Hello ' },
    { type: 'strong', tokens: [{ type: 'text', text: 'World' }] },
    { type: 'codespan', text: 'code' },
  ]
  assert.equal(extractText(tokens), 'Hello Worldcode')
})
