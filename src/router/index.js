var server = require('./server')
var router = require('./router')

server.strat(router.route)