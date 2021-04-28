// Import Package
var http = require('http')

// Prepare for Request option data 
var options = {
  host: 'localhost',
  port: 8080,
  path: '/index.html'
}

// Callback Function for Request
var callback = (res) => {
  var body = ''
  res.on('data', (data) => {
    body += data
  })
  res.on('end', () => {
    console.log(body)
  })
}

// Send Request to Server
var req = http.request(options, callback)
req.end();
