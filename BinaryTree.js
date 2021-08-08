//Node structure for tree
class TreeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



// actual tree creation

class BinaryTree{
  constructor(){
  	this.root = null;
  }

  insert(value){
		let newNode = new TreeNode(value);
    
    if(this.root === null){
    	this.root = newNode;
      return this.root;
    }
    let current = this.root;
    while(true){
    	if(newNode.value<current.value){
      	if(current.left===null){
        	current.left = newNode;
          break;
        }else{
        	current = current.left
        }
      }else{
     		 if(current.right===null){
        	current.right = newNode;
          break;
        }else{
        	current = current.right
        }
      }
    }
  }
}


let bt = new BinaryTree();



bt.insert(8)
bt.insert(7)
bt.insert(19)
bt.insert(13)
bt.insert(9)

console.log("binarytree",bt);
