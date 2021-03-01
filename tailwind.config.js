module.exports = {
  purge: ["./components/*.js", "./pages/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          1000: "#5E725B",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
