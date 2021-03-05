const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./components/*.js", "./pages/*.js", "./pages/productPage/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          1000: "#5E725B",
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
