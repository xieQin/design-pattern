//观察者列表
function ObserverList() {
  this.observerList = [];
}
ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj);
};
ObserverList.prototype.count = function () {
  return this.observerList.length;
};
ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};
ObserverList.prototype.indexOf = function (obj, startIndex) {
  var i = startIndex;
  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
  return -1;
};
ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1);
};

//目标
function Subject() {
  this.observers = new ObserverList();
}
Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};
Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};
Subject.prototype.notify = function (context) {
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
};

//观察者
function Observer(name, subject) {
  this.name = name;
  this.subject = subject;
  this.subscribe(this.subject);
}
Observer.prototype.update = function (context) {
  console.log('observer:' + this.name + ' content:' + context);
}
Observer.prototype.subscribe = function (subject) {
  this.subject.addObserver(this);
}

var subject1 = new Subject();
var subject2 = new Subject();
var observer1 = new Observer('observer1', subject1);
var observer2 = new Observer('observer2', subject1);
var observer3 = new Observer('observer3', subject2);
subject1.notify('999感冒灵');
subject2.notify('999胃泰');
//observer:observer1 content:999感冒灵
//observer:observer2 content:999感冒灵
//observer:observer3 content:999胃泰