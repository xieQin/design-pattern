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
