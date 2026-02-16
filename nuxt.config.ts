export default defineNuxtConfig({
  compatibilityDate: '2026-02-15',
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Fuad Sabseb - frontend Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional portfolio of Fuad, a Frontend Developer specializing in modern web applications' },
        { name: 'author', content: 'Fuad' },
        { name: 'keywords', content: 'portfolio, frontend developer, web development, vue.js, nuxt' },
        { property: 'og:title', content: 'Fuad Sabseb - Frondend web Developer' },
        { property: 'og:description', content: 'Check out my portfolio and projects' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' }
      ]
    }
  },
  
  modules: [
    '@nuxt/image-edge',
    '@vueuse/nuxt'
  ],
  
  image: {
    domains: ['images.unsplash.com', 'via.placeholder.com']
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'http://localhost:3000'
    }
  }
})
