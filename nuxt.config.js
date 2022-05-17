// import colors from 'vuetify/es5/util/colors'
const siteUrl = process.env.SITE_URL || 'https://dezaes.ru'
const companyName = 'Dezaes'
const companyDescription = 'Уничтожение тараканов, клопов, клещей и комаров в Москве и МО. Официальная СЭС. Гарантия до 1 года по договору. Льготы.'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Dezaes',
    title: companyName,
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: companyDescription },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/favicon/safari-pinned-tab.svg'
      },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-awesome-swiper.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/robots',
    '@nuxtjs/yandex-metrika',
    '@nuxtjs/sitemap',
    [
      'nuxt-social-meta',
      {
        url: siteUrl,
        title: companyName,
        // site_name: "Site name",
        description: companyDescription,
        img: '/social.jpg',
        img_size: { width: '600', height: '400' },
        locale: 'ru_RU',
        // twitter: "@user",
        // twitter_card: "summary_large_image",
        theme_color: '#151317'
      }
    ]
  ],
  sitemap: {
    hostname: siteUrl,
    gzip: true
  },
  yandexMetrika: {
    id: '88731644',
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    useCDN: false
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: siteUrl + '/sitemap.xml'
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  styleResources: {
    scss: ['./assets/styles/global/*.scss']
  },
  svgSprite: {
    input: '~/assets/icons/'
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    defaultAssets: {
      font: false,
      icons: 'mdi'
    },
    // defaultAssets: {
    //   font: {
    //     family: 'Montserrat'
    //   }
    // },
    theme: {
      disable: true
    }
  },
  serverMiddleware: [
    { path: '/server-middleware', handler: '~/server-middleware/rest.js' }
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
