const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // Don't transpile mapbox-gl - it's already compiled for modern browsers
  transpileDependencies: [
    'vuetify',
    // Exclude mapbox-gl by not including it here
  ],
  css: {
    loaderOptions: {
      sass: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
})