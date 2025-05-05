import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Agent specs",
  description: "Agent specifications to get everything started.",
  base: "/agent-specs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    logo: "/mountain.png",

    sidebar: [

      { text: '✨ Introduction', link: '/intro' },
      {
        text: '🚡 Backends',
        link: '/backends',

        items: [
          { text: '💽 Code-like', link: '/backends/code-like' }
        ],
      },

      {
        text: '🤔 Theories',
        items: [
          { text: 'Fluentness', link: '/theories/fluentness' }
        ],
      },

      { text: 'Todos', link: '/todos' }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AWeirdDev/agent-specs' }
    ]
  },

  head: [
    ['link', { rel: 'icon', href: '/mountain.png', type: 'image/png' }]
  ]
})
