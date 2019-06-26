const path = require('path')
// const TerserJSPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let config = {
  'target': 'web',
  'mode': 'production',
  'entry': path.resolve(__dirname, 'src/es6-index.js'),
  'output': {
    'path': path.resolve(__dirname, 'builds/es6/webpack/web/'),
    'filename': '[name].js'
  },
  module: {
    rules: [
    ]
  },
  optimization: {
    // minimizer: [new TerserJSPlugin({})]
  },
  'plugins': [
    new HtmlWebpackPlugin({
      template: './src/entry/index.html'
    })
  ]
}

module.exports = config
