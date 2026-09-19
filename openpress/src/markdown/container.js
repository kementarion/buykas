const CONTAINER_RE =
  /^:::[ \t]*([a-zA-Z][a-zA-Z0-9_-]*)[ \t]*(.*?)[ \t]*\r?\n([\s\S]*?)\r?\n:::[ \t]*(?:\r?\n|$)/

const CONTAINER_START_RE = /^:::[ \t]*[a-zA-Z]/

const DEFAULT_TITLES = {
  en: {
    important: 'Important',
    info: 'Info',
    note: 'Note',
    tip: 'Tips',
    warning: 'Warning',
    danger: 'Caution',
    caution: 'Caution',
    details: 'Details',
  },
  zh: {
    important: '重要',
    info: '相关信息',
    note: '注',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    caution: '警告',
    details: '详情',
  },
}

export function getContainerTitles(lang, overrides = {}) {
  const base =
    typeof lang === 'string' && lang.toLowerCase().startsWith('zh')
      ? DEFAULT_TITLES.zh
      : DEFAULT_TITLES.en
  return { ...base, ...overrides }
}

/**
 * Insert blank lines around container fences so that a `:::` immediately
 * following a table/paragraph is not swallowed by the previous block.
 */
export function normalizeContainers(markdown) {
  const lines = markdown.split('\n')
  const output = []
  const openRe = /^:::[ \t]*[a-zA-Z]/
  const closeRe = /^:::[ \t]*$/

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (openRe.test(line)) {
      if (output.length && output[output.length - 1].trim() !== '') output.push('')
      output.push(line)
    } else if (closeRe.test(line)) {
      output.push(line)
      if (i + 1 < lines.length && lines[i + 1].trim() !== '') output.push('')
    } else {
      output.push(line)
    }
  }

  return output.join('\n')
}

export function containerExtension(state = { titles: {} }) {
  return {
    name: 'openpressContainer',
    level: 'block',
    start(src) {
      const index = src.search(CONTAINER_START_RE)
      return index === -1 ? undefined : index
    },
    tokenizer(src) {
      const match = CONTAINER_RE.exec(src)
      if (!match) return undefined
      const kind = match[1].toLowerCase()
      const explicitTitle = match[2].trim()
      const title = explicitTitle || state.titles?.[kind] || ''
      return {
        type: 'openpressContainer',
        raw: match[0],
        kind,
        title,
        titleTokens: title ? this.lexer.inlineTokens(title, []) : [],
        tokens: this.lexer.blockTokens(match[3], []),
      }
    },
    renderer(token) {
      const title = token.title
        ? `<p class="openpress-container-title">${this.parser.parseInline(token.titleTokens)}</p>\n`
        : ''
      return (
        `<div class="openpress-container openpress-container-${token.kind}">\n` +
        title +
        this.parser.parse(token.tokens) +
        `</div>\n`
      )
    },
  }
}
