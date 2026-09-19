/**
 * Group pages into their sidebar sections and compute prev/next navigation.
 */
export function buildSections(sidebarMap, pages) {
  const sortedPages = [...pages].sort((a, b) =>
    a.relativePath.localeCompare(b.relativePath),
  )
  const sections = new Map()

  for (const [sectionPath, groups] of Object.entries(sidebarMap)) {
    const linkOrder = groups.flatMap((group) =>
      (group.children || []).map((child) => child.link),
    )
    const sectionPages = sortedPages.filter(
      (page) => page.routePath === sectionPath || page.routePath.startsWith(sectionPath),
    )
    const index = sectionPages.find((page) => page.isIndex)
    const rest = sectionPages.filter((page) => page !== index)
    rest.sort((a, b) => {
      const ai = linkOrder.indexOf(a.routePath)
      const bi = linkOrder.indexOf(b.routePath)
      if (ai === -1 && bi === -1) return a.relativePath.localeCompare(b.relativePath)
      if (ai === -1) return 1
      if (bi === -1) return -1
      return ai - bi
    })
    sections.set(sectionPath, [index, ...rest].filter(Boolean))
  }

  return sections
}

export function buildPrevNext(sections) {
  const navMap = new Map()
  for (const list of sections.values()) {
    list.forEach((page, index) => {
      navMap.set(page.routePath, {
        prev: list[index - 1] || null,
        next: list[index + 1] || null,
      })
    })
  }
  return navMap
}
