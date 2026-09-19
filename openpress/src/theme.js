import { isAbsolute, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

/**
 * Identity helper for authoring themes with type-safety-friendly syntax.
 * A theme must provide at least a `layouts.default` function.
 */
export function defineTheme(theme) {
  if (!theme || typeof theme !== 'object') {
    throw new TypeError('defineTheme() expects a theme object')
  }
  if (!theme.layouts || typeof theme.layouts.default !== 'function') {
    throw new TypeError('theme.layouts.default must be a function')
  }
  return {
    name: 'openpress-theme-anonymous',
    dir: '',
    assets: [],
    ...theme,
  }
}

export async function resolveTheme(config) {
  const selection = config.theme

  if (!selection || selection === 'default') {
    const mod = await import('../themes/default/index.js')
    return mod.default
  }

  if (typeof selection === 'string') {
    const file = isAbsolute(selection) ? selection : resolve(config.cwd, selection)
    const mod = await import(pathToFileURL(file).href)
    return defineTheme(mod.default ?? mod)
  }

  return defineTheme(selection)
}

export function resolveLayout(theme, page) {
  const name = page.frontmatter?.layout
  if (name && typeof theme.layouts[name] === 'function') return theme.layouts[name]
  return theme.layouts.default
}
