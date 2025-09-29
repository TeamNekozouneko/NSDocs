import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nekozouneko Server",
  description: "Nekozouneko Serverに関する公式ドキュメント",
  srcDir: './src',
  markdown: {
    math: true,
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/icon-ns.png',
    nav: [
      { text: 'ホーム', link: '/' }
    ],

    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: '参加方法', link: '/1/how-to-join' },
          { text: 'ルール', link: '/1/rule' },
          { text: '附則', link: '/1/additional-rule' },
        ]
      },
      {
        text: 'プラグイン',
        items: [
          { text: 'プラグインとは', link: '/2/what-is-plugin' },
          { text: 'mcMMO', link: '/2/mcMMO',
            collapsed: true,
            items: [
              { text: 'スキル', link: '/2/mcMMO/skills',
                collapsed: true,
                items: [
                  { text: 'アクロバティック', link: '/2/mcMMO/skills/acrobatics' },
                  { text: '錬金術', link: '/2/mcMMO/skills/alchemy' },
                  { text: '弓', link: '/2/mcMMO/skills/archery' },
                  { text: '斧', link: '/2/mcMMO/skills/axes' },
                  { text: 'クロスボウ', link: '/2/mcMMO/skills/crossbows' },
                  { text: '掘削', link: '/2/mcMMO/skills/excavation' },
                  { text: '釣り', link: '/2/mcMMO/skills/fishing' },
                  { text: '農業', link: '/2/mcMMO/skills/herbalism' },
                  { text: '採掘', link: '/2/mcMMO/skills/mining' },
                  { text: '修理', link: '/2/mcMMO/skills/repair' },
                  { text: '剣', link: '/2/mcMMO/skills/swords' },
                  { text: '調教', link: '/2/mcMMO/skills/taming' },
                  { text: 'トライデント', link: '/2/mcMMO/skills/tridents' },
                  { text: 'メイス', link: '/2/mcMMO/skills/maces' },
                  { text: '素手', link: '/2/mcMMO/skills/unarmed' },
                  { text: '木こり', link: '/2/mcMMO/skills/woodcutting' },
                ]
              },
              { text: 'パワーレベル', link: '/2/mcMMO/powerlevel'},
              { text: 'パーティー', link: '/2/mcMMO/party' },
            ]
           },
          { text: 'QuickShop', link: '/2/QuickShop' },
          { text: 'Jobs', link: '/2/Jobs' },
          { text: 'Lands', link: '/2/Lands' },
        ]
      },
      {
        text: 'サーバー概要',
        items: [
          { text: 'Earth鯖', link: '/3/earth',
            collapsed: true,
            items: [
              { text: '導入プラグイン', link: '/3/earth/plugins' },
              { text: '遊び方ガイド', link: '/3/earth/guide' },
              { text: '経済', link: '/3/earth/economy' },
              { text: '戦争', link: '/3/earth/wars' },
            ]
           },
          { text: 'ライフ鯖', link: '/3/life' },
          { text: '超鯖', link: '/3/cho' },
          { text: 'サバイバル鯖', link: '/3/survival' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/n5UgCR3VKH' },
      { icon: 'x', link: 'https://x.com/Nekozounekosrv' },
      { icon: 'github', link: 'https://github.com/TeamNekozouneko' },
    ]
  }
})
