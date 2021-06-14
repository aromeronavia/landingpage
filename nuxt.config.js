export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: "static",
  buildDir: "dist",
  generate: {
    fallback: "404.html"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Alberto Romero",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      {
        name: "keywords",
        content:
          "Alberto Romero, Alberto, Romero, Engineer, Tech Lead and Manager, esquinacto, esquina cto, tech ctos,cto tech, tech, mexico, latam tech"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap",
        crossorigin: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  colorMode: {
    classSuffix: ""
  }
};
