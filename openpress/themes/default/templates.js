import { withBase } from '../../src/config.js'
import { escapeHtml, renderHeadTags } from '../../src/utils/html.js'
import { isActive, translateRoute } from '../../src/utils/routes.js'

function renderHead(config, page, locale, routeSet) {
  const title =
    page.isHome || !page.title ? locale.title : `${page.title} | ${locale.title}`
  const description =
    page.frontmatter.description || locale.description || config.description || ''
  const canonical = config.hostname
    ? `${config.hostname.replace(/\/$/, '')}${page.routePath}`
    : ''

  const parts = [
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width,initial-scale=1">',
    `<title>${escapeHtml(title)}</title>`,
    description ? `<meta name="description" content="${escapeHtml(description)}">` : '',
  ]

  if (canonical) parts.push(`<link rel="canonical" href="${escapeHtml(canonical)}">`)

  for (const key of config.localeKeys) {
    const translated = translateRoute(page.routePath, page.localePath, key)
    if (routeSet && !routeSet.has(translated)) continue
    parts.push(
      `<link rel="alternate" hreflang="${escapeHtml(config.locales[key].lang)}" href="${escapeHtml(withBase(config, translated))}">`,
    )
  }

  parts.push(...renderHeadTags(config.head))
  parts.push(`<link rel="stylesheet" href="${withBase(config, '/assets/openpress.css')}">`)
  return parts.filter(Boolean).join('\n    ')
}

function renderNavbar(config, page, locale) {
  const themeConfig = config.themeConfig
  const items = (locale.navbar || [])
    .map((item) => {
      const active = isActive(page.routePath, item.link)
      const href = withBase(config, item.link)
      return `<a class="op-nav-link${active ? ' is-active' : ''}" href="${escapeHtml(href)}">${escapeHtml(item.text)}</a>`
    })
    .join('\n          ')

  const languages = config.localeKeys
    .map((key) => {
      const target = translateRoute(page.routePath, page.localePath, key)
      const active = key === page.localePath
      return `<a class="op-language-link${active ? ' is-active' : ''}" href="${escapeHtml(withBase(config, target))}">${escapeHtml(config.locales[key].selectLanguageName)}</a>`
    })
    .join('\n            ')

  const logo = themeConfig.logo
    ? `<img class="op-logo" src="${escapeHtml(withBase(config, themeConfig.logo))}" alt="logo">`
    : ''
  const brandTitle = locale.title || config.title || ''
  const currentLanguage =
    config.locales[page.localePath]?.selectLanguageName ||
    locale.selectLanguageText ||
    'Language'

  return `<header class="op-navbar">
      <div class="op-navbar-inner">
        <button class="op-toggle-menu" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="op-mobile-menu">☰</button>
        <a class="op-brand" href="${escapeHtml(withBase(config, page.localePath))}">${logo}${brandTitle ? `<span class="op-brand-title">${escapeHtml(brandTitle)}</span>` : ''}</a>
        <nav class="op-nav-links" aria-label="site navigation">
          ${items}
        </nav>
        <details class="op-language">
          <summary aria-label="${escapeHtml(locale.selectLanguageText || 'Language')}">${escapeHtml(currentLanguage)}</summary>
          <div class="op-language-menu">
            ${languages}
          </div>
        </details>
      </div>
    </header>`
}

function renderMobileMenu(config, page, locale, sidebar) {
  const items = (locale.navbar || [])
    .map((item) => {
      const active = isActive(page.routePath, item.link)
      return `<a class="op-menu-link${active ? ' is-active' : ''}" href="${escapeHtml(withBase(config, item.link))}">${escapeHtml(item.text)}</a>`
    })
    .join('\n          ')

  const languages = config.localeKeys
    .map((key) => {
      const target = translateRoute(page.routePath, page.localePath, key)
      const active = key === page.localePath
      return `<a class="op-menu-lang-link${active ? ' is-active' : ''}" href="${escapeHtml(withBase(config, target))}">${escapeHtml(config.locales[key].selectLanguageName)}</a>`
    })
    .join('\n            ')

  const section = renderSidebarItems(config, sidebar, page)

  return `<aside class="op-mobile-menu" id="op-mobile-menu" aria-label="menu">
      <nav class="op-menu-nav" aria-label="site navigation">
        ${items}
      </nav>
      <div class="op-menu-section">
        <p class="op-menu-heading">${escapeHtml(locale.selectLanguageText || 'Language')}</p>
        <div class="op-menu-lang-links">
          ${languages}
        </div>
      </div>
      ${section ? `<div class="op-menu-section">${section}</div>` : ''}
    </aside>
    <div class="op-menu-mask"></div>`
}

function renderSidebarItems(config, sidebar, page) {
  if (!sidebar || !sidebar.length) return ''

  const groups = sidebar
    .map((group) => {
      const children = (group.children || [])
        .map((child) => {
          const active = page.routePath === child.link
          return `<li><a class="op-sidebar-link${active ? ' is-active' : ''}" href="${escapeHtml(withBase(config, child.link))}">${escapeHtml(child.text)}</a></li>`
        })
        .join('\n              ')

      const heading = group.text
        ? `<p class="op-sidebar-heading">${escapeHtml(group.text)}</p>`
        : ''

      return `<li class="op-sidebar-group">
            ${heading}
            <ul class="op-sidebar-children">
              ${children}
            </ul>
          </li>`
    })
    .join('\n          ')

  return `<ul class="op-sidebar-items">
          ${groups}
      </ul>`
}

