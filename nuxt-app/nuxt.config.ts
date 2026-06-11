// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", href: "/che-2.png" }],
      htmlAttrs: {
        lang: "ja",
      },
    },
  },
  css: ["@/assets/style.css"],
});
