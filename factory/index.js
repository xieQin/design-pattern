// 简单工厂模式示例

// Car 构造函数
function Car(opts) {
  this.doors = opts.doors || 4
  this.colors = opts.colors || 'white'
  this.state = opts.colors || 'new'
}

// Truck 构造函数
function Truck(opts) {
  this.color = option.color || 'blue'
  this.wheelSize = option.wheelSize || 'large'
  this.state = option.state || 'used'
}

//Vehicle工厂
function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car
VehicleFactory.prototype.createVehicle = function (option) {
  if (option.vehicleType == 'car') {
    this.vehicleClass = Car
  } else {
    this.vehicleClass = Truck
  }

  return new this.vehicleClass(option)
}

//创建生成汽车的工厂实例
var carFactory = new VehicleFactory()
var car = carFactory.createVehicle({
  vehicleType: 'car',
  color: 'yellow',
  doors: 6
})

console.log(car instanceof Car)
console.log(car)
//true
//Car {doors: 6, color: "yellow", state: "brand new"}

var movingTruck = carFactory.createVehicle({
  vehicleType: 'truck',
  color: 'red',
  state: 'like new',
  wheelSize: 'small'
})

console.log(movingTruck instanceof Truck)
console.log(movingTruck)
//true
//Truck {color: "red", state: "like new", wheelSize: "small"}