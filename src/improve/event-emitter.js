// 导入模块
var eventEmitter = require('events').EventEmitter
// 实例化对象
var event = new eventEmitter()
// 监听事件
event.on('event_name', () => {
  console.log('event_name raised!')
})
// 定时 1秒 触发一次
setTimeout(() => {
  event.emit('event_name')
}, 1000)