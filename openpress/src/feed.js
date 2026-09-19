import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { withBase } from './config.js'
import { escapeHtml } from './utils/html.js'

/**
 * Generate an RSS 2.0 feed from pages that carry a Git last-updated date.
 * Enabled with `feed: true` (or a config object) and requires `hostname`.
 */
export function writeFeed(config, pages) {
  if (!config.feed || !config.hostname) return null

  const feed = typeof config.feed === 'object' ? config.feed : {}
  const file = feed.file ?? 'rss.xml'
  const count = feed.count ?? 20
  const host = config.hostname.replace(/\/$/, '')

  const items = pages
    .filter((page) => !page.isHome && page.lastUpdated)
    .sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated))
    .slice(0, count)

  if (!items.length) return null

  const channelTitle = feed.title || config.title || config.locales['/'].title
  const channelDescription = feed.description || config.description || ''
  const channelLink = `${host}${withBase(config, '/')}`

  const entries = items
    .map((page) => {
      const link = `${host}${withBase(config, page.routePath)}`
      return `    <item>
      <title>${escapeHtml(page.title)}</title>
      <link>${escapeHtml(link)}</link>
      <guid isPermaLink="true">${escapeHtml(link)}</guid>
      <pubDate>${new Date(page.lastUpdated).toUTCString()}</pubDate>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeHtml(channelTitle)}</title>
    <link>${escapeHtml(channelLink)}</link>
    <description>${escapeHtml(channelDescription)}</description>
${entries}
  </channel>
</rss>
`

  writeFileSync(join(config.destDir, file), xml)
  return file
}
