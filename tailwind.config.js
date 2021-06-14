const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#171B61",
      gray: colors.gray,
      white: "#f8f8f8",
      black: colors.black,
      blue: colors.blueGray
    },
    fontFamily: {
      sans: ["Quicksand", "serif"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
