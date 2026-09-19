import assert from 'node:assert/strict'
import test from 'node:test'
import { parseFrontmatter } from '../src/frontmatter.js'

test('parses simple frontmatter', () => {
  const { data, content } = parseFrontmatter('---\nhome: true\ntitle: "Hi: there"\n---\n# Body\n')
  assert.deepEqual(data, { home: true, title: 'Hi: there' })
  assert.equal(content, '# Body\n')
})

test('parses numbers, booleans and arrays', () => {
  const { data } = parseFrontmatter('---\norder: 3\ndraft: false\ntags: [a, b]\n---\n')
  assert.equal(data.order, 3)
  assert.equal(data.draft, false)
  assert.deepEqual(data.tags, ['a', 'b'])
})

test('returns raw content when there is no frontmatter', () => {
  const { data, content } = parseFrontmatter('# Just a heading\n')
  assert.deepEqual(data, {})
  assert.equal(content, '# Just a heading\n')
})
