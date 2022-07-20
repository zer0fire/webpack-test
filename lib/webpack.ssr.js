const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const cssRegExp = /\.css$/g

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: cssRegExp,
        use: 'ignore-loader'
      }
    ]
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