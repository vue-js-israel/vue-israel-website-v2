// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  ssr: true,

  modules: [
    "@nuxtjs/eslint-module",
    "@nuxt/content",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-gtag",
  ],

  colorMode: {
    classSuffix: "",
  },

  gtag: {
    id: "G-XKC3HJLSP6",
  },

  eslint: {
    failOnWarning: true,
    failOnError: true,
  },

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  image: {
    cloudinary: {
      baseURL:
        "https://res.cloudinary.com/dimshik/image/upload/vuejsisrael.com/",
    },
  },

  compatibilityDate: "2025-01-05",
});
