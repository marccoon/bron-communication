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
      'btnLight': '#141414',
      'input': '#141414',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'btn': '#786AF7',
      'btnLight': '#fff',
      'btnFocus': '#5645F5',
      'body': '#141414',
      'menu': '#786AF7',
      'form': '#786AF7',
      'footer': '#5645F5',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'input': '#141414',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    placeholderColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'input': '#141414',
    }),
    extend: {
      lineHeight: {
        '115': '1.15',
        '130': '1.3',
        '158': '1.58',
      },
      height: {
        '88': '22rem',
        '104': '26.5rem',
        '128': '32rem',
        '154': '38.5rem',
        '172': '44rem',
      },
      padding: {
        '104': '26rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
