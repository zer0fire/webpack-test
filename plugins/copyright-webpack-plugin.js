const fs = require('fs')

class CopyRightWebpackPlugin {
  constructor () {
    console.log('used by webpack copyRight')
  }
  // compiler webpack 实例，可以获取生命周期
  // complier hooks
  apply(compiler) {
    // 同步时刻或钩子
    compiler.hooks.compile.tap('CopyRightWebpackPlugin', (compilation) => {
      console.log('compiler')
    })
    // 异步时刻或钩子
    compiler.hooks.emit.tapAsync('CopyRightWebpackPlugin', function (compilation, cb) {
      // compilation 存储了打包的所有内容
      console.log(compilation.assets)
      compilation.assets['copyright.txt'] = {
        source: function () {
          return 'copyright by dell lee'
        },
        size: function () {
          return 21
        }
      }
      // 必须要用 cb 结束
      cb()
    })
  }
}

module.exports = CopyRightWebpackPlugin