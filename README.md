# Kaspa 投研笔记

基于自研静态站点生成器 [openpress](./openpress/README.md) 构建。

## 打包

无需安装任何依赖（只需 Node.js >= 20）：

```sh
npm run docs:dev     # 本地预览，热重载
npm run docs:build   # 生成 dist/
npm test             # 运行 openpress 测试
```

## 部署

- 部署在：[https://buykas.com/](https://buykas.com/)

## 目录

```
docs/            内容（中文），docs/en/ 为英文
docs/public/     静态资源，原样复制到站点根
openpress/       生成器（零依赖），详见 openpress/README.md
openpress.config.js  站点配置
dist/            构建产物（已忽略）
```

## 文档

- [openpress 说明](./openpress/README.md)
- [写作语法](./openpress/doc/authoring.md)
- [配置参考](./openpress/doc/config.md)
- [注意事项与已知差异](./openpress/doc/caveats.md)
