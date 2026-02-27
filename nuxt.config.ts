// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-02-27",
  // fallback: "2025-07-15",
  devtools: { enabled: true },
  pages: true,
  modules: [
    "@nuxt/eslint",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/devtools",
    "@nuxt/test-utils",
    "@nuxt/icon",
    "@nuxt/hints",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxt/fonts",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  css: ["~/assets/css/main.css"],
  // vite: {
  //   // plugins: [tailwindcss()],
  // },
});
