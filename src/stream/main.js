// // 读取流
// var fs = require('fs')
// var data = ''

// // 创建可读流
// var readerStream = fs.createReadStream('text.txt')

// // 设置编码为 utf8
// readerStream.setEncoding('utf8')

// // 处理流事件 data end error
// readerStream.on('data', (chunk) => {
//   data += chunk
// })

// readerStream.on('end', () => {
//   console.log(data)
// })

// readerStream.on('error', (err) => {
//   console.log(err.stack)
// })

// console.log('done')

// // 写入流
// console.log('================== start! =================')
// var fs = require('fs')
// var data = 'Welcom to join us!'

// // 创建一个具有写入权限的流，写入到文件 text.txt 中
// var writerStream = fs.createWriteStream('text.txt')

// // 使用 utf8 编码写入数据
// writerStream.write(data, 'utf8')

// // 标记文件末尾
// writerStream.end()

// // 处理流事件
// writerStream.on('finish', () => {
//   console.log('================== write success! =================')
// })

// writerStream.on('error', (err) => {
//   console.log(err.stack)
// })

// console.log('================== done! =================')

// // 管道流
// // 实现大文件的复制功能
// // 引入 fs 模块
// var fs = require('fs')

// // 创建一个可读流
// var readerStream = fs.createReadStream('text.txt')

// // 创建一个可写流
// var writerStream = fs.createWriteStream('copy.txt')

// // 管道流读写操作
// // 读取 text.txt 文件内容，并将内容写入到 copy.txt 文件中
// readerStream.pipe(writerStream)

// console.log('copy success!')

// var data = ''
// readerStream.on('data', (chunk) => {
//   data += chunk
// })
// readerStream.on('end', () => {
//   console.log(data)
// })

// 链式流 管道流的链式编程思想
// 实现文件的压缩和解压缩
var fs = require('fs')
var zlib = require('zlib')

// 压缩 text.txt 文件为 text.txt.gz 文件
fs.createReadStream('text.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('text.txt.gz'))

console.log('done!')
