var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObj = Object.create(queueMethods);
  queueObj.storage = {};
  return queueObj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.size()] = value;
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.storage);
  var firstVal = this.storage['0'];
  delete this.storage['0'];
  for (var i = 1; i < keys.length; i++) {
    this.storage[parseInt(keys[i]) - 1] = this.storage[keys[i]];
  }
  delete this.storage[(this.size()) - 1];
  return firstVal;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
