import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineTheme } from '../../src/theme.js'
import { renderNotFound, renderPage } from './templates.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineTheme({
  name: 'openpress-theme-default',
  dir: __dirname,
  assets: ['assets/openpress.css', 'assets/openpress.js'],
  layouts: {
    default: renderPage,
    notFound: renderNotFound,
  },
})
