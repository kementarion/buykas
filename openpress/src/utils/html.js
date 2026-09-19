export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export const escapeAttr = escapeHtml

export function renderHeadTags(head = []) {
  return head
    .map((item) => {
      if (typeof item === 'string') return item
      if (Array.isArray(item)) {
        const [tag, attrs = {}] = item
        const attrString = Object.entries(attrs)
          .map(([key, value]) => `${key}="${escapeAttr(value)}"`)
          .join(' ')
        return `<${tag}${attrString ? ` ${attrString}` : ''}>`
      }
      return ''
    })
    .filter(Boolean)
}
