const path = require('path')
// const TerserJSPlugin = require('terser-webpack-plugin')

let config = {
  'target': 'node',
  'mode': 'production',
  'entry': path.resolve(__dirname, 'src/es6-lib.js'),
  'output': {
    'path': path.resolve(__dirname, 'builds/es6/webpack/node'),
    'filename': 'lib.js',
    'libraryTarget': 'umd'
  },
  module: {
    rules: [
    ]
  },
  optimization: {
    // minimizer: [new TerserJSPlugin({})]
  }
}

module.exports = config
