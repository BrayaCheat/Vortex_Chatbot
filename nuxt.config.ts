// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  pages: true,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-fonts'
  ],
  runtimeConfig: {
    GEMINI_KEY: process.env.GEMINI_KEY,
    GEMINI_ENDPOINT: process.env.GEMINI_ENDPOINT,
    GEMINI_MODEL: process.env.GEMINI_MODEL
  },
  googleFonts: {
    families: {
      "JetBrains Mono": [400,700,900]
    },
    display: 'swap',
    prefetch: true,
    preload: true,
    useStylesheet: true
  },
  app: {
    head: {
      charset: 'utf-8',
      title: 'Braya - BRAINSTORM YOUR IDEA',
      viewport: 'width=device-width, user-scalable=no, initial-scale=0'
    }
  },
  devServer: {
    host: '0.0.0.0'
  }
})
