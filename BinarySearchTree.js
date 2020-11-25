class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node == null) {
      this.root = new Node(data);
      return;
    } else {
      const serarchTree = function (node) {
        if (data < node.data) {
          if (node.left == null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return serarchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right == null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return serarchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return serarchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}


let bst = new BinarySearchTree();
bst.add(10)
bst.add(20)
bst.add(6)
console.log(bst.isPresent(10))
console.log(bst.findMin())
console.log(bst.findMax())
