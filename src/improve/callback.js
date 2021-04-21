// 导入 fs 模块
var  fs = require('fs')
// 异步阻塞读取文件信息
// 耗时的 IO 操作
var data = fs.readFileSync('text.txt')
// 打印文件内容
console.log(data.toString())
console.log('=================Complete==================')

fs.readFile('text.txt', (err, data) => {
  if (err) return console.error(err)
  console.log(data.toString())
})
console.log('Complete!!!')