var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  
};


// Stack.prototype.push = function(value) {
//   var storageSize = size();
//   storage[storageSize] = value;
// };

// Stack.prototype.pop = function() {
//   var keys = Object.keys(storage);
//   var lastKey = keys[keys.length - 1];
//   var lastValue = storage[lastKey];
//   delete storage[lastKey];
//   return lastValue;
// };

// Stack.prototype.size = function() {
//   return Object.keys(storage).length;
// };



Stack.prototype.push = function(value) {
  var storageSize = this.size();
  this.storage[storageSize] = value;
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  var lastKey = keys[keys.length - 1];
  var lastValue = this.storage[lastKey];
  delete this.storage[lastKey];
  return lastValue;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var myStack = new Stack();