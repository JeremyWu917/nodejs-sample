// 引入文件模块 
let fs = require('fs')

// // 异步读取
// fs.readFile('text.txt', (err, data) => {
//   if (err) {
//     return console.err(err);
//   }
//   console.log("异步读取", data.toString())
// })


// // 同步读取
// var data = fs.readFileSync('text.txt')
// console.log('同步读取' + data.toString())

// // 打开文件
// console.log('准备打开文件')
// fs.open('text.txt', 'r+', (err, fd) => {
//   if (err) {
//     return console.error(err)
//   }
//   // console.log(fd)
//   console.log('文件打开成功！')
// })

// // 判断是否是文件
// fs.stat('text.txt', (err, stats) => {
//   console.log(stats.isFile())
// })

// // 读取文件
// fs.stat('text.txt', (err, stats) => {
//   if (err) {
//     return console.log(err)
//   }
//   console.log(stats)
//   console.log('文件信息读取成功！')

//   // 检测文件类型
//   console.log('是否为文件？' + stats.isFile())
//   console.log('是否为目录？' + stats.isDirectory())
// })

// 写入文件
console.log('Ready for writting file')
fs.writeFile('text.txt', 'There is great to use our production!', (err) => {
  if (err) {
    console.error(err)
  }
  console.log('write success!')
  console.log('++++++++++++++++++++++++++++++++++++++')
  console.log('Ready for reading file')
  fs.readFile('text.txt', (err, data) => {
    if (err) {
      return console.error(err)
    }
    console.log('file data:' + data.toString())
  })
})












