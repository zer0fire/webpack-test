const { runLoaders } = require('loader-runner')
const path = require('path')
const fs = require('fs')

runLoaders(
  {
    resource: './demo.txt',
    loaders: [
      path.resolve(__dirname, './loaders/raw-loader')
    ],
    context: {
      minimize: true
    },
    readResource: fs.readFile.bind(fs)
  },
  (err, res) => { err ? console.error(err) : console.log(res) }
)