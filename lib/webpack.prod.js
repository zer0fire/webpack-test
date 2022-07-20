const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const prodConfig = {
  mode: 'production',
  rules: {

  },
  plugins: [
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano')
      }),
      new HtmlWebpackExternalsPlugin({
        externals: [
          {
            module: 'react',
            entry: '',
            global: 'React'
          },
          {
            module: 'react-dom',
            entry: '',
            global: 'ReactDOM'
          }
        ]
      })
  ],
  optimization: {
    splitChunks: {}
  }
}

module.exports = merge(baseConfig, prodConfig)