# 编写主题

openpress 的主题是一个普通对象（通常用 `defineTheme()` 包裹以获得校验）。它决定
HTML 结构、样式与客户端脚本。

## 主题契约

```js
import { defineTheme } from 'openpress/theme'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineTheme({
  name: 'openpress-theme-example',

  // 资源基目录；assets 相对于它解析
  dir: __dirname,

  // 相对 dir 的文件，构建时复制到 dist 中相同的相对路径
  assets: ['assets/theme.css', 'assets/theme.js'],

  // 至少提供 default；notFound 可选
  layouts: {
    default: (ctx) => '<!doctype html>…',
    notFound: (ctx) => '<!doctype html>…',
    // 通过 frontmatter 的 layout: post 选择
    post: (ctx) => '<!doctype html>…',
  },
})
```

## 布局上下文 `ctx`

| 字段 | 说明 |
| --- | --- |
| `config` | 完整站点配置（含 `themeConfig`、`locales`、`base` 等） |
| `theme` | 当前主题对象 |
| `page` | 页面数据（见下） |
| `locale` | 当前语言配置（`config.locales[page.localePath]`） |
| `contentHtml` | 渲染好的正文 HTML |
| `headers` | 标题列表 `[{ depth, title, slug }]`，用于页内目录 |
| `sidebar` | 当前页的侧边栏分组数组 |
| `prev` / `next` | 上一页 / 下一页的 page 对象或 `null` |
| `lastUpdated` | 该页的 Git 最近更新时间（ISO 字符串，可能为空） |
| `routeSet` | 所有路由路径的 `Set`，用于判断翻译页是否存在 |
| `isHome` | 是否首页（`frontmatter.home === true`） |
| `url(path)` | 应用 `base` 前缀，等价于 `withBase(config, path)` |
| `escapeHtml(value)` | HTML 转义 |

`page` 主要字段：`routePath`、`relativePath`、`localePath`、`frontmatter`、
`content`、`title`、`isHome`、`isIndex`、`lastUpdated`。

## 最小示例

```js
// my-theme/index.js
import { defineTheme } from 'openpress/theme'

const layout = (ctx) => `<!doctype html>
<html lang="${ctx.locale.lang}">
  <head>
    <meta charset="utf-8">
    <title>${ctx.escapeHtml(ctx.page.title || ctx.locale.title)}</title>
    <link rel="stylesheet" href="${ctx.url('/assets/theme.css')}">
  </head>
  <body>
    <nav>
      ${ctx.locale.navbar
        .map((item) => `<a href="${ctx.url(item.link)}">${ctx.escapeHtml(item.text)}</a>`)
        .join('')}
    </nav>
    <main>${ctx.contentHtml}</main>
  </body>
</html>`

export default defineTheme({
  name: 'my-theme',
  dir: import.meta.dirname,
  assets: ['assets/theme.css'],
  layouts: { default: layout },
})
```

在配置中使用：

```js
theme: './my-theme/index.js',
```

## 命名布局

`layouts` 中除 `default` 外的键可通过页面 frontmatter 选择：

```markdown
---
layout: post
---
```

构建时若 `frontmatter.layout` 命中主题里的布局就使用它，否则回退到 `default`。
`notFound` 用于生成 `404.html`。

## 内置主题

`themes/default/` 是最佳参考实现：

- `themes/default/index.js` — 主题定义
- `themes/default/templates.js` — 导航、侧边栏、TOC、首页 Hero 等布局函数
- `themes/default/assets/openpress.css` / `openpress.js` — 样式与客户端交互
