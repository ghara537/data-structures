var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

// Big-O-->O(1)
setPrototype.add = function(item) {
  this._storage[item] = true;
};

// Big-O-->O(n)
setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};
// Big-O-->O(n)
setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
