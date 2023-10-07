// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],

  pwa: {
    manifest: {
      name: "Duivion",
      short_name: "Vion",
      theme_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "images/icons/duivion.png",
          sizes: "144x144",
          type: "image/png"
        }, {
          src: "public/images/icon/logo.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    }, devOptions: {
      enabled: true,
    }
  },

  // tailwindcss: {
  //   cssPath: "~/assets/css/tailwind.css",
  //   configPath: "~/tailwind.config.ts",
  // }
})
