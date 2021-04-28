// Import Package
var http = require('http')
var fs = require('fs')
var url = require('url')

// Create a Server
http.createServer((request, response) => {
  // Get Request Pathname
  var pathname = url.parse(request.url).pathname
  // Print Request File Content
  console.log('Requst for ' + pathname + 'reveived.')
  // Get File Content from File System
  fs.readFile(pathname.substr(1), (err, data) => {
    if (err) {
      // Print Error Information
      console.log(err)
      // HTTP Status: 404 NOT FOUND
      response.writeHead(404, {
        'Content-Type': 'text/html'
      })
    } else {
      // HTTP Status: 200 OK
      // Content-Type: text/html
      response.writeHead(200, {
        'Content-Type': 'text/html'
      })
      // Response File Content
      response.write(data.toString())
    }
    // Send Response data
    response.end()
  })
}).listen(8080)

// Print Information to Console
console.log('Server running at http://127.0.0.1:8080/')
