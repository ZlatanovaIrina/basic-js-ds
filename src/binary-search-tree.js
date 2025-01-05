const { NotImplementedError, ListNode } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  rootNode = null;

  static findNode(data, rootNode) {

    console.debug('data', data);
    console.debug('root', rootNode);

    let root = rootNode;

    while(root) {
      if (data === root.data) {
        return root;
      }

      if (data < root.data) {
        root = root.left;
        return;
      }

      if (data > root.data) {
        root = root.right;
        return;
      }
     }
     
     return null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
      return;
    }
 
    if (data < this.rootNode.data) {
      // if (this.rootNode.left) {
      //   this.rootNode = this.rootNode.left;
      //   this.add(data);
      // }
      this.rootNode.left = new Node(data);
      return;
    }
    if (data > this.rootNode.data) {
      // if (this.rootNode.right) {
      //   this.rootNode = this.rootNode.right;
      //   this.add(data);
      // }
      this.rootNode.right = new Node(data);
      return;
    }
  }

  has(data) {
    return Boolean(BinarySearchTree.findNode(data, this.rootNode));
  }

  find(data) {
    return BinarySearchTree.findNode(data, this.rootNode);
  }

  remove(data) {

  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};