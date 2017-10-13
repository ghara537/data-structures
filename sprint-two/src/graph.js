

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
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
    for ( var i = 0; i < this.edges[node]; i++) {
      if(copyEdges[i]){
       
    };
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
};

var myGraph = new Graph();
/*
 * Complexity: What is the time complexity of the above functions?
 */


