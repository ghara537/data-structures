

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var tuple = [k, v];
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage.get(index) && this.retrieve(k)) {
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v; 
      }
    } 
  } else if (this._storage.get(index) && !this.retrieve(k)) {
    var bucket = this._storage.get(index);
    bucket.push(tuple);
  } else {
    var bucket = [tuple];
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!!bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1]; 
      } 
    }  
  } 
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.retrieve(k)) {
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i].splice(i, 1); 
      } 
    }  
    return undefined;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


