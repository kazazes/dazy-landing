import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Dazy | Flower for empowered females.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A wellness platform curated by women, for women, selling the best CBD and THC products on the market.'
      },
      { name: 'og:image', property: 'og:image', content: '/img/logo/og.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/fontawesome.js'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  // bootstrapVue: {
  //   bootstrapCSS: false, // or `css`
  //   bootstrapVueCSS: false, // or `bvCSS`
  //   componentPlugins: [],
  //   directivePlugins: []
  // },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,

    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev }) {
      if (!isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }
    }
  }
}
