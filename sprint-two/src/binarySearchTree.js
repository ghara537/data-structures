var BinarySearchTree = function(value) {
  
  var treeRoot = new treeNode(value);
  //console.log('treeRoot in bst:', JSON.stringify(treeRoot));
  return treeRoot;

};


var treeNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.leftCount = 0;
  this.rightCount = 0;
};

// Big-O-->O(logn)
treeNode.prototype.insert = function (value, parent) {
  
  //console.log('first tree root:', this);
  var parent = parent ? parent : this;
  //console.log('insert check:', parent.value);
  if (!parent.value) {
  
    parent.value = value;
    //console.log('value of parent:', parent.value);
  } else {
    var parent = parent ? parent : this.treeRoot;
    if ( value < parent.value) {
      if (parent.left) {
        this.insert(value, parent.left);
      } else { 
        parent.left = new treeNode(value);
      }
      parent.leftCount = parent.left.leftCount++;
    } else {
      if (parent.right) {
        this.insert(value, parent.right);
      } else {
        parent.right = new treeNode(value);  
      }
      parent.rightCount = parent.right.rightCount++;
    }
  }
};

// Big-O-->O(logn)
treeNode.prototype.contains = function (value, parent) {
  var parent = parent ? parent : this;
  if ( parent.value === value) {
    return true;
  } else if (value < parent.value && parent.left) { 
    return this.contains(value, parent.left);
  } else if (value > parent.value && parent.right) {
    return this.contains(value, parent.right);
  } else {
    return false;
  }
};
// Big-O-->O(n)
treeNode.prototype.depthFirstLog = function (cb, parent) {
  var parent = parent ? parent : this;
  parent.value = cb(parent.value);
  if (parent.left) { 
    this.depthFirstLog(cb, parent.left);
  }
  if (parent.right) {
    this.depthFirstLog(cb, parent.right);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
