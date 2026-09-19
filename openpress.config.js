import { defineConfig } from './openpress/index.js'

export default defineConfig({
  source: 'docs',
  dest: 'dist',
  public: 'docs/public',
  base: '/',
  hostname: 'https://buykas.com',
  title: 'Kaspa 投研笔记',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/webp',
        href: '/logo/Kaspa-Icon-32.webp',
        sizes: '32x32',
      },
    ],
  ],

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
        { text: 'Kaspa 理论', link: '/research/' },
        { text: 'Kaspa 团队', link: '/team/' },
        { text: 'Kaspa 纪事', link: '/timeline/' },
        { text: 'Kaspa 话题', link: '/topic/' },
        { text: '加密货币基础知识', link: '/crypto/' },
        { text: '关于', link: '/about/' },
      ],
    },
    '/en/': {
      lang: 'en-US',
      title: 'Kaspa Notes',
      description: ' ',
      selectLanguageName: 'English',
      selectLanguageText: 'Language',
      lastUpdatedText: 'Last Update',
      navbar: [
        { text: 'Home', link: '/en/' },
        { text: 'Introduction', link: '/en/introduction/' },
        { text: 'Research', link: '/en/research/' },
        { text: 'Team', link: '/en/team/' },
        { text: 'Timeline', link: '/en/timeline/' },
        { text: 'Topics', link: '/en/topic/' },
        { text: 'Crypto', link: '/en/crypto/' },
        { text: 'About', link: '/en/about/' },
      ],
    },
  },

  theme: 'default',

  themeConfig: {
    logo: '/logo/Kaspa-Icon-Dark-Green-on-White.svg',
    colorMode: 'light',
    lastUpdated: true,
    sidebarDepth: 5,
    prevNext: true,
  },

  sidebar: 'auto',

  sidebarOrder: {
    crypto: [
      'Basic-Knowledge',
      'PoW-PoS',
      'The-BlockChain-Trilemma',
      'Node-And-Miner',
      'BTC',
      'ETH',
    ],
  },
})
