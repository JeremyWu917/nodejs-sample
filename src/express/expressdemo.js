var exp = require('express')
var app = exp()

// app.get('/', (req, res) => {
//   res.send('Hi Express!')
// })

// var server = app.listen(8081, () => {
//   var host = server.address().address
//   var port = server.address().port
//   console.log('Address - http://%s:%s', host, port)
// })


// 路由
// 主页输出 "Hello World"
app.get('/', (req, res) => {
  console.log("主页 GET 请求");
  res.send('Hello GET');
})


//  POST 请求
app.post('/', (req, res) => {
  console.log("主页 POST 请求");
  res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user', (req, res) => {
  console.log("/del_user 响应 DELETE 请求");
  res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', (req, res) => {
  console.log("/list_user GET 请求");
  res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', (req, res) => {
  console.log("/ab*cd GET 请求");
  res.send('正则匹配');
})


var server = app.listen(8081, () => {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})