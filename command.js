/**
* 最简形式的命令对象是一个操作和用以调用这个操作对象的结合体
* 所有的命令对象都有一个执行操作（execute operation），其用途就是调用命令对象所绑定的操作（action）
**/
const AdCommand = new Interface('AdCommand', ['execute'])

const StopAd = function (adObject) {
  this.ad = adObject
}
StopAd.prototype.execute = function () {
  this.ad.stop()
}

const StartAd = function (adObject) {
  this.ad = adObject
}
StartAd.prototype.execute = function () {
  this.ad.start()
}
