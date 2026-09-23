# 写作语法与约定

openpress 支持 VuePress 风格的大部分语法，现有文章无需改动。

## Frontmatter

文件开头用 `---` 包裹，支持简单的 `key: value`：

```markdown
---
title: 自定义标题
description: 页面描述
home: true
heroText: "Kaspa：比特币的真正继承者"
tagline: 副标题
---
```

- `home: true` 使用首页布局（Hero + 正文），不显示侧边栏。
- `title` 用于 `<title>` 和侧边栏；缺省时取正文第一个 `# 标题`。
- `heroText` / `tagline` 仅在首页使用。

## 标题与锚点

`#` ~ `######` 标题会自动生成 `id`，规则与 VuePress 完全一致
（基于 `@mdit-vue/shared` 的 slugify），因此旧锚点链接不会失效。

```markdown
## 1. 创世诞生（2008 - 2009年）
```

生成 `id="_1-创世诞生-2008-2009年"`。同名标题第二次出现会自动加 `-1` 后缀。

## 提示容器

```markdown
::: tip
默认标题按语言自动生成（中文「提示」/ 英文「Tips」）
:::

::: tip 自定义标题
标题支持 **行内 Markdown**
:::

::: info 相关信息
:::

::: warning 注意
:::

::: danger 危险
:::
```

支持的类型：`tip`、`info`、`note`、`important`、`warning`、`danger`、
`caution`、`details`（`danger` 与 `caution` 样式相同）。
没有写标题时会使用该语言的默认标题。

> 注意：容器起始行最好与上一段/表格之间留一个空行。openpress 会自动补空行，
> 但保持空行能让源码更清晰。

## 行内样式

- 支持 `**加粗**`、`*斜体*`、`__加粗__`、`_斜体_`，也支持 `***加粗斜体***`。
- 强调符号**可以紧贴中文标点**，不需要额外空格：`**这句话。**下一句继续` 会正常渲染为加粗。
  marked 默认只在结束符后面是空格、标点或行尾时才闭合强调，中文正文里这个条件经常不成立
  （标点后直接接下一句），openpress 用 `src/markdown/emphasis.js` 里的行内扩展补上了这一种情况。
- 行内代码用反引号：`` `gas` ``；链接写法见下文。

## 链接

- 站内 Markdown 链接会自动转换为 `.html`：

  ```markdown
  [PoW 与 PoS 之争](./crypto/PoW-PoS.md)
  [Kaspa 理论](../research/README.md)
  ```

  分别生成 `/crypto/PoW-PoS.html` 与 `/research/`。

- 带锚点：`[xxx](./timeline/2025.md#_2025-07-01-官方-x-账号去中心化)`
- 外链会自动加 `target="_blank" rel="noopener noreferrer"`。
- 也可以直接写已经生成的 `.html` 路径。

## 图片

推荐使用绝对路径（`docs/public/` 会原样复制到站点根目录）：

```markdown
![说明](/kas/kaspa-dag.png)
```

也兼容旧的 Vue 写法，openpress 会在构建时转换为标准 HTML：

```html
<img :src="$withBase('/kas/kaspa-dag-image.png')" />
```

## 表格

标准 GFM 表格：

```markdown
| 名称 | 说明 |
| :--- | :--- |
| Kaspa | 基于 DAG 的 PoW 加密货币 |
```

## 代码块

支持围栏代码块与行内代码（当前站点内容未使用）：

````markdown
```js
console.log('hello')
```
````

> 目前不做语法高亮，代码块以等宽深色样式呈现。

## 目录结构约定

- 侧边栏**自动生成**，无需在配置里手写。
- 每个一级目录是一个分组；分组内的非 `README.md` 页面按文件名排序，
  `README.md` 作为分组落地页不进入列表。
- 若某个分组只有 `README.md`，则侧边栏只显示该页。
- 需要固定顺序时，在 `openpress.config.js` 的 `sidebarOrder` 中配置（见 config.md）。

## 双语

- 中文：`docs/<section>/<file>.md`
- 英文：`docs/en/<section>/<file>.md`

新增文章时请同步维护两种语言，参见仓库根目录的 `.clinerules`。
