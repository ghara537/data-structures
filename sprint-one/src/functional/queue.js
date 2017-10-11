var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var firstVal = storage['0'];
    delete storage['0'];
    for (var i = 1; i < keys.length; i++) {
      storage[parseInt(keys[i]) - 1] = storage[keys[i]];
    }
    delete storage[(someInstance.size()) - 1];
    return firstVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
