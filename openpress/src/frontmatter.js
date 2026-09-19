const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/

export function parseFrontmatter(raw) {
  const match = FRONTMATTER_RE.exec(raw)
  if (!match) return { data: {}, content: raw }
  return {
    data: parseSimpleYaml(match[1]),
    content: raw.slice(match[0].length),
  }
}

function parseSimpleYaml(text) {
  const data = {}
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const sep = line.indexOf(':')
    if (sep === -1) continue
    const key = line.slice(0, sep).trim()
    if (!key) continue
    data[key] = parseValue(line.slice(sep + 1).trim())
  }
  return data
}

function parseValue(value) {
  if (value === '') return ''
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1)
  }
  if (value === 'true') return true
  if (value === 'false') return false
  if (value === 'null' || value === '~') return null
  if (/^-?\d+(?:\.\d+)?$/.test(value)) return Number(value)
  if (value.startsWith('[') && value.endsWith(']')) {
    return value
      .slice(1, -1)
      .split(',')
      .map((item) => parseValue(item.trim()))
      .filter((item) => item !== '')
  }
  return value
}
