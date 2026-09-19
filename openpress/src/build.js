import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { withBase } from './config.js'
import { writeFeed } from './feed.js'
import { createMarkdown } from './markdown/index.js'
import { buildPrevNext, buildSections } from './navigation.js'
import { scanPages } from './scan.js'
import { buildSidebarMap, getSidebar } from './sidebar.js'
import { writeSitemap } from './sitemap.js'
import { resolveLayout, resolveTheme } from './theme.js'
import { escapeHtml } from './utils/html.js'
import { routeToFile } from './utils/routes.js'

function createGitLastUpdated(config) {
  const cache = new Map()
  return (filePath) => {
    if (cache.has(filePath)) return cache.get(filePath)
    let value = ''
    try {
      value = execFileSync('git', ['log', '-1', '--format=%cI', '--', filePath], {
        cwd: config.cwd,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim()
    } catch {
      value = ''
    }
    cache.set(filePath, value)
    return value
  }
}

/**
 * Copy the theme's assets into the output and return a `{ '/path': hash }` map
 * so templates can bust caches with `?v=<hash>`.
 */
function copyThemeAssets(config, theme) {
  const hashes = {}
  if (!theme.dir || !theme.assets?.length) return hashes
  for (const asset of theme.assets) {
    const from = join(theme.dir, asset)
    if (!existsSync(from)) continue
    const to = join(config.destDir, asset)
    mkdirSync(dirname(to), { recursive: true })
    cpSync(from, to)
    hashes[`/${asset}`] = createHash('sha256').update(readFileSync(from)).digest('hex').slice(0, 8)
  }
  return hashes
}

function createContext({ config, theme, page, locale, routeSet, contentHtml, headers, sidebar, prev, next, lastUpdated, assetHashes = {} }) {
  return {
    config,
    theme,
    page,
    locale,
    routeSet,
    contentHtml,
    headers,
    sidebar,
    prev,
    next,
    lastUpdated,
    isHome: page.isHome,
    url: (path) => withBase(config, path),
    asset: (path) => {
      const url = withBase(config, path)
      const hash = assetHashes[path]
      return hash ? `${url}?v=${hash}` : url
    },
    escapeHtml,
  }
}

export async function build(config) {
  const theme = await resolveTheme(config)
  const pages = scanPages(config)
  const sidebarMap = buildSidebarMap(config, pages)
  const routeSet = new Set(pages.map((page) => page.routePath))
  const markdown = createMarkdown(config)
  const lastUpdatedOf = config.themeConfig.lastUpdated
    ? createGitLastUpdated(config)
    : () => ''
  const prevNext = buildPrevNext(buildSections(sidebarMap, pages))

  rmSync(config.destDir, { recursive: true, force: true })
  mkdirSync(config.destDir, { recursive: true })

  if (existsSync(config.publicDir)) {
    cpSync(config.publicDir, config.destDir, { recursive: true })
  }
  const assetHashes = copyThemeAssets(config, theme)

  for (const page of pages) {
    if (config.hooks.extendPage) {
      await config.hooks.extendPage(page, { config, theme })
    }

    const { html, headers } = markdown.render(page.content, page)
    const locale = config.locales[page.localePath]
    const sidebar = page.isHome ? [] : getSidebar(config, sidebarMap, page.routePath)
    const nav = prevNext.get(page.routePath) || { prev: null, next: null }
    const lastUpdated = lastUpdatedOf(page.filePath)
    page.lastUpdated = lastUpdated

    const ctx = createContext({
      config,
      theme,
      page,
      locale,
      routeSet,
      contentHtml: html,
      headers,
      sidebar,
      prev: nav.prev,
      next: nav.next,
      lastUpdated,
      assetHashes,
    })

    const layout = resolveLayout(theme, page)
    let document = await layout(ctx)

    if (config.hooks.onPageRendered) {
      const transformed = await config.hooks.onPageRendered(page, document, ctx)
      if (typeof transformed === 'string') document = transformed
    }

    const outFile = routeToFile(config.destDir, page.routePath)
    mkdirSync(dirname(outFile), { recursive: true })
    writeFileSync(outFile, document)
  }

  if (typeof theme.layouts.notFound === 'function') {
    const notFoundCtx = createContext({
      config,
      theme,
      page: { routePath: '/404.html', title: '404', isHome: false, localePath: '/', frontmatter: {} },
      locale: config.locales['/'],
      routeSet,
      contentHtml: '',
      headers: [],
      sidebar: [],
      prev: null,
      next: null,
      lastUpdated: '',
      assetHashes,
    })
    writeFileSync(join(config.destDir, '404.html'), await theme.layouts.notFound(notFoundCtx))
  }

  const sitemap = writeSitemap(config, pages)
  const feed = writeFeed(config, pages)

  if (config.hooks.onBuildDone) {
    await config.hooks.onBuildDone({ config, theme, pages, sidebarMap, sitemap, feed })
  }

  return { pages, sidebarMap, theme, sitemap, feed }
}
