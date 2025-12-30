class BinaryTree{
  constructor(value){
    this.val = value;
    this.right = null;
    this.left = null
  }
}

const root = new BinaryTree(1)
root.left = new BinaryTree(2)
root.right = new BinaryTree(3)
root.left.left = new BinaryTree(4)
root.left.right = new BinaryTree(5)
root.right.right = new BinaryTree(6)


function inorder(root){
  if(!root) return;
  
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}
inorder(root)

function preorder(root){
  if(!root) return
  
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}
preorder(root)

function postorder(root){
  if(!root) return
  
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}
postorder(root)

function levelOrderByLevel(root) {
  if (root === null) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

console.log(levelOrderByLevel(root))
BFS ka Idea (Simple Soch)
1. Root ko queue me daalo
2. Jab tak queue empty na ho:
    Front node nikalo
    Print karo
    Uske left child ko queue me daalo (agar exist karta ho)
    Uske right child ko queue me daalo (agar exist karta ho)

Q1. Maximum Depth or Height of a Binary Tree
function height(root) {
  if(!root) return 0;
  
  return 1 + Math.max(height(root.left), height(root.right))
}

console.log(height(root)) //3
Left subtree ki height nikaalo
Right subtree ki height nikaalo
Dono me se jo bada ho, use lo
Current node ke liye +1

Q2. Search in a tree
function search(root,k) {
  if(!root) return false;
  
  if(root.val == k) return true;
  
  return search(root.left,k) || search(root.right,k)
}

console.log(search(root,2)) //true

Q3. 



