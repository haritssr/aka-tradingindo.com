module.exports = {
  mode: "jit",
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          1000: "#5E725B",
          950: "#7F957C",
        },
        blue: {
          fb: "#1777F2",
          ln: "#2867B2",
        },
        gray: {
          bkg: "#1C1B22",
          comp: "#32313C",
          button1: "#9059FF",
          button2: "#4B4A54",
          text: "#FBFBFE",
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
