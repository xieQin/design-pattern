// 使用AOP装饰函数实现装饰器模式
Function.prototype.before = function (beforeFn) {
  let self = this
  return function () {
    beforeFn.apply(this, arguments)
    return self.apply(this, arguments)
  }
}

Function.prototype.after = function (afterFn) {
  let self = this
  return function () {
    let ret = self.apply(this, arguments)
    afterFn.apply(this, arguments)
    return ret
  }
}

const func = function () {
  console.log('func')
}

const func1 = function () {
  console.log('func 1')
}

const func2 = function () {
  console.log('func 2')
}

const foo = func.before(func1).after(func2)
foo()