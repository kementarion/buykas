const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036f]/g

/**
 * Slugify that is byte-for-byte compatible with @mdit-vue/shared v2.1.4,
 * which is what VuePress uses to generate heading ids.
 */
export function slugify(str) {
  return String(str)
    .normalize('NFKD')
    .replace(rCombining, '')
    .replace(rControl, '')
    .replace(rSpecial, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase()
}

export function extractText(tokens) {
  if (!tokens) return ''
  let output = ''
  for (const token of tokens) {
    switch (token.type) {
      case 'text':
      case 'escape':
      case 'codespan':
        output += token.text ?? ''
        break
      case 'br':
        output += ' '
        break
      case 'image':
        output += token.text ?? ''
        break
      case 'html':
        output += String(token.text ?? '').replace(/<[^>]*>/g, '')
        break
      default:
        if (token.tokens) output += extractText(token.tokens)
        else if (typeof token.text === 'string') output += token.text
    }
  }
  return output
}
