

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var copyEdges =  this.edges[node].slice();
  if (this.contains(node)) {
    delete this.nodes[node];
    //onsole.log('copyEdges', copyEdges);
    for ( var i = 0; i < copyEdges.length; i++) {
      //console.log('fromNode:', node);
      //console.log('toNode:', copyEdges[i]);
      this.removeEdge(node, copyEdges[i]);
    }
    delete this.edges[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    
    if (this.edges[fromNode] === undefined) {
      this.edges[fromNode] = [toNode];
    } else {
      this.edges[fromNode].push(toNode);
    } 
    if (this.edges[toNode] === undefined) {
      this.edges[toNode] = [fromNode];
    } else {
      this.edges[toNode].push(fromNode);
    } 
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    for (var i = 0; i < this.edges[fromNode]; i++) {
      if (this.edges[fromNode][i] === toNode) {
        this.edges[fromNode].splice(i, 1);
      }
    }
    for (var i = 0; i < this.edges[toNode]; i++) {
      if (this.edges[toNode][i] === fromNode) {
        this.edges[toNode].splice(i, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  
  for (var key in this.nodes) {
    //this.nodes[key] = cb(this.nodes[key]);
    cb(this.nodes[key]);
    //console.log("nodeskey ", key);
    //console.log("nodesvalue ", this.nodes[key]);
  }
  var copyEdges = Object.assign(this.edges);
  for ( var key in copyEdges) {
    this.edges[key].map(function(element) {
      return cb(element);
    });
    //var newEdgeKey = cb(Number(this.edges[key]));
    this.edges[key] = this.edges[key];
    //delete this.edges[key];
  }

  // for (var key in this.nodes) {
  //   this.nodes[cb(Number(key))] = cb(this.nodes[key]);
  //   console.log("nodeskey ", key);
  //   console.log("nodesvalue ", this.nodes[key]);
  // }
  // var copyEdges = Object.assign(this.edges);
  // for ( var key in copyEdges) {
  //   this.edges[key].map(function(element) {
  //     return cb(element);
  //   });
  //   var newEdgeKey = cb(Number(this.edges[key]));
  //   this.edges[newEdgeKey] = this.edges[key];
  //   delete this.edges[key];
  // }
};

var myGraph = new Graph();
/*
 * Complexity: What is the time complexity of the above functions?
 */


