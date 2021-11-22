
export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ramdam - TrackDéchets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;700&display=swap', rel: 'stylesheet'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/apollo',
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.sandbox.trackdechets.beta.gouv.fr',
        httpLinkOptions: {
          credentials: 'include',
          headers: {
            "Authorization" : "bearer ZldObEnqawMJ3wnPKdMsqzqK7Xp2vKQoTJuX1ViG"
          }
        }
      },
    },
    authenticationType: ''
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr',
      theme_color: '#fff',
      background_color: '#fff',
    },
    meta: [ { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
