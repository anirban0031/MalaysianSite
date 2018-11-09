const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#4AAAA4' },
  /*
  ** Build configuration
  */
  modules: [
    'nuxt-fontawesome',
    'bootstrap-vue/nuxt',
    ['@nuxtjs/pwa', { icon: false }],
    // ['vue-warehouse/nuxt',
    //   {
    //     vuex: true,
    //     // plugins: [
    //     //   'store/plugins/expire',
    //     //   'store/plugins/defaults'
    //     // ],
    //     storages: [
    //       'store/storages/localStorage',
    //       'store/storages/cookieStorage'
    //     ]
    //   }
    // ],
  ],
  head: {
    title: 'Electoronics Parts Whole Sale',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Source+Sans+Pro:300,400,600,700' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    // middleware: ['auth']
  },
  plugins: [
    '~/api/init.js',
    // { src: '~/plugins/localStorage.js', ssr: false }
    // { src: '~/plugins/carty.js', ssr: false },
    // { src: '~/plugins/shoppingCart.js', ssr: false }
  ],
  // vendor: ['shoppingCart.js'],
  build: {
    // vendor: ['~/plugins/shoppingCart.js'],
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
              fix : true
          }
        })
      }
    }
  },
}
