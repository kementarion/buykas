const WITH_BASE_RE = /\$withBase\(\s*(['"])(.*?)\1\s*\)/g
const VUE_BINDING_RE = /\s:(src|href|alt|title|class|style|width|height)=/g

/**
 * Content is authored with VuePress flavoured HTML such as
 *   <img :src="$withBase('/kas/foo.png')" />
 * Rewrite it into plain, valid HTML so that the source markdown stays unchanged.
 */
export function transformVueSyntax(html) {
  return html
    .replace(WITH_BASE_RE, '$2')
    .replace(VUE_BINDING_RE, ' $1=')
}
