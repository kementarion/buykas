# openpress

A tiny, dependency-free static site generator. It owns the whole pipeline —
Markdown → HTML, navbar, auto sidebar, i18n, theming, dev server and build — and
is designed to be reused across content sites.

The only runtime requirement is **Node.js >= 20**. There are **no npm
dependencies** — the single third-party file is a vendored copy of
[marked](https://github.com/markedjs/marked) under `vendor/marked/` (MIT).

## Commands

```bash
openpress build          # build into ./dist
openpress dev            # dev server with live reload (http://localhost:8080)
openpress clean          # remove ./dist
openpress init [dir]     # scaffold a new site
openpress version
```

Run it directly without installing anything:

```bash
node openpress/bin/openpress.js build
node openpress/bin/openpress.js dev --port 8099
```

## Reuse in another site

1. Copy or link the `openpress/` directory (or install it as a package).
2. Run `openpress init my-site` (or create the files by hand).
3. Point `source` / `public` / `dest` at your content in `openpress.config.js`.

See [doc/reuse.md](doc/reuse.md) for the full guide and
[doc/theming.md](doc/theming.md) to build a custom theme.

## Architecture

```
openpress/
├── index.js                public API (defineConfig, build, defineTheme, ...)
├── bin/openpress.js        CLI entry
├── src/
│   ├── cli.js              commands: build / dev / clean / init / version
│   ├── config.js           defineConfig, load + normalise config
│   ├── theme.js            defineTheme, resolveTheme, resolveLayout
│   ├── build.js            build orchestration + hooks
│   ├── scan.js             walk the source dir, build page list
│   ├── frontmatter.js      small frontmatter parser
│   ├── sidebar.js          automatic sidebar generation
│   ├── navigation.js       sections + prev/next
│   ├── feed.js             optional RSS 2.0 feed
│   ├── dev-server.js       http server + live reload
│   ├── markdown/           marked wrapper + extensions
│   │   ├── index.js        render entry, link rewriting
│   │   ├── container.js    ::: tip / info / warning / danger
│   │   ├── anchor.js       heading ids (VuePress-compatible slugify)
│   │   └── vue-syntax.js   $withBase() / :src → plain HTML
│   └── utils/              html + route helpers
├── themes/default/         the built-in theme (layouts + assets)
├── vendor/marked/          vendored Markdown parser (MIT)
├── test/                   zero-dependency tests (node:test)
└── doc/                    notes, config, theming and reuse guides
```

## Extension points

- **Themes** — `theme: 'default' | './my-theme/index.js' | { layouts, assets }`.
  A theme provides `layouts.default(ctx)` (required) and optional named layouts
  selected with the `layout` frontmatter field.
- **Markdown** — `markdown.options` is passed to marked;
  `markdown.extensions` is an array of marked extensions;
  `markdown.containers` overrides container titles.
- **Hooks** — `hooks.extendPage`, `hooks.onPageRendered`, `hooks.onBuildDone`.
- **Public API** — everything under `src/` is exported from `index.js`.

## Tests

```bash
npm test            # from the repository root
# or
cd openpress && node --test
```

## Documentation

- [doc/README.md](doc/README.md) — index
- [doc/authoring.md](doc/authoring.md) — Markdown syntax
- [doc/config.md](doc/config.md) — configuration reference
- [doc/theming.md](doc/theming.md) — writing a theme
- [doc/reuse.md](doc/reuse.md) — using openpress for another site
- [doc/caveats.md](doc/caveats.md) — caveats and known differences
