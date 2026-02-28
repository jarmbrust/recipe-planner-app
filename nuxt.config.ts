// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-02-27",
  devtools: { enabled: true },
  pages: true,
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "@nuxt/devtools",
    "@nuxt/test-utils",
    "@nuxt/icon",
    "@nuxt/hints",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxt/fonts",
    "shadcn-nuxt",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  css: ["~/assets/css/main.css"],
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
  // vite: {
  //   // plugins: [tailwindcss()],
  // },
});