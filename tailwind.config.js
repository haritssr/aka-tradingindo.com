module.exports = {
  mode: "jit",
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          brand: "#5E725B",
        },
        gray: {
          bkg: "#1C1B22",
        },
      },
      fontFamily: {
        inter: ["Inter"],
        EBGaramond: ["EB Garamond"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
