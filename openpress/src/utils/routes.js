/**
 * Turn a route path into the output file path.
 *   '/'                  -> <dest>/index.html
 *   '/intro/'            -> <dest>/intro/index.html
 *   '/crypto/BTC.html'   -> <dest>/crypto/BTC.html
 */
export function routeToFile(destDir, routePath) {
  if (routePath === '/') return joinPath(destDir, 'index.html')
  if (routePath.endsWith('/')) return joinPath(destDir, routePath.slice(1), 'index.html')
  return joinPath(destDir, routePath.slice(1))
}

function joinPath(...parts) {
  const cleaned = parts
    .filter(Boolean)
    .map((part, index) => (index === 0 ? part.replace(/\/+$/, '') : part.replace(/^\/+|\/+$/g, '')))
  return cleaned.join('/')
}

export function isActive(routePath, link) {
  if (!link) return false
  if (link === '/') return routePath === '/'
  return routePath === link || routePath.startsWith(link)
}

/**
 * Translate a route from one locale prefix to another.
 *   ('/crypto/BTC.html', '/', '/en/')      -> '/en/crypto/BTC.html'
 *   ('/en/', '/en/', '/')                  -> '/'
 */
export function translateRoute(routePath, fromKey, toKey) {
  const fromPrefix = fromKey === '/' ? '' : fromKey.replace(/\/$/, '')
  const toPrefix = toKey === '/' ? '' : toKey.replace(/\/$/, '')
  let rest = routePath
  if (fromPrefix && rest.startsWith(fromPrefix)) {
    rest = rest.slice(fromPrefix.length)
  }
  if (!rest.startsWith('/')) rest = `/${rest}`
  return `${toPrefix}${rest}` || '/'
}
