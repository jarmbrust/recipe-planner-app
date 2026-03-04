// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@vueuse/nuxt', '@nuxt/image'],

  devtools: {
    enabled: true,
  },
  app: {
    head: {
      title: 'Recipe Planner',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      noscript: [
        { textContent: 'JavaScript is required' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/api/**': {
      cors: true,
    },
  },
  compatibilityDate: '2026-03-03',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
