# 用 openpress 搭建其他内容站点

openpress 与具体站点解耦：内容目录、静态资源、输出目录、语言、导航、主题全部由
`openpress.config.js` 决定。因此同一份工具可以服务多个网站。

## 方式一：复用仓库内的 openpress

把 `openpress/` 目录复制（或 git submodule / symlink）到新站点，然后：

```bash
node openpress/bin/openpress.js init .
node openpress/bin/openpress.js dev
```

或使用脚手架：

```bash
node /path/to/openpress/bin/openpress.js init my-site
cd my-site
node /path/to/openpress/bin/openpress.js build
```

## 方式二：作为 npm 包使用

openpress 的 `package.json` 声明了 `bin` 与 `exports`。发布或本地 `npm link` 后：

```bash
npx openpress build
npx openpress dev
```

```js
// openpress.config.js
import { defineConfig } from 'openpress'

export default defineConfig({ /* ... */ })
```

## 目录约定

```
my-site/
├── openpress.config.js     # 站点配置
├── docs/                   # source（默认）
│   ├── README.md
│   └── public/             # 静态资源，复制到站点根
└── dist/                   # 构建产物（建议 gitignore）
```

可用 `source` / `public` / `dest` 改成任意布局，例如博客：

```js
export default {
  source: 'content',
  public: 'static',
  dest: 'public',
  locales: { '/': { lang: 'en-US', title: 'My Blog', navbar: [{ text: 'Home', link: '/' }] } },
}
```

## 编程式 API

```js
import { loadConfig, build, createDevServer, defineConfig, defineTheme } from 'openpress'

const config = await loadConfig(process.cwd())
await build(config)

// 或者不读配置文件
import { resolveConfig } from 'openpress'
const config = resolveConfig({ source: 'content', dest: 'public' }, process.cwd())
await build(config)
```

启动开发服务器：

```js
await createDevServer(config, { port: 3000, host: '0.0.0.0' })
```

## 多语言

`locales` 的键即语言前缀，内容放在对应目录：

```
docs/         ->  '/'
docs/en/      ->  '/en/'
```

侧边栏、导航、语言切换都会自动按 locale 处理。翻译页链接通过
`translateRoute()` 生成，不存在对应页面时会跳过 `hreflang`。

## 内容形态

- **文档站**：目录即分组，侧边栏自动生成（当前 buykas 即如此）。
- **博客**：用 frontmatter 写 `date`、`tags`，配合自定义主题的 `post` 布局；
  开启 `feed: true` 生成 RSS。
- **落地页**：frontmatter `home: true`，或用自定义 `layout`。

## 部署

构建产物是纯静态文件（`dist/`），可部署到任意静态托管：

```bash
node openpress/bin/openpress.js build
# 上传 dist/ 到 Nginx / GitHub Pages / Netlify / S3 ...
```

## 升级策略

openpress 无第三方运行时依赖，唯一内置库是 `vendor/marked`（冻结版本）。升级
Markdown 解析器时替换该文件即可，不会牵动整棵依赖树。
