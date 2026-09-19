import { readFileSync, readdirSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { resolveLocale } from './config.js'
import { parseFrontmatter } from './frontmatter.js'

const IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  '.vuepress',
  '.openpress',
  'dist',
])

const H1_RE = /^#[ \t]+(.+?)[ \t]*$/m
const FENCED_CODE_RE = /^(```|~~~)[^\n]*\n[\s\S]*?^\1[^\n]*$/gm

/**
 * First ATX `#` heading, ignoring anything inside fenced code blocks (where a
 * line starting with `#` is usually a shell comment, not a title).
 */
function extractTitle(content) {
  const withoutCode = content.replace(FENCED_CODE_RE, '')
  const match = H1_RE.exec(withoutCode)
  return match ? match[1].trim() : ''
}

export function toRoutePath(relativePath) {
  let path = relativePath.replace(/\.md$/i, '')
  if (path === 'README') return '/'
  if (path.endsWith('/README')) return `/${path.slice(0, -'README'.length)}`
  return `/${path}.html`
}

export function scanPages(config) {
  const pages = []
  walk(config.sourceDir, config.sourceDir, pages, config)
  return pages
}

function walk(dir, root, pages, config) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const absolute = join(dir, entry.name)

    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name) || absolute === config.publicDir) continue
      walk(absolute, root, pages, config)
      continue
    }

    if (!entry.isFile() || !entry.name.endsWith('.md')) continue

    const relativePath = relative(root, absolute).split(sep).join('/')
    const raw = readFileSync(absolute, 'utf8')
    const { data, content } = parseFrontmatter(raw)
    const routePath = toRoutePath(relativePath)
    const localePath = resolveLocale(config, routePath)
    const heading = extractTitle(content)

    pages.push({
      filePath: absolute,
      relativePath,
      routePath,
      localePath,
      frontmatter: data,
      content,
      raw,
      title: data.title || heading || config.locales[localePath]?.title || '',
      isHome: data.home === true,
      isIndex: relativePath.endsWith('README.md'),
    })
  }
}
