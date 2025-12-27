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
          { text: '参加方法', link: '/how-to-join' },
          { text: 'アップデート情報', link: '/updates' },
          { text: 'ルール', link: '/rule' },
          { text: '利用規約', link: '/terms' },
          { text: 'プライバシーポリシー', link: '/privacy' },
          { text: '附則', link: '/additional-rule', 
            collapsed: true,
            items: [
              { text: 'NEarth', link: '/additional-rule/nearth' },
            ]
          },
          { text: 'その他', 
            collapsed: true,
            items: [
              { text: '対応方針', link: '/others/response-policy' },
              { text: '使用許可MOD一覧', link: '/others/allowed-mods' },
              { text: '動画投稿ガイドライン', link: '/others/upload-guideline' },
            ]
          },
        ]
      },
      {
        text: 'サーバー概要',
        items: [
          { text: 'NEarth', link: '/3/nearth',
            collapsed: true,
            items: [
              { text: '導入プラグイン', link: '/3/nearth/plugins' },
              { text: '遊び方ガイド', link: '/3/nearth/guide' },
              { text: '仕様まとめ', link: '/3/nearth/feature', 
                collapsed: true,
                items: [
                  { text: 'カスタムレシピ', link: '/3/nearth/feature/recipes' },
                  { text: 'Lands', link: '/3/nearth/feature/lands' },
                  { text: 'mcMMO', link: '/3/nearth/feature/mcmmo' },
                  { text: 'Jobs', link: '/3/nearth/feature/jobs' },
                ]
               }
            ]
           },
        ]
      },
      {
        text: 'プラグイン',
        items: [
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
          { text: 'QuickShop', link: '/2/quickshop' },
          { text: 'Jobs', link: '/2/jobs' },
          { text: 'Lands', link: '/2/lands',
            collapsed: true,
            items: [
              { text: '集団の作り方', link: '/2/lands/make-lands' },
              { text: '銀行にお金を入れる', link: '/2/lands/using-bank' },
              { text: '土地を広げる', link: '/2/lands/claim-lands' },
              { text: 'プレイヤーを招待する', link: '/2/lands/invite-player' },
              { text: '集団を削除する', link: '/2/lands/delete-lands' },
              { text: '戦争する', link: '/2/lands/wars' },
            ]
          },
          { text: 'HuskHomes', link: '/2/huskhomes' },
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
