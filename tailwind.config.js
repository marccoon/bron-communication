module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '660px',
      md: '768px',
      lg: '1024px',
      xl: '1536px'
     },
    textColor: theme => ({
      ...theme('colors'),
      'btn': '#fff',
      'btnColor': '#786AF7',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'btn': '#786AF7',
      'btnFocus': '#5645F5',
      'pagination': '#C9AB81',
      'body': '#141414',
      'menu': '#0B1315',
      'dishes': '#0F1D22',

    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
