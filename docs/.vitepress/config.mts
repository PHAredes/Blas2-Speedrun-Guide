import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: "Blas2Guide",
  description: "Documentation for vanilla and randomized speedruns",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/PHAredes/Blas2-Speedrun-Guide/tree/main/docs/:path'
    },

    nav: [
      { text: 'Arsenal', link: '/arsenal/' },
      { text: 'Prayers', link: '/prayers/' },
      { text: 'Scenes', link: '/scenes/' },
      { text: 'Techniques', link: '/technique/' }
    ],

    sidebar: [
      {
        text: 'Categories',
        items: [
          { text: 'Arsenal of Penitence',
            link: '/arsenal/',
            collapsed: true,
            items: [
              { text: 'Ruego al Alba', link: '/arsenal/ruego/'},
              { text: 'Sarmiento & Centella', link: '/arsenal/s&c'},
              { text: 'Veredicto', link: '/arsenal/veredicto'}
            ]
          },
          { text: 'Chants and Quick Verses', link: '/prayers/' },
          { text: 'Scene by Scene', link: '/scenes/' },
          { text: 'Techniques', 
            link: '/technique/',
            collapsed: true,
            items: [
              { text: 'Glitched', link: '/technique/glitched/'},
              { text: 'Intended', link: '/technique/intended/'},
              { text: 'Mirabras Rabbithole', link: '/technique/mirabras_rabbithole/'}
            ]
          
          }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Glossary', link: '/resources/glossary' },
          { text: 'Additional Resources', link: '/resources/additional_resources' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Game Versions', link: '/about/game_versions' },
          { text: 'Contributing', link: '/about/CONTRIBUTING' },
          { text: 'Credits', link: '/about/CREDITS' },
          { text: 'License', link: '/about/LICENSE' },
          { text: 'Disclaimer', link: '/about/DISCLAIMER' },
        ]
      },
    ],

    footer: {
      message: 'Released under the MIT License.'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PHAredes/Blas2-Speedrun-Guide' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Blasphemous2Guide' },
    ],

  }
})
