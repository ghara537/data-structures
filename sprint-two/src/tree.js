var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

var Tree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};


treeMethods.contains = function(target, currentTree) {
  var currentTree = currentTree || this;
  if (currentTree.value === target) {
    return true;
  } else {
    for (var i = 0; i < currentTree.children.length; i++) {
      if ( currentTree.contains(target, currentTree.children[i])) {
        return true;
      }
    }
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
