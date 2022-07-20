const loaderUtils = require('loader-utils')
const Spritesmith = require('spritesmith')
const fs = require('fs')

module.exports = function (content) {
  // ffmpeg?
  // content
  const callback = this.async()
  const sprites = content.match(/url\(.*?\)\?__sprite/g);
  const matchedImgs = []
  Spritesmith.run({ src: sprites }, (err, result) => {
    fs.writeFileSync(path.join(__dirname, 'dist/sprite.jpg'), (err, res) => {
      source = source.replace(/url\(\S*)\?__sprite/)
      if (err) {
        callback(err, null)
      }
      callback(res)
    })
  })
  // spirtesmith()
  // content.replace()
}