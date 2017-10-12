var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  } 
  return obj1;
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = {
    'storage' : {}
  };
  extend(stackObj, stackMethods);
  return stackObj;
  
};


var stackMethods = {};

stackMethods.push = function(value){
  var storageSize = this.size();
  this.storage[storageSize] = value;
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var lastKey = keys[keys.length - 1];
  var lastValue = this.storage[lastKey];
  delete this.storage[lastKey];
  return lastValue;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};



