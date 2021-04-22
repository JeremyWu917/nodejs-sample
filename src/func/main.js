// // 函數作爲變量
// function say(info) {
//   console.log(info)
// }

// function execute(saySomething, value) {
//   saySomething(value)
// }

// execute(say, 'Hi Node.js!')

// // 匿名函数
// execute((info) => {
//   console.log(info)
// }, 'Hi Jeremy Wu!')

var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
