module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      'extensions': {
        '--xs': '(min-width: 30rem)',
        '--sm': '(min-width: 48rem)',
        '--md': '(min-width: 62rem)',
        '--lg': '(min-width: 75rem)',
        '--xl': '(min-width: 100rem)'
      }
    },
    'postcss-custom-selectors': {
      'extensions': {
        ':--enter': ':hover, :focus'
      }
    },
    'postcss-color-function': {},
    'autoprefixer': {}
  }
}
