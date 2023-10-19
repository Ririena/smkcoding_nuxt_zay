
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
 imports: {
  dirs: [
    'composables', 'composables/*/index.{ts,js,mjs,mts}', 'composables/**'
  ],
 },
// router: {
//  routes: [
//   {
//     name: 'about',
//     path: '/about',
//     components: 'pages/About.vue'
//   },
//  ],
// },

router: {
  routes: [
    {
      name: 'about',
      path: '/about',
      components: 'pages/About.vue'
    }, {
name: 'home',
path: '/home',
components: 'pages/Home.vue'
    },
  ],
},

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
