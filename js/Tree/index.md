## Binary Tree Creation & Example Structure

```js
class BinaryTree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.right = new BinaryTree(6);
````

### Tree Representation

```
    1
   / \
  2   3
 / \   \
4   5   6
```

# 🌳 Binary Tree – Interview Questions (Short Approach + Solution)

> JavaScript based solutions with **short, interview-friendly approaches**.

---

## 1️⃣ Tree Traversals (DFS)

### ➤ Inorder (L → Root → R)

**Approach:** Left subtree → Node → Right subtree

```js
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}
```

### ➤ Preorder (Root → L → R)

**Approach:** Root first, then left and right

```js
function preorder(root) {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}
```

### ➤ Postorder (L → R → Root)

**Approach:** Children first, root last

```js
function postorder(root) {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}
```

---

## 2️⃣ Level Order Traversal (BFS)

**Approach:** Queue use karo, level by level traverse

```js
function levelOrder(root) {
  if (!root) return [];
  let queue = [root], result = [];

  while (queue.length) {
    let size = queue.length, level = [];
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
```

---

## 3️⃣ Height / Maximum Depth of Binary Tree

**Approach:** Height = 1 + max(left, right)

```js
function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}
```

---

## 4️⃣ Search in Binary Tree

**Approach:** DFS, left OR right

```js
function search(root, key) {
  if (!root) return false;
  if (root.val === key) return true;
  return search(root.left, key) || search(root.right, key);
}
```

---

## 5️⃣ Level of a Node

### ➤ DFS

**Approach:** Level pass karte jao

```js
function findLevel(root, key, level = 1) {
  if (!root) return -1;
  if (root.val === key) return level;

  let left = findLevel(root.left, key, level + 1);
  if (left !== -1) return left;

  return findLevel(root.right, key, level + 1);
}
```

### ➤ BFS

**Approach:** Level order traversal

```js
function findLevelBFS(root, key) {
  let queue = [root], level = 1;

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.val === key) return level;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }
  return -1;
}
```

---

## 6️⃣ Find Parent of a Node

### ➤ BFS

**Approach:** Check if current node’s child matches target

```js
function findParent(root, key) {
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    if ((node.left && node.left.val === key) ||
        (node.right && node.right.val === key)) {
      return node;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return null;
}
```

---

## 7️⃣ Insert in Binary Tree (Level Order)

**Approach:** First empty left/right position fill karo

```js
function insert(root, val) {
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    if (!node.left) {
      node.left = new BinaryTree(val);
      return;
    }
    if (!node.right) {
      node.right = new BinaryTree(val);
      return;
    }
    queue.push(node.left, node.right);
  }
}
```

---

## 8️⃣ Print All Leaf Nodes

### ➤ DFS

```js
function printLeaves(root, res = []) {
  if (!root) return res;
  if (!root.left && !root.right) res.push(root.val);
  printLeaves(root.left, res);
  printLeaves(root.right, res);
  return res;
}
```

---

## 9️⃣ Check if Two Trees are Identical

**Approach:** Value + left identical + right identical

```js
function isIdentical(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return (
    a.val === b.val &&
    isIdentical(a.left, b.left) &&
    isIdentical(a.right, b.right)
  );
}
```

---

## 🔟 Invert / Mirror Binary Tree

**Approach:** Har node pe left-right swap

```js
function invertTree(root) {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
```

---

## 1️⃣1️⃣ Symmetric Tree

**Approach:** Left subtree mirror of right subtree

```js
function isSymmetric(root) {
  function mirror(a, b) {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.val === b.val &&
           mirror(a.left, b.right) &&
           mirror(a.right, b.left);
  }
  return mirror(root.left, root.right);
}
```

---

## 1️⃣2️⃣ Balanced Binary Tree (Optimized)

**Approach:** Height calculate karte waqt balance check

```js
function isBalanced(root) {
  function check(node) {
    if (!node) return 0;
    let l = check(node.left);
    if (l === -1) return -1;
    let r = check(node.right);
    if (r === -1) return -1;
    if (Math.abs(l - r) > 1) return -1;
    return 1 + Math.max(l, r);
  }
  return check(root) !== -1;
}
```

---

## 1️⃣3️⃣ Children Sum Property

**Approach:** Node value = left + right (leaf skip)

```js
function childrenSum(root) {
  if (!root || (!root.left && !root.right)) return true;

  let left = root.left ? root.left.val : 0;
  let right = root.right ? root.right.val : 0;

  return root.val === left + right &&
         childrenSum(root.left) &&
         childrenSum(root.right);
}
```

---

## 1️⃣4️⃣ Nodes at Distance K from Target

**Approach:** Parent map + BFS from target

```js
function nodesAtDistanceK(root, target, k) {
  let parent = new Map();
  let q = [root];
  parent.set(root, null);

  while (q.length) {
    let n = q.shift();
    if (n.left) parent.set(n.left, n), q.push(n.left);
    if (n.right) parent.set(n.right, n), q.push(n.right);
  }

  let queue = [target];
  let visited = new Set([target]);
  let dist = 0;

  while (queue.length) {
    let size = queue.length;
    if (dist === k) return queue.map(n => n.val);

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      for (let nei of [node.left, node.right, parent.get(node)]) {
        if (nei && !visited.has(nei)) {
          visited.add(nei);
          queue.push(nei);
        }
      }
    }
    dist++;
  }
  return [];
}
```

---

## 1️⃣5️⃣ Diameter of Binary Tree (Bottom-Up Optimized)

**Approach:** Height calculate karte waqt diameter update

```js
function diameterOfBinaryTree(root) {
  let dia = 0;
  function height(node) {
    if (!node) return 0;
    let l = height(node.left);
    let r = height(node.right);
    dia = Math.max(dia, l + r);
    return 1 + Math.max(l, r);
  }
  height(root);
  return dia;
}
```

---

## ✅ Final Interview Tip

> "Binary Tree problems mostly reduce to DFS (postorder) or BFS (level order). If height is involved, think bottom-up." 🚀
