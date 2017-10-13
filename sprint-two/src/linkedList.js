var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
//****
      list.tail = newNode;
      list.head = newNode;
      
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
      
    }
  };

  list.removeHead = function() {
  //returns the removed value
    if (list.head === null) {
      return null;

    } else {
      var headVal = list.head.value;
      list.head = list.head.next;
      return headVal;
    }
  };

  list.contains = function(target) {
  //returns boolean value
    var checkNode = list.head;
    while (checkNode.next !== null) {
      if (checkNode.value === target) {
        return true;
      } else {
        checkNode = checkNode.next;
      }
    }
    if (checkNode.value === target) {
      return true;
    }
    return false;
  };
   
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
