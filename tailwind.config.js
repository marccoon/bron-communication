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
      'title-color': '#786AF7',
      'link': '#786AF7',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'btn': '#786AF7',
      'btnFocus': '#5645F5',
      'body': '#141414',
      'menu': '#786AF7',
      'footer': '#5645F5',
    }),

    extend: {
      height: {
        '88': '22rem',
        '104': '26.5rem',
        '154': '38.5rem',
        '172': '44rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
