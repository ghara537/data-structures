
var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  //We've tried looking up closures in functional shared objects 
  //We've tried to be putting storage inside the queueMethods and inside the constructor'
  //We need some type of storage for the methods to access, but for the object to remember
  
  //What's going on extend and the udnerscore library
  //

  var queueObj = {
    'storage' : {}
  };
  
  extend(queueObj, queueMethods);
  return queueObj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.size()] = value;
};

queueMethods.dequeue = function () {
  var keys = Object.keys(this.storage);
  var firstVal = this.storage['0'];
  delete this.storage['0'];
  for (var i = 1; i < keys.length; i++) {
    this.storage[parseInt(keys[i]) - 1] = this.storage[keys[i]];
  }
  delete this.storage[(this.size()) - 1];
  return firstVal;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};







