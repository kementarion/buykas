/**
 * Emphasis closed by punctuation and followed by more text.
 *
 * marked (the vendored parser) only accepts a closing emphasis run when it is
 * followed by whitespace, punctuation or the end of the input. CommonMark is more
 * permissive: a closing run preceded by punctuation and followed by a letter is
 * still right-flanking, so `**加粗。**后面` is valid emphasis. marked emitted those
 * delimiters as literal text instead — and because Chinese has no spaces between
 * sentences, `**…。**下一句` is an extremely common shape in this site's docs.
 *
 * This extension claims exactly the case marked cannot handle: the content of the
 * run ends with punctuation or a symbol, and the run is immediately followed by a
 * character that is neither whitespace nor punctuation/symbol (CJK ideographs,
 * letters, digits). Everything else keeps going through marked's own rules, so
 * normal `**bold** text` behaviour is untouched.
 */
const STRONG_ADJACENT = /^(\*\*|__)(?=[^\s])([^*_]*?[\p{P}\p{S}])\1(?=[^\s\p{P}\p{S}])/u
const EM_ADJACENT = /^(\*|_)(?=[^\s])([^*_]*?[\p{P}\p{S}])\1(?=[^\s\p{P}\p{S}])/u

export function emphasisAdjacentExtension() {
  return {
    name: 'openpressEmphasisAdjacent',
    level: 'inline',
    tokenizer(src) {
      const strong = STRONG_ADJACENT.exec(src)
      if (strong) {
        return {
          type: 'strong',
          raw: strong[0],
          text: strong[2],
          tokens: this.lexer.inlineTokens(strong[2], []),
        }
      }
      const em = EM_ADJACENT.exec(src)
      if (em) {
        return {
          type: 'em',
          raw: em[0],
          text: em[2],
          tokens: this.lexer.inlineTokens(em[2], []),
        }
      }
      return undefined
    },
  }
}
