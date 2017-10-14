

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var tuple = [k, v];
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this.get(index) && this.retrieve(k)) {
    var bucket = this.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v; 
      }
    }
  } else if (this.get(index) && !this.retrieve(k)) {
    bucket.push(tuple);
  } else {
    var tupleArr = [];
    bucket[index] = tupleArr.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


