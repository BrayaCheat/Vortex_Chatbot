// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  pages: true,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig: {
    GEMINI_KEY: process.env.GEMINI_KEY,
    GEMINI_ENDPOINT: process.env.GEMINI_ENDPOINT,
    GEMINI_MODEL: process.env.GEMINI_MODEL
  },
  ssr: false
})
