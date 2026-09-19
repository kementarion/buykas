import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const CONFIG_CANDIDATES = [
  'openpress.config.js',
  'openpress.config.mjs',
  'openpress.config.cjs',
]

export const DEFAULT_THEME_CONFIG = {
  logo: '',
  logoDark: '',
  colorMode: 'light',
  colorModeSwitch: false,
  lastUpdated: true,
  sidebarDepth: 4,
  prevNext: true,
  footer: '',
}

/**
 * Identity helper so editors can offer IntelliSense on the config object.
 */
export function defineConfig(config) {
  return config
}

export async function loadConfig(cwd = process.cwd()) {
  let configPath = ''
  for (const candidate of CONFIG_CANDIDATES) {
    const file = resolve(cwd, candidate)
    if (existsSync(file)) {
      configPath = file
      break
    }
  }

  let userConfig = {}
  if (configPath) {
    const mod = await import(pathToFileURL(configPath).href)
    userConfig = mod.default ?? mod
  }

  const config = resolveConfig(userConfig, cwd)
  config.configFile = configPath
  return config
}

/**
 * Locale keys are always `/<prefix>/` (the root locale is exactly `/`), so that
 * route prefixes, `translateRoute` and locale lookups all agree on one shape.
 */
function normalizeLocaleKey(key) {
  const prefix = String(key ?? '')
    .replace(/^\/+|\/+$/g, '')
    .trim()
  return prefix ? `/${prefix}/` : '/'
}

/**
 * `base` is a URL prefix, so it must be absolute (`/` or `/docs/`). Trailing
 * slash is left as-is; `withBase` strips it when joining.
 */
function normalizeBase(base) {
  if (!base || base === '/') return '/'
  const value = String(base)
  return value.startsWith('/') ? value : `/${value}`
}

function defaultLocale(key) {
  const prefix = key.replace(/^\/|\/$/g, '')
  return {
    lang: 'en-US',
    title: '',
    description: '',
    selectLanguageName: prefix || 'English',
    selectLanguageText: 'Language',
    lastUpdatedText: 'Last Updated',
    navbar: [],
  }
}

function normalizeLocales(locales) {
  const input = locales && Object.keys(locales).length ? locales : { '/': {} }
  const output = {}
  for (const [key, value] of Object.entries(input)) {
    const normalizedKey = normalizeLocaleKey(key)
    output[normalizedKey] = { ...defaultLocale(normalizedKey), ...value }
  }
  if (!output['/']) output['/'] = defaultLocale('/')
  return output
}

function isInlineTheme(value) {
  return (
    value &&
    typeof value === 'object' &&
    (typeof value.layouts === 'object' || typeof value.name === 'string' || typeof value.dir === 'string')
  )
}

export function resolveConfig(user = {}, cwd = process.cwd()) {
  const locales = normalizeLocales(user.locales)

  // Backwards compatibility: `theme` used to hold theme options directly.
  const legacyThemeOptions =
    user.theme && typeof user.theme === 'object' && !isInlineTheme(user.theme) ? user.theme : {}

  const themeSelection =
    user.theme === undefined || user.theme === null
      ? 'default'
      : typeof user.theme === 'string' || isInlineTheme(user.theme)
        ? user.theme
        : 'default'

  const markdown = user.markdown ?? {}

  return {
    cwd,
    configFile: '',
    sourceDir: resolve(cwd, user.source ?? 'docs'),
    destDir: resolve(cwd, user.dest ?? 'dist'),
    publicDir: resolve(cwd, user.public ?? 'docs/public'),
    base: normalizeBase(user.base),
    hostname: user.hostname ?? '',
    title: user.title ?? '',
    description: user.description ?? '',
    head: user.head ?? [],
    locales,
    localeKeys: Object.keys(locales).sort((a, b) => b.length - a.length),
    theme: themeSelection,
    themeConfig: {
      ...DEFAULT_THEME_CONFIG,
      ...legacyThemeOptions,
      ...(user.themeConfig ?? {}),
    },
    sidebar: user.sidebar ?? 'auto',
    sidebarOrder: user.sidebarOrder ?? {},
    sidebarTitles: user.sidebarTitles ?? {},
    markdown: {
      options: markdown.options ?? {},
      extensions: markdown.extensions ?? [],
      containers: markdown.containers ?? {},
    },
    hooks: {
      extendPage: user.hooks?.extendPage,
      onPageRendered: user.hooks?.onPageRendered,
      onBuildDone: user.hooks?.onBuildDone,
    },
    feed: user.feed ?? false,
  }
}

export function resolveLocale(config, routePath) {
  for (const key of config.localeKeys) {
    if (key === '/' || routePath === key || routePath.startsWith(key)) {
      return key
    }
  }
  return '/'
}

export function withBase(config, url) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith('//') || url.startsWith('#')) {
    return url
  }
  const base = config.base.endsWith('/') ? config.base.slice(0, -1) : config.base
  if (url.startsWith('/')) return `${base}${url}`
  return `${base}/${url}`
}
