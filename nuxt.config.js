require('dotenv').config()
module.exports = {
  mode: 'universal',
  buildDir: 'nuxt-dist',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ramdam - TrackDéchets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;700&display=swap',
        rel: 'stylesheet',
      },
    ],
   
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  loading: {
    color: '#FFC000',
    height: '2px',
  },

  serverMiddleware: [
    { path: '/api/index', handler: '~/api/index' },
    { path: '/api/email', handler: '~/api/email' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  moment: {
    locales: ['fr'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    '@nuxtjs/apollo',
    '@nuxtjs/dotenv',
    '@nuxtjs/moment',
    '@nuxtjs/auth',
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_AUTH_URL,
  },
  strapi: {
    url: process.env.API_AUTH_URL,
    entities: ['clients'],
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.sandbox.trackdechets.beta.gouv.fr',
        httpLinkOptions: {
          credentials: 'omit',
          fetchOptions: {
            mode: 'cors',
          },
          headers: {
            Authorization: process.env.API_TOKEN,
            'Access-Control-Allow-Origin':
              'https://sandbox.trackdechets.beta.gouv.fr',
            'Access-Control-Allow-Credentials': true,
            Origin: 'https://sandbox.trackdechets.beta.gouv.fr',
          },
        },
      },
    },
    authenticationType: '',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr',
      theme_color: '#fff',
      background_color: '#fff',
    },
    meta: [
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    ],
  },

  router: {
    middleware: ['auth'],
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/local',
            method: 'post',
            propertyName: 'jwt',
          },
          user: {
            url: 'users/me',
            method: 'get',
            propertyName: false,
          },
          logout: false,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
