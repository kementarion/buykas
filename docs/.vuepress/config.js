import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({


  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Kaspa 百科文档',
      description: ' ',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Kaspa Documentation',
      description: ' ',
    }
  },

  
  base: "/",

  // lang: 'zh-CN',
  // title: 'Kaspa 知识库',
  // description: ' ',

  head: [
    ['link', { 
      rel: 'icon', 
      type: 'image/webp',
      href: '/logo/Kaspa-Icon-32.webp',
      sizes: '32x32'
    }]
  ],

  theme: defaultTheme({
    logo: '/logo/Kaspa-Icon-Dark-Green-on-White.svg',

    colorMode: 'light',


    locales: {
      '/': {
        selectLanguageName: '中文',
        selectLanguageText: 'Language',
        lastUpdatedText: '最近更新',
        navbar: [
          {
            text: '首页',
            link: '/'
          },
          {
            text: 'Kaspa 简介',
            link: '/introduction/'
          },
          {
            text: 'Kaspa 理论',
            link: '/research/'
          },
          {
            text: 'Kaspa 团队',
            link: '/team/'
          },
          {
            text: 'Kaspa 纪事',
            link: '/timeline/'
          },
          {
            text: 'Kaspa 话题',
            link: '/topic/'
          },

          {
            text: '加密货币基础知识',
            link: '/crypto/'
          },
          {
            text: '关于',
            link: '/about/'
          }
        ],

        sidebar: {

          '/introduction/': [
            {
              children: [
                'README.md',
              ]
            }
          ],

          '/timeline/': [
            {
              children: [
                '2021-2024.md',
                '2025.md',
                '2026.md',
              ]
            }
          ],

          '/research/': [
            {
              children: [
                'README.md',
              ]
            }
          ],

          '/team/': [
            {
              children: [
                'README.md',
              ]
            }
          ],

          '/topic/': [
            {
              children: [
                '1.Fee.md',
                '2.OldTrxHistory.md',
                '3.TrxInBlock.md',
                '4.OriNewmanInterviewByXXIM.md',
              ]
            }
          ],
          '/resource/': [
            {
              children: [
                'README.md'
              ]
            }
          ],

          '/crypto/': [
            {
              children: [
                'Basic-Knowledge.md',
                'PoW-PoS.md',
                'The-BlockChain-Trilemma.md',
                'Node-And-Miner.md',
                'BTC.md',
                'ETH.md',
              ]
            }
          ],


          '/about/': [
            {
              children: [
              ]
            }
          ]
        }
      },



      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        lastUpdatedText: 'Last Update',
        navbar: [
          {
            text: 'Home',
            link: '/en/'
          },
          {
            text: 'Introduction',
            link: '/en/introduction/'
          },
          {
            text: 'Research',
            link: '/en/research/'
          },
          {
            text: 'Team',
            link: '/en/team/'
          },
          {
            text: 'Timeline',
            link: '/en/timeline/'
          },
          {
            text: 'Topics',
            link: '/en/topic/'
          },
          {
            text: 'Crypto',
            link: '/en/crypto/'
          },
          {
            text: 'About',
            link: '/en/about/'
          }
        ],

        sidebar: {

          '/en/introduction/': [
            {
              children: [
                'README.md',
              ]
            }
          ],

          '/en/timeline/': [
            {
              children: [
                '2021-2024.md',
                '2025.md',
                '2026.md',
              ]
            }
          ],

          '/en/research/': [
            {
              children: [
                'README.md',
              ]
            }
          ],

          '/en/team/': [
            {
              children: [
                'README.md',
              ]
            }
          ],

          '/en/topic/': [
            {
              children: [
                '1.Fee.md',
                '2.OldTrxHistory.md',
                '3.TrxInBlock.md',
                '4.OriNewmanInterviewByXXIM.md',
              ]
            }
          ],
          '/en/resource/': [
            {
              children: [
                'README.md'
              ]
            }
          ],

          '/en/crypto/': [
            {
              children: [
                'Basic-Knowledge.md',
                'PoW-PoS.md',
                'The-BlockChain-Trilemma.md',
                'Node-And-Miner.md',
                'BTC.md',
                'ETH.md',
              ]
            }
          ],


          '/en/about/': [
            {
              children: [
              ]
            }
          ]
        }
      },


    },



    contributors: false,

    sidebarDepth: 4,

    lastUpdated: true,





  }),

  bundler: viteBundler(),


})
