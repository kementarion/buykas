import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { withBase } from './config.js'
import { escapeHtml } from './utils/html.js'

/**
 * Write `sitemap.xml` when a `hostname` is configured. Returns the file name,
 * or `null` when the sitemap is disabled.
 */
export function writeSitemap(config, pages) {
  if (!config.hostname) return null
  const host = config.hostname.replace(/\/$/, '')
  const entries = pages
    .map((page) => {
      const loc = escapeHtml(`${host}${withBase(config, page.routePath)}`)
      const lastmod = page.lastUpdated
        ? `\n    <lastmod>${escapeHtml(page.lastUpdated.slice(0, 10))}</lastmod>`
        : ''
      return `  <url>\n    <loc>${loc}</loc>${lastmod}\n  </url>`
    })
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
  writeFileSync(join(config.destDir, 'sitemap.xml'), xml)
  return 'sitemap.xml'
}
