console.log('start!')

// 引入 events 模块
var events = require('events')

// 实例化对象
var eventEmitter = new events.EventEmitter()

// 监听器 1
var listener1 = () => {
  console.log('listener 1 exec')
}

// 监听器 2
var listener2 = () => {
  console.log('listener 2 exec')
}

// 绑定 connection 事件，处理函数为 listener 1
eventEmitter.addListener('connection', listener1)

// 绑定 connection 事件，处理函数为 listener 2
eventEmitter.on('connection', listener2)

// 打印 connection 事件当前的监听个数
var eventListeners = eventEmitter.listenerCount('connection')
console.log('this is/are ' + eventListeners + ' listener/s on connection event!')

// 触发监听事件
eventEmitter.emit('connection')

// 移除监听绑定的 listener 1 事件
eventEmitter.removeListener('connection', listener1)
console.log('removed listener 1 on connection event!')

// 触发监听事件
eventEmitter.emit('connection')

// 打印 connection 事件当前的监听个数
var eventListeners = eventEmitter.listenerCount('connection')
console.log('this is/are ' + eventListeners + ' listener/s on connection event!')

console.log('done!')
