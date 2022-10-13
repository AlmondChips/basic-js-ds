const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
	constructor(){
		this.rootNode = null;
	}

  root() {
	return this.rootNode;
  }

  add(data) {
   this.rootNode = addInner(this.rootNode, data)

   function addInner(node,value){
	if(!node) return new Node(value);
		
	if(node.data === value) return node;

	if(node.data > value) node.left = addInner(node.left,value);
	else  node.right = addInner(node.right, value);

	return node;
	
   }
  }

  has(data) {
    return hasInner(this.rootNode, data);

	function hasInner(node, value){
		if(!node) return false;

		if(node.data === value) return true;

		if(node.data > value) return hasInner(node.left,value)
		else return hasInner(node.right, value);
	}
  }

  find(data) {
	return findInner(this.rootNode, data);

	function findInner(node,value){
		if(!node) return null;

		if(node.data === value) return node;

		if(node.data > value) return findInner(node.left,value)
		else return findInner(node.right, value);
	}
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode,data)

	function removeNode(node, value){
		if(!node) return null;

		if(value < node.data){
			node.left = removeNode(node.left, value);
			return node;
		}
		else if(value > node.data){
			node.right = removeNode(node.right, value);
			return node;
		}
		else{
			if(!node.left && !node.right) return null;

			if(!node.left){
				node =  node.right;
				return node;
			}

			if(!node.right){
				node =  node.left;
				return node;
			}

			let minInRightNode = node.right;
			while(minInRightNode.left){
				minInRightNode = minInRightNode.left;
			}

			node.data = minInRightNode.data;
			node.right = removeNode(node.right, node.data);

			return node;
		}
	}
  }

  min() {
   if(!this.rootNode){
	return;
   }

   let node = this.rootNode;
   while(node.left){
	node = node.left;
   }

   return node.data;


  }

  max() {
	if(!this.rootNode){
		return;
	   }
	
	   let node = this.rootNode;
	   while(node.right){
		node = node.right;
	   }
	
	   return node.data;
  }
}


// const bl = new BinarySearchTree();

// bl.add(1);
// bl.add(2);
// bl.add(3);
// bl.add(4);
// bl.add(5);

// console.log(bl.find(5));
// console.log(bl.has(5));

// console.log(bl.find(7));
// console.log(bl.has(7));

module.exports = {
  BinarySearchTree
};