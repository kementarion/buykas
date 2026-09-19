# 配置参考

站点配置位于仓库根目录的 `openpress.config.js`，默认导出（`export default`）一个对象。
也可以 `import { defineConfig } from 'openpress'` 包裹以获得编辑器提示。

## 顶层字段

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | string | `docs` | 内容目录（相对于仓库根） |
| `dest` | string | `dist` | 输出目录 |
| `public` | string | `docs/public` | 静态资源目录，原样复制到输出根 |
| `base` | string | `/` | 站点基础路径（会自动补全前导 `/`） |
| `hostname` | string | `''` | 站点域名，设置后生成 `sitemap.xml`、canonical 与 RSS 链接 |
| `title` | string | `''` | 站点标题（作为 locale 缺省） |
| `description` | string | `''` | 站点描述 |
| `head` | array | `[]` | 注入 `<head>` 的额外标签 |
| `locales` | object | 见下 | 多语言配置 |
| `theme` | string \| object | `'default'` | 主题：`'default'`、主题目录路径或内联主题对象 |
| `themeConfig` | object | 见下 | 主题选项 |
| `sidebar` | `'auto'` \| object \| false | `'auto'` | 侧边栏；`auto` 自动生成，也可传显式映射 |
| `sidebarOrder` | object | `{}` | 每个分组的固定排序 |
| `sidebarTitles` | object | `{}` | 每个分组的标题（默认空） |
| `markdown` | object | 见下 | Markdown 选项与扩展 |
| `hooks` | object | `{}` | 生命周期钩子 |
| `feed` | `false` \| object | `false` | 可选 RSS 2.0 订阅源 |

## locales

键统一规范为 `/<前缀>/`，`/` 为默认语言（写成 `en`、`/en`、`/en/` 均可）：

```js
locales: {
  '/': {
    lang: 'zh-CN',
    title: 'Kaspa 投研笔记',
    description: ' ',
    selectLanguageName: '中文',
    selectLanguageText: 'Language',
    lastUpdatedText: '最近更新',
    navbar: [
      { text: '首页', link: '/' },
      { text: 'Kaspa 简介', link: '/introduction/' },
    ],
  },
  '/en/': {
    lang: 'en-US',
    title: 'Kaspa Notes',
    selectLanguageName: 'English',
    navbar: [ /* ... */ ],
  },
}
```

- `link` 指向目录时以 `/` 结尾（如 `/introduction/`），指向页面时用 `.html`。
- 导航项的 active 状态按路径前缀判断。

## theme

```js
theme: 'default'                          // 内置主题
theme: './themes/my-theme/index.js'       // 自定义主题目录（相对配置文件）
theme: { name: 'inline', layouts: { default: (ctx) => '<html>…</html>' } }  // 内联主题
```

主题结构见 [theming.md](theming.md)。

## themeConfig

内置主题的选项（自定义主题可自由定义）：

| 字段 | 默认值 | 说明 |
| --- | --- | --- |
| `logo` | `''` | 导航栏 Logo 路径 |
| `colorMode` | `'light'` | 预留 |
| `lastUpdated` | `true` | 是否显示 Git 最近更新时间 |
| `sidebarDepth` | `4` | 页内目录（TOC）收集的最大标题层级 |
| `prevNext` | `true` | 是否显示上一页/下一页 |
| `footer` | `''` | 预留 |

> 兼容性：若把选项对象直接写在 `theme` 上（旧写法），会被自动当作 `themeConfig`。

## markdown

```js
markdown: {
  // 透传给 marked 的选项
  options: { breaks: false },

  // 追加 marked 扩展（数组元素为 marked 的 extension 对象）
  extensions: [
    {
      name: 'myExtension',
      level: 'inline',
      start: (src) => src.indexOf('@'),
      tokenizer: (src) => { /* ... */ },
      renderer: (token) => { /* ... */ },
    },
  ],

  // 覆盖容器默认标题（默认按语言：中文「提示/相关信息/注意/警告」，英文 Tips/Info/...）
  containers: { tip: 'Heads up', info: 'Note' },
}
```

## hooks

```js
hooks: {
  // 页面扫描后、渲染前，可修改 page（如注入额外数据）
  extendPage(page, { config, theme }) {},

  // 渲染完成后，返回字符串则替换 HTML
  onPageRendered(page, html, ctx) {},

  // 全站构建完成后
  onBuildDone({ config, theme, pages, sidebarMap, sitemap, feed }) {},
}
```

## feed

设置后生成 RSS 2.0（需要 `hostname` 与页面的 Git 时间）：

```js
feed: { file: 'rss.xml', count: 20, title: 'My Blog', description: '…' },
// 或简写
feed: true,
```

## sidebarOrder

分组按目录名索引，值为文件名（不含 `.md`）数组：

```js
sidebarOrder: {
  crypto: ['Basic-Knowledge', 'PoW-PoS', 'The-BlockChain-Trilemma', 'Node-And-Miner', 'BTC', 'ETH'],
}
```

未列出的文件排在后面，按文件名排序。中英文共用同一份顺序。

自动侧边栏仅在目录包含多篇文章时显示；若某个目录下只有一篇文章（例如仅有 `README.md`），该页不显示左侧导航，页内目录（TOC）会移到左侧。

## 显式侧边栏（可选）

若想完全手动控制，可将 `sidebar` 设为一个「路径前缀 → 分组数组」的映射：

```js
sidebar: {
  '/crypto/': [
    { text: '加密货币基础知识', children: [
      { text: '基本名词与概念', link: '/crypto/Basic-Knowledge.html' },
    ] },
  ],
}
```

## head

支持字符串或 `[tag, attrs]` 元组：

```js
head: [
  ['link', { rel: 'icon', type: 'image/webp', href: '/logo/Kaspa-Icon-32.webp' }],
  '<meta name="author" content="BuyKas">',
]
```

## 环境

- 需要 Node.js >= 20。
- 无任何 npm 依赖；`package.json` 的 `dependencies` / `devDependencies` 为空。
