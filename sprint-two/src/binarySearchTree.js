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
// treeNode.prototype.insert = function (value, parent) {
  
//   //console.log('first tree root:', this);
//   var parent = parent ? parent : this;
//   //console.log('insert check:', parent.value);
//   if (!parent.value) {
  
//     parent.value = value;
//     //console.log('value of parent:', parent.value);
//   } else {
//     var parent = parent ? parent : this.treeRoot;
//     if ( value < parent.value) {
//       if (parent.left) {
//         this.insert(value, parent.left);
//       } else { 
//         parent.left = new treeNode(value);
//       }
//       parent.leftCount = parent.left.leftCount++;
//     } else {
//       if (parent.right) {
//         this.insert(value, parent.right);
//       } else {
//         parent.right = new treeNode(value);  
//       }
//       parent.rightCount = parent.right.rightCount++;
//     }
//   }
// };

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
        parent.leftCount = parent.left.leftCount + parent.left.rightCount + 1;
      } else { 
        parent.left = new treeNode(value);
        parent.leftCount++;
      }
      
    } else {
      if (parent.right) {
        this.insert(value, parent.right);
        parent.rightCount = parent.right.rightCount + parent.right.rightCount + 1;
      } else {
        parent.right = new treeNode(value);
        parent.rightCount++;  
      }
      
    }
    
  }

  //this.rebalance(parent);
  console.log('parent node:', parent);
  console.log('leftCount:', parent.leftCount);
  console.log('rightCount:', parent.rightCount);
};

treeNode.prototype.rebalance = function (parent) {
  if ( (parent.leftCount > (2 * parent.rightCount)) && (parent.leftCount - parent.rightCount !== 1)) {
    var newTop = findNewTopNode(parent, true);
    newTop.left = parent.left;
    newTop.right = parent;
    parent.left = null;
    this.bottomFirstLog( function(parent) {
      if (parent.left) {
        parent.leftCount = parent.left.leftCount + parent.left.rightCount;
      } else {
        parent.leftCount = 0;
      }
      if (parent.right) {
        parent.rightCount = parent.right.leftCount + parent.right.rightCount;
      } else {
        parent.rightCount = 0;
      }
    }, parent);
  }

  if ( parent.rightCount > (2 * parent.leftCount) && (parent.rightCount - parent.leftCount !== 1)) {
    var newTop = findNewTopNode(parent, false);
    newTop.right = parent.right;
    newTop.left = parent;
    parent.right = null;
    this.bottomFirstLog( function(parent) {
      if (parent.left) {
        parent.leftCount = parent.left.leftCount + parent.left.rightCount;
      } else {
        parent.leftCount = 0;
      }
      if (parent.right) {
        parent.rightCount = parent.right.leftCount + parent.right.rightCount;
      } else {
        parent.rightCount = 0;
      }
    }, parent);
  }

  

  var findNewTopNode = function(parent, toLeft) {
    if (toLeft) {
      var newTop = parent.left;
      while ( newTop.right) {
        if ( newTop.right.right) {
          var savedTop = newTop.right;
          newTop.right = null;
          return savedTop;
        }
      }
    } else {
      var newTop = parent.right;
      while (newTop.left) {
        if ( newTop.left.left) {
          var savedTop = newTop.left;
          newTop.left = null;
          return savedTop;
        }
      }    
    }
    console.log('newTop:', newTop.value);
    return newTop;
  };

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

treeNode.prototype.bottomFirstLog = function (cb, parent) {
  var parent = parent ? parent : this;
  
  if (parent.left) { 
    this.depthFirstLog(cb, parent.left);
  }
  if (parent.right) {
    this.depthFirstLog(cb, parent.right);
  }
  parent.value = cb(parent.value);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
