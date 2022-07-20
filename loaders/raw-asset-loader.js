module.exports = function(source) {
  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
  
  // return `export default ${json}`
  // callback 可以返回多个值
  this.callback(json, 1, 2, 3, 4)
}