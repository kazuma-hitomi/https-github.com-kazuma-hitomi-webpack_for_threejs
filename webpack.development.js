const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const outputPath = path.resolve(__dirname, './')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: outputPath,
    watchContentBase: true,
    watchOptions: {
      poll: 1000,
      ignored: ['node_modules'],
    },
  },
})
