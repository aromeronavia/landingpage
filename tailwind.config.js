const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#171B61",
      gray: colors.gray,
      white: "#f8f8f8",
      black: colors.black,
      blue: colors.blue,
      background: "#645A53"
    },
    fontFamily: {
      sans: ["Raleway", "serif"]
    }
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};
