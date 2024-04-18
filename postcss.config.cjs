module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      unitPrecision: 5,
      viewportWidth: 750,
      minPixelValue: 0,
      mediaQuery: false,
      propList: ['*'],
      exclude: /node_modules/i,
    }
  }
}
