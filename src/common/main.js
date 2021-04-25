// 引入 util 包
const util = require('util')

// async function showMsg() {
//   return 'meaage ok!'
// }

// const cbFunction = util.callbackify(showMsg)

// cbFunction((err, ret) => {
//   if(err) throw err;
//   console.log(ret)
// })

class Person {
  // 构造函数
  constructor() {
    this.name = 'Jeremy Wu'
    this.age = 30
    this.sayHi = () => {
      console.log('Hi ' + this.name)
    }
  }
  showName() {
    console.log(this.name)
  }
}
class Katherine {
  constructor() {
    this.name = 'Katherine'
  }
}

// Katherine 继承 Person
// 注意： 
// Katherine 仅仅继承了 Person 在原型中定义的函数，而构造函数内部创造的 Person 属 性和 sayHi 函数都没有被 Katherine 继承
// 同时，在原型中定义的属性不会被 console.log 作为对象的属性输出
util.inherits(Katherine, Person)

var people = new Person()
people.showName()
people.sayHi()
console.log(people)

var kather = new Katherine()
kather.showName()
// kather.sayHi()
console.log(kather)

// 将任意对象转换 为字符串的方法，通常用于调试和错误输出
console.log(util.inspect(people)); 
console.log(util.inspect(people, true)); 
console.log(util.inspect(kather)); 
console.log(util.inspect(kather, true)); 


