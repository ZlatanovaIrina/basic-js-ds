const { NotImplementedError, ListNode } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  rootNode = null;

  static findNode(data, rootNode) {

    let root = rootNode;

    while(root) {
      if (data === root.data) {
        return root;
      }

      if (data < root.data) {
        root = root.left;
        continue;
      }

      if (data > root.data) {
        root = root.right;
        continue;
      }
     }
     
     return null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const rootNode = this.rootNode;
    
    if (!this.rootNode) {
      this.rootNode = new Node(data);
      return;
    }

    while (this.rootNode) {

      if (data < this.rootNode.data) {       
        if (this.rootNode.left) {
          this.rootNode = this.rootNode.left;
          continue;
        }
        this.rootNode.left = new Node(data);
        this.rootNode = rootNode;
        break;
      }

      if (data > this.rootNode.data) {
        if (this.rootNode.right) {
          this.rootNode = this.rootNode.right;
          continue;
        }
        this.rootNode.right = new Node(data);
        this.rootNode = rootNode;
        break;
      }
    }
  }

  has(data) {
    console.debug('has', data);
    
    return Boolean(BinarySearchTree.findNode(data, this.rootNode));
  }

  find(data) {
    return BinarySearchTree.findNode(data, this.rootNode);
  }

  remove(data) {

    let nodeForRemove = this.find(data);

    if (!nodeForRemove) {
      return;
    }
    if (!nodeForRemove.left && !nodeForRemove.right) {
      nodeForRemove = null;
      return;
    }
    
    if (nodeForRemove.left || nodeForRemove.right) {
      if (nodeForRemove.left) {
        nodeForRemove.left.left = null;
        nodeForRemove = nodeForRemove.left;
      }
      if (nodeForRemove.right) {
        nodeForRemove.right.left = null;
        nodeForRemove = nodeForRemove.right;
      }
      return;
    }

    if (nodeForRemove.left && nodeForRemove.right) {
      nodeForRemove = nodeForRemove.right.left;
      nodeForRemove.right.left = null;
      return;
    }

  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};