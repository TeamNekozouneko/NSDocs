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
          { text: '参加方法', link: '/how-to-join' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/n5UgCR3VKH' },
      { icon: 'x', link: 'https://x.com/Nekozounekosrv' },
      { icon: 'github', link: 'https://github.com/TeamNekozouneko' },
    ]
  }
})
