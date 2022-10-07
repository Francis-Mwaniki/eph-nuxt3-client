// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: [
    "~/assets/css/main.css",
    "~/assets/css/global.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
  ],
  vite: {
    server: {
      proxy: {
        "/api/v1/register": {
          target: "http://localhost:7000/",
          ws: true,
        },
        "/api/v1/login": {
          target: "http://localhost:7000/",
          ws: true,
        },
      },
    },
  },

  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white",
  },

  //import css
  tailwindcss: {
    cssPath: "~/assets/main.css",
  },
  //runtime config for server endpoints
  /*  runtimeConfig: {
    MONGO_URL: process.env.MONGO_URL,
  }, */
  //Register nitro plugin
  /*  nitro: {
    plugins: ["@/server/db/index.js"],
  }, */
  //transpile a few modules
  build: {
    transpile: ["vue-toastification"],
  },
});
