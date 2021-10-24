module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './pages/*.tsx', './components/*.tsx', './components/**/*.tsx'],
  darkMode: '',
  theme: {
    extend: {
      colors: {
        green: {
          brand: '#5E725B',
        },
        gray: {
          bkg: '#1C1B22',
        },
      },
      fontFamily: {
        inter: ['Inter'],
        EBGaramond: ['EB Garamond'],
        poppins: ['Poppins'],
        CGaramond: ['Cormorant Garamond'],
        DMSans: ['DM Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
