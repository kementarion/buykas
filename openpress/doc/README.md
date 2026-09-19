# openpress 文档

这里记录 openpress 的用法、约定和注意事项。

| 文档 | 内容 |
| --- | --- |
| [authoring.md](authoring.md) | Markdown 写作语法与约定 |
| [config.md](config.md) | `openpress.config.js` 配置参考 |
| [theming.md](theming.md) | 编写自定义主题 |
| [reuse.md](reuse.md) | 用 openpress 搭建其他内容站点 |
| [caveats.md](caveats.md) | 注意事项、已知差异、扩展方式 |

## 一句话概括

openpress 是一个零 npm 依赖的静态站点生成器：读取 `docs/` 下的 Markdown，
输出到 `dist/`。导航栏来自配置，侧边栏按目录自动生成，双语通过
`docs/`（中文）与 `docs/en/`（英文）区分。

## 快速开始

```bash
npm run docs:dev     # 本地预览，热重载
npm run docs:build   # 生成 dist/
```

## 设计原则

1. **零外部依赖**：只用 Node 内置模块；唯一第三方代码是 `vendor/marked`（已冻结）。
2. **内容与工具分离**：`docs/` 是内容，`openpress/` 是工具，`openpress.config.js` 是站点配置。
3. **URL 稳定**：`crypto/BTC.md` → `/crypto/BTC.html`，`README.md` → `/.../index.html`。
4. **可自由修改**：整个生成器都在本仓库内，改起来没有上游兼容负担。

## 默认主题的响应式布局

- 桌面端：顶部导航靠右；左侧为章节侧边栏（目录下仅一篇文章时隐藏），页内目录
  位于右侧（无侧边栏时移到左侧）。
- 移动端（≤ 860px）：顶部导航与语言切换收进左侧抽屉菜单（汉堡按钮打开），
  页内目录折叠为正文顶部的卡片，点击展开。

