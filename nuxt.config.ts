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
  modules: ["@nuxt/content", "nuxt-icon", "@nuxtjs/tailwindcss", "@nuxt/image"],
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
});
