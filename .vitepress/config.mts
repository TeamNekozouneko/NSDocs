import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nekozouneko Server",
  description: "Nekozouneko Serverに関する公式ドキュメント",
  srcDir: './src',
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
          { text: 'mcMMO', link: '/2/mcMMO' },
          { text: 'TreeAssist', link: '/2/TreeAssist' },
        ]
      },
      {
        text: 'サーバー概要',
        items: [
          { text: 'Earth鯖', link: '/3/life' },
          { text: 'ライフ鯖', link: '/3/life' },
          { text: '超鯖', link: '/3/life' },
          { text: 'サバイバル鯖', link: '/3/life' },
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