function renderSidebar(config, sidebar, page) {
  const items = renderSidebarItems(config, sidebar, page)
  if (!items) return ''
  return `<aside class="op-sidebar" aria-label="sidebar">
      ${items}
    </aside>`
}

function renderToc(config, headers, tocTitle) {
  const maxDepth = config.themeConfig.sidebarDepth || 4
  const items = headers.filter((header) => header.depth > 1 && header.depth <= maxDepth && header.slug)
  if (items.length < 2) return ''

  const tree = []
  const stack = [{ depth: 0, children: tree }]
  for (const header of items) {
    while (stack.length > 1 && stack[stack.length - 1].depth >= header.depth) stack.pop()
    const node = { header, depth: header.depth, children: [] }
    stack[stack.length - 1].children.push(node)
    stack.push(node)
  }

  const renderItems = (nodes) =>
    nodes
      .map((node) => {
        const { header } = node
        const children = node.children.length
          ? `<ul class="op-toc-list">\n            ${renderItems(node.children)}\n          </ul>`
          : ''
        return `<li class="op-toc-item op-toc-level-${header.depth}"><a href="#${escapeHtml(header.slug)}">${escapeHtml(header.title)}</a>${children}</li>`
      })
      .join('\n          ')

  const title = tocTitle || ''

  return `<details class="op-toc">
      <summary class="op-toc-title">${escapeHtml(title)}</summary>
      <ul class="op-toc-list">
          ${renderItems(tree)}
      </ul>
    </details>`
}

function renderPageMeta(config, locale, lastUpdated) {
  if (!config.themeConfig.lastUpdated || !lastUpdated) return ''
  const date = lastUpdated.slice(0, 10)
  return `<footer class="op-page-meta"><span class="op-meta-label">${escapeHtml(locale.lastUpdatedText || 'Last Updated')}:</span> <time datetime="${escapeHtml(lastUpdated)}">${escapeHtml(date)}</time></footer>`
}

function renderPageNav(config, prev, next) {
  if (!config.themeConfig.prevNext || (!prev && !next)) return ''
  const prevHtml = prev
    ? `<a class="op-page-nav-link prev" href="${escapeHtml(withBase(config, prev.routePath))}"><span class="op-page-nav-label">← ${escapeHtml(prev.title)}</span></a>`
    : '<span class="op-page-nav-link is-empty"></span>'
  const nextHtml = next
    ? `<a class="op-page-nav-link next" href="${escapeHtml(withBase(config, next.routePath))}"><span class="op-page-nav-label">${escapeHtml(next.title)} →</span></a>`
    : '<span class="op-page-nav-link is-empty"></span>'
  return `<nav class="op-page-nav" aria-label="page navigation">
      ${prevHtml}
      ${nextHtml}
    </nav>`
}

function renderHome(config, page, locale, contentHtml) {
  const heroText = page.frontmatter.heroText || ''
  const description = page.frontmatter.tagline || locale.description || ''
  return `<main class="op-page op-page-home">
      <header class="op-hero">
        ${heroText ? `<h1 id="main-title">${escapeHtml(heroText)}</h1>` : ''}
        ${description ? `<p class="op-hero-description">${escapeHtml(description)}</p>` : ''}
      </header>
      <div class="op-content">
        ${contentHtml}
      </div>
    </main>`
}

export function renderPage(ctx) {
  const { config, page, locale, routeSet, contentHtml, headers, sidebar, prev, next, lastUpdated } = ctx
  const head = renderHead(config, page, locale, routeSet)
  const hasSidebar = !page.isHome && Array.isArray(sidebar) && sidebar.length > 0
  const navbar = renderNavbar(config, page, locale)
  const mobileMenu = renderMobileMenu(config, page, locale, sidebar)

  let body
  if (page.isHome) {
    body = renderHome(config, page, locale, contentHtml)
  } else {
    const tocHtml = renderToc(config, headers, page.title || locale.title)
    const tocLeft = !hasSidebar
    body = `<div class="op-layout${tocLeft ? ' op-layout-toc-left' : ''}">
        ${tocLeft ? tocHtml : renderSidebar(config, sidebar, page)}
        <main class="op-page">
          <div class="op-content">
            ${contentHtml}
          </div>
          ${renderPageMeta(config, locale, lastUpdated)}
          ${renderPageNav(config, prev, next)}
        </main>
        ${tocLeft ? '' : tocHtml}
      </div>`
  }

  return `<!doctype html>
<html lang="${escapeHtml(locale.lang)}">
  <head>
    ${head}
  </head>
  <body>
    <div id="openpress-app">
      ${navbar}
      ${mobileMenu}
      ${body}
    </div>
    <script src="${withBase(config, '/assets/openpress.js')}" defer></script>
  </body>
</html>
`
}

export function renderNotFound(ctx) {
  const { config, locale, routeSet } = ctx
  const head = renderHead(
    config,
    { routePath: '/404.html', title: '404', isHome: false, localePath: '/', frontmatter: {} },
    locale,
    routeSet,
  )
  return `<!doctype html>
<html lang="${escapeHtml(locale.lang)}">
  <head>
    ${head}
  </head>
  <body>
    <div id="openpress-app" class="op-not-found">
      <h1>404</h1>
      <p>This page could not be found.</p>
      <p><a href="${escapeHtml(withBase(config, '/'))}">Back to home</a></p>
    </div>
  </body>
</html>
`
}
