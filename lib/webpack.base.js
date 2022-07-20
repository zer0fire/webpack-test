const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const setMPA = () => {

}


const entry = 'index.js'
const cssRegExp = /\.css$/g
const jsRegExp = /\.js/g

module.exports = {
  entry: entry,
  resolveLoader: {
    // loader 配置的路径
    modules: ['node_modules', './loaders']
  },
  module: {
    // loader 配置规则
    rules: [
      {
        test: cssRegExp,
        use: [
          'css-loader',
          'style-loader'
        ]
      },
      {
        test: jsRegExp,
        use: [
          {
            loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
            options: {
              name: 'lee'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
  ]
}