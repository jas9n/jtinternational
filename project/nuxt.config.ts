// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  routeRules: {
    '/*': {
      cors: true,
    }
  },
  app: {
    head: {
      title: 'JagTrim International',
      link: [{ rel: 'icon', type: 'image/jpg', href: '' }]
    },
  },
  modules: ['@pinia/nuxt'],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
