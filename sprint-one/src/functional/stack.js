var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  // Big-O-->O(1)
  someInstance.push = function(value) {
    var storageSize = someInstance.size();
    storage[storageSize] = value;
  };
  // O(1)
  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var lastKey = keys[keys.length - 1];
    var lastValue = storage[lastKey];
    delete storage[lastKey];
    return lastValue;
  };
  //O(1)
  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  return someInstance;
};
