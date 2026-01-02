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

Q3. Level of a Node in Binary Tree
function findLevel(root, target, level = 1) { //DFS solution
  if (root === null) return -1;

  if (root.val === target) return level;

  let left = findLevel(root.left, target, level + 1);
  if (left !== -1) return left;

  return findLevel(root.right, target, level + 1);
}

console.log(findLevel(root,4,1)) // 3


function findLevel(root,key) { //BFS
  
  let result = 1;
  let queue = [root];
  
  while(queue.length > 0){
    let size = queue.length
    for(let i=0;i<size;i++){
      let node = queue.shift();
      
      if(node.val === key) return result;
      
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    result++
  }

  return -1;
}

console.log(findLevel(root,4)) //3

Q4. Find the parent of a node in the given binary tree
function findParentBFS(root, target) {
  if (root === null || root.val === target) return null;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    if (
      (node.left && node.left.val === target) ||
      (node.right && node.right.val === target)
    ) {
      return node;
    }

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return null;
}

console.log(findParentBFS(root,4)) //2
I traverse the tree and check if the current node’s left or right child matches the target.
If yes, the current node is the parent.

function findParentDFS(root, target) {
  if (root === null || root.val === target) return -1;

  if (
    (root.left && root.left.val === target) ||
    (root.right && root.right.val === target)
  ) {
    return root;
  }

  return findParentDFS(root.left, target)
  return findParentDFS(root.right, target)
}

console.log(findParentDFS(root,4)) // 2

Q6. Insertion in a Binary Tree in level order
function insert(root, target) {
  if (root === null ) return;
  
  let queue = [root]
  
  while(queue.length > 0){
    let size = queue.length;
    
    for(let i=0;i<size;i++){
      let node = queue.shift();
      
      if(!node.left){
        node.left = new BinaryTree(target)
        return
      } 
      if(node.left) {
        queue.push(node.left)
      }
      
      if(!node.right){
        node.right = new BinaryTree(target)
        return
      } 
      if(node.right) {
        queue.push(node.right)
      }
    }
  }
}

console.log(insert(root,7))
- Agar root null hai → new node root bana do
- Queue me root daalo
  Jab tak queue empty na ho:
  Node nikalo
  Agar left null → insert & break
  Agar right null → insert & break
  Nahi to left & right ko queue me daalo

Q7. All Leaves of a Binary Tree - Print in Order
function printLeaf(root, res = []) {
  if (root === null) return res;

  if (!root.left && !root.right) {
    res.push(root.val);
  }

  printLeaf(root.left, res);
  printLeaf(root.right, res);

  return res;
}

console.log(printLeaf(root)); // [4,5,6]

function printLeafBFS(root) {
  if (root === null ) return;
  
  let queue = [root]
  let result = []
  
  while(queue.length > 0){
    let size = queue.length;
    
    for(let i=0;i<size;i++){
      let node = queue.shift();
      
      if(!node.left && !node.right) result.push(node.val)
      
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
  }
  
  return result
}

console.log(printLeafBFS(root)); // [4,5,6]


Q8. Check if Two Trees are Identical
function isIdentical(root1, root2) {
  // dono null → identical
  if (root1 === null && root2 === null) return true;

  // ek null, ek non-null → not identical
  if (root1 === null || root2 === null) return false;

  // value same + left identical + right identical
  return (
    root1.val === root2.val &&
    isIdentical(root1.left, root2.left) &&
    isIdentical(root1.right, root2.right)
  );
}

Q9. Invert Binary Tree - Change to Mirror Tree
function invertTree(root) {
  if (root === null) return null;

  // swap
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // invert subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

🧠 Soch:
1. Root pe left-right swap
2. Left subtree invert
3. Right subtree invert

function invertTreeBFS(root) {
  if (!root) return null;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    // swap
    [node.left, node.right] = [node.right, node.left];

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
}

Q10. Symmetric Tree
🧠 Core Idea
Left subtree ka:
    left ↔ Right subtree ka right
    right ↔ Right subtree ka left

function isSymmetric(root) {
  if (!root) return true;

  return isMirror(root.left, root.right);
}

function isMirror(left, right) {
  // dono null → mirror
  if (left === null && right === null) return true;

  // ek null, ek non-null → not mirror
  if (left === null || right === null) return false;

  // value same + mirror children
  return (
    left.val === right.val &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  );
}


function isSymmetricBFS(root) {
  if (!root) return true;

  let queue = [[root.left, root.right]];

  while (queue.length > 0) {
    let [left, right] = queue.shift();

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    queue.push([left.left, right.right]);
    queue.push([left.right, right.left]);
  }

  return true;
}


