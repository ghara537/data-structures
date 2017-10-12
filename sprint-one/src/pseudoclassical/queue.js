var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage);
  var firstVal = this.storage['0'];
  delete this.storage['0'];
  for (var i = 1; i < keys.length; i++) {
    this.storage[parseInt(keys[i]) - 1] = this.storage[keys[i]];
  }
  delete this.storage[(this.size()) - 1];
  return firstVal;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var myQueue = new Queue();
