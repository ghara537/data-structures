

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// Big-O-->O(logn)
HashTable.prototype.insert = function(k, v) {
  var tuple = [k, v];
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage.get(index) && this.retrieve(k)) {
    var bucket = this._storage.get(index);
    
    traverseBucket(bucket, k, function(i, bucket, valueInBucket, currentValue) {
      bucket[i][1] = currentValue;
    }, v); 
    //Takes the place of traverseBucket
    // for (var i = 0; i < bucket.length; i++) {
    //   if (bucket[i][0] === k) {
    //     bucket[i][1] = v; 
    //   }
    // } 
  } else if (this._storage.get(index) && !this.retrieve(k)) {
    var bucket = this._storage.get(index);
    bucket.push(tuple);
  } else {
    var bucket = [tuple];
  }
  this._storage.set(index, bucket);
};

// Big-O-->O(logn)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!!bucket) {
    return traverseBucket(bucket, k, function(i, bucket, v) {
      return v;
    }); 
    //Takes the place of traverseBucket
    // for (var i = 0; i < bucket.length; i++) {
    //   if (bucket[i][0] === k) {
    //     return bucket[i][1]; 
    //   } 
    // }  
  } 
  return undefined;
};

// Big-O-->O(nlogn)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.retrieve(k)) {
    var bucket = this._storage.get(index);
    
    traverseBucket(bucket, k, function(i, bucket) {
      bucket.splice(i, 1);
    }); 
    //Takes the place of traverseBucket 
    // for (var i = 0; i < bucket.length; i++) {
    //   if (bucket[i][0] === k) {
    //     bucket.splice(i, 1); 
    //   } 
    // }  
    return undefined;
  }
};

//// Big-O-->O(logn)
var traverseBucket = function (bucket, k, fn, v) {
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return fn(i, bucket, bucket[i][1], v);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


