# 注意事项与已知差异

## 零依赖

- 运行时只需要 **Node.js >= 20**，不需要 `npm install`。
- `package.json` 的 `dependencies` / `devDependencies` 均为空。
- 唯一的第三方代码是 `openpress/vendor/marked/marked.esm.js`（MIT，版本冻结）。
  如需升级，替换该文件与同目录 `LICENSE` 即可，注意保持 `marked` 的导出接口不变。
- 仓库已不再使用 VuePress/Vue/Vite；`node_modules` 与 `package-lock.json` 已移除。
- 测试零依赖：`npm test`（内部用 Node 内置的 `node:test`）。

## 配置结构（新）

- 主题选项已从 `theme` 移到 `themeConfig`：`theme` 现在表示「选择哪个主题」。
- 旧写法 `theme: { logo, ... }` 仍兼容，会被自动识别为 `themeConfig`。
- 详见 [config.md](config.md)。

## URL 与路由

- `crypto/BTC.md` → `/crypto/BTC.html`
- `introduction/README.md` → `/introduction/`（输出文件为 `introduction/index.html`）
- `docs/README.md` → `/`
- `docs/en/...` → `/en/...`
- `docs/public/` 下的文件原样复制到输出根（如 `/kas/xxx.png`）。

请勿随意更改文件名/目录名，否则站内链接和外部引用可能失效。

## 锚点兼容性

标题 `id` 复刻了 VuePress 使用的 `@mdit-vue/shared` slugify 算法，并已验证
全部 45 个页面、434 个标题 id 与迁移前完全一致。修改该算法前请先跑一次
`npm run docs:build` 并比对锚点。

### 内容中已有的失效锚点

迁移前就存在 8 个指向不存在标题的锚点（内容笔误），openpress 保持了原样，
并未引入新问题。例如：

- `en/index.html` → `/en/crypto/The-BlockChain-Trilemma.html#(2)-solana-goes-down-...`
  （实际标题 id 为 `_2-solana-goes-down-...`）
- `en/introduction/index.html` → `/en/timeline/2025.html#_2025-10-05-主网压力测试`
  （英文页里引用了中文锚点）

需要的话可以单独修文案。

## 与 VuePress 的已知细微差异

1. **裸 URL 自动链接的边界**：对紧跟中文标点（如 `：`、`（`）的裸 URL，
   openpress 会比 VuePress 更积极地识别为链接。仅影响 3 个页面的纯文本呈现，
   不影响功能。
2. **整页跳转**：不再有 SPA 式无刷新导航，点击链接为整页加载（静态站更快、更省 JS）。
3. **未实现**：代码高亮、Markdown Tabs、站内搜索、评论。当前内容均未使用；
   需要时可作为独立模块增量添加。

## 容器语法的小要求

`:::` 容器与上一段/表格之间**建议留空行**。openpress 已内置自动补空行
（`normalizeContainers`），但保持空行能让源码更清晰、避免歧义。

## 新增内容

1. 在 `docs/<section>/` 新建 `.md`，同步在 `docs/en/<section>/` 建英文版。
2. 侧边栏会**自动出现**该文章，无需改配置。
3. 如果是新的一级目录，且希望出现在顶部导航，请在 `openpress.config.js`
   对应 locale 的 `navbar` 中加一项。
4. 需要固定分组内顺序时，在 `sidebarOrder` 中列出文件名。

## 修改样式 / 脚本 / 结构

内置主题位于 `openpress/themes/default/`：

- 样式：`themes/default/assets/openpress.css`
- 客户端交互：`themes/default/assets/openpress.js`
  （侧边栏开关、锚点高亮、返回顶部、图片放大、语言下拉）
- 页面结构：`themes/default/templates.js`
- 主题定义：`themes/default/index.js`

改完后 `npm run docs:dev` 会自动热重载。自定义主题见 [theming.md](theming.md)。

> 主题资源（CSS/JS）在构建时会自动追加内容哈希（`?v=xxxxxxxx`），内容一变 URL 就变，
> 因此修改样式后无需手动清浏览器或 CDN 缓存。

## 扩展 Markdown

两种方式：

1. 在 `openpress.config.js` 里通过 `markdown.extensions` 追加 marked 扩展（推荐）。
2. 在 `openpress/src/markdown/` 下新增扩展并在 `markdown/index.js` 注册。

参考 `src/markdown/container.js` 的写法。

## 测试

```bash
npm test
```

覆盖 slugify、frontmatter、扫描/标题提取、markdown（容器/链接/锚点去重/`$withBase`）、
侧边栏、导航、配置解析（locale/base 规范化）与端到端构建。新增功能请补充测试。

## 构建与部署

```bash
npm run docs:build
```

产物在 `dist/`（已被 `.gitignore` 忽略）。`build_and_deploy.sh` 会打包
`dist/` 并上传到服务器。

## 性能

全站 44 页构建耗时约 0.3 秒（不含 Git 查询）。`lastUpdated` 会为每个文件调用
一次 `git log`，文件很多时可考虑关闭 `themeConfig.lastUpdated`。
