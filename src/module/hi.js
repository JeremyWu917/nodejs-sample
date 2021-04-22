function Hi() {
  var name
  this.setName = (nickName) => {
    name = nickName
  }
  this.sayHi = () => {
    console.log('Hi ' + name)
  }
}

module.exports = Hi