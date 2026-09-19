import { posix } from 'node:path'
import { Marked } from '../../vendor/marked/marked.esm.js'
import { withBase } from '../config.js'
import { escapeAttr } from '../utils/html.js'
import { extractText, slugify } from './anchor.js'
import { containerExtension, getContainerTitles, normalizeContainers } from './container.js'
import { transformVueSyntax } from './vue-syntax.js'

function uniqueSlug(slug, used) {
  if (!slug) return slug
  const count = used.get(slug) || 0
  used.set(slug, count + 1)
  return count === 0 ? slug : `${slug}-${count}`
}

function pageDir(routePath) {
  if (routePath.endsWith('/')) return routePath
  const index = routePath.lastIndexOf('/')
  return routePath.slice(0, index + 1)
}

/**
 * VuePress rewrites relative `*.md` links to their generated route so that
 * links keep working on the static site. Reproduce that behaviour here.
 */
export function rewriteMarkdownHref(href, routePath, base = '/') {
  if (!href) return href
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) return href
  if (href.startsWith('#')) return href

  const match = /^([^#?]*)\.md(#.*)?$/i.exec(href)
  if (!match) return href

  const rawTarget = match[1]
  const fragment = match[2] || ''

  let resolved
  if (rawTarget.startsWith('/')) {
    resolved = posix.normalize(rawTarget)
  } else {
    resolved = posix.normalize(posix.join(pageDir(routePath), rawTarget))
  }

  if (resolved === '/README') resolved = '/'
  else if (resolved.endsWith('/README')) resolved = `${resolved.slice(0, -'/README'.length)}/`
  else resolved = `${resolved}.html`

  return `${withBase({ base }, resolved)}${fragment}`
}

export function createMarkdown(config = {}) {
  const markdownConfig = config.markdown ?? {}
  const marked = new Marked({
    gfm: true,
    breaks: false,
    ...(markdownConfig.options ?? {}),
  })

  let used = new Map()
  let headers = []
  let currentPage = { routePath: '/' }
  const containerState = { titles: {} }

  marked.use({ extensions: [containerExtension(containerState)] })
  marked.use({
    renderer: {
      heading(token) {
        const text = this.parser.parseInline(token.tokens)
        const plain = extractText(token.tokens).trim()
        const slug = uniqueSlug(slugify(plain), used)
        headers.push({ depth: token.depth, title: plain, slug })
        const id = slug ? ` id="${slug}"` : ''
        return `<h${token.depth}${id}>${text}</h${token.depth}>\n`
      },
      link(token) {
        const { href, title, text, tokens, autolink } = token
        const newHref = rewriteMarkdownHref(href, currentPage.routePath, config.base)
        const external = /^[a-z][a-z0-9+.-]*:\/\//i.test(newHref) || newHref.startsWith('//')
        const inner = autolink ? escapeAttr(text) : this.parser.parseInline(tokens)
        let output = `<a href="${escapeAttr(newHref)}"`
        if (title) output += ` title="${escapeAttr(title)}"`
        if (external) output += ' target="_blank" rel="noopener noreferrer"'
        return `${output}>${inner}</a>`
      },
    },
  })

  for (const extension of markdownConfig.extensions ?? []) {
    marked.use(extension)
  }

  return {
    render(markdown, page = { routePath: '/' }) {
      used = new Map()
      headers = []
      currentPage = page
      containerState.titles = getContainerTitles(
        config.locales?.[page.localePath]?.lang,
        markdownConfig.containers,
      )
      const html = marked.parser(marked.lexer(normalizeContainers(markdown)))
      return { html: transformVueSyntax(html), headers }
    },
    lexer(markdown) {
      return marked.lexer(markdown)
    },
  }
}

export { slugify, extractText } from './anchor.js'
