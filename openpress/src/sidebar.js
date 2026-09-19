import { basename } from 'node:path'

function toItem(page) {
  return { text: page.title, link: page.routePath }
}

function sortPages(config, section, pages) {
  const order = config.sidebarOrder?.[section]
  const list = [...pages]
  if (Array.isArray(order) && order.length) {
    const index = new Map(order.map((name, i) => [name, i]))
    list.sort((a, b) => {
      const ai = index.get(basename(a.relativePath, '.md')) ?? Number.MAX_SAFE_INTEGER
      const bi = index.get(basename(b.relativePath, '.md')) ?? Number.MAX_SAFE_INTEGER
      if (ai !== bi) return ai - bi
      return a.relativePath.localeCompare(b.relativePath)
    })
  } else {
    list.sort((a, b) => a.relativePath.localeCompare(b.relativePath))
  }
  return list
}

export function buildSidebarMap(config, pages) {
  if (config.sidebar && config.sidebar !== 'auto') {
    return config.sidebar
  }

  const map = {}

  for (const localeKey of config.localeKeys) {
    const localePrefix = localeKey === '/' ? '' : localeKey.replace(/^\/|\/$/g, '')
    const localePages = pages.filter((page) => page.localePath === localeKey)
    const sections = new Map()

    for (const page of localePages) {
      if (page.isHome) continue
      let relativePath = page.relativePath
      if (localePrefix) {
        relativePath = relativePath.slice(localePrefix.length + 1)
      }
      const parts = relativePath.split('/')
      if (parts.length < 2) continue
      const section = parts[0]
      if (!sections.has(section)) sections.set(section, [])
      sections.get(section).push(page)
    }

    for (const [section, sectionPages] of sections) {
      const readme = sectionPages.find((page) => page.isIndex)
      const others = sectionPages.filter((page) => page !== readme)
      let children
      if (others.length > 0) {
        children = sortPages(config, section, others).map(toItem)
      } else if (readme) {
        children = [toItem(readme)]
      } else {
        children = []
      }

      const sectionPath = `/${localePrefix ? `${localePrefix}/` : ''}${section}/`
      map[sectionPath] = [
        {
          text: config.sidebarTitles?.[section] ?? '',
          single: sectionPages.length <= 1,
          children,
        },
      ]
    }
  }

  return map
}

export function getSidebar(config, sidebarMap, routePath) {
  const keys = Object.keys(sidebarMap).sort((a, b) => b.length - a.length)
  for (const key of keys) {
    if (key === '/') continue
    if (routePath === key || routePath.startsWith(key)) {
      const groups = sidebarMap[key]
      if (groups.every((group) => group.single)) return []
      return groups
    }
  }
  return []
}
