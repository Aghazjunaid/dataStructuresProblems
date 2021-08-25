class BinaryTreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
    
def treeInput():
    rootData = int(input())
    if rootData == -1:
        return None
    
    root = BinaryTreeNode(rootData)
    root.left = treeInput()
    root.right = treeInput()

    return root

def printTreeDetailed(root):
    if root == None:
        return
    print(root.data, end = ":")
    
    if root.left is not None:
        print("L", root.left.data, end = ",")
        
    if root.right is not None:
        print("R", root.right.data, end = " ")
        
    print()
    printTreeDetailed(root.left)
    printTreeDetailed(root.right)

# root = treeInput()
# printTreeDetailed(root)
# For this input
# 1
# 2
# 4
# -1
# -1
# 6
# -1
# -1
# 3
# -1
# 5
# -1
# -1
# Output is :
# 1:L 2,R 3
# 2:L 4,R 6
# 4:
# 6:
# 3:R 5
# 5:

# No of nodes in a tree
# def nodes(root):
#     if root == None:
#         return 0
    
#     return nodes(root.left)+nodes(root.right)+1

# root = treeInput()
# printTreeDetailed(root)
# print(nodes(root))
    
# # 6

# # Largest Node in a binary tree
# def largest(root):
#     if root == None:
#         return -1

#     leftNode = largest(root.left)
#     rightNode = largest(root.right)

#     return max(leftNode, rightNode, root.data)

# root = treeInput()
# printTreeDetailed(root)
# print(largest(root))

# # 6:L 4,R 5
# # 4:
# # 5:
# # 6

# # No of Leaf Nodes in a tree
# def leaf(root):
#     if root == None:
#         return 0
#     if root.left==None and root.right==None:
#         return 1

#     return leaf(root.left) + leaf(root.right)

# root = treeInput()
# printTreeDetailed(root)
# print(leaf(root))

# # 1:L 2,R 3
# # 2:L 4,R 6
# # 4:
# # 6:
# # 3:R 5
# # 5:
# # 3

# # Print Leaf Nodes in a tree
# def leaf(root):
#     if root == None:
#         return 
#     if root.left==None and root.right==None:
#         print(root.data)
#         return
#     leaf(root.left)
#     leaf(root.right)

# root = treeInput()
# printTreeDetailed(root)
# leaf(root)

# # 1:L 2,R 4
# # 2:
# # 4:
# # 2
# # 4


# # Print Nodes at depth k
# def depth(root,k,d):
#     if root == None:
#         return
#     if k==d:
#         print(root.data)
#         return

#     depth(root.left, k, d+1)
#     depth(root.right, k, d+1)

# root = treeInput()
# printTreeDetailed(root)
# print(depth(root,2,0))

# # 1:L 2,R 3
# # 2:L 4,R 5
# # 4:
# # 5:
# # 3:R 6
# # 6:
# # 4
# # 5
# # 6


# # Height of a tree
# def height(root):
#     if root == None:
#         return 0
    
#     return max(height(root.left), height(root.right))+1

# root = treeInput()
# printTreeDetailed(root)
# print(height(root))

# # 1:L 2,
# # 2:L 4,R 6
# # 4:
# # 6:
# # 3


# # Remove Leaf Nodes
# def remLeaf(root):
#     if root == None:
#         return None
     
#     if root.left==None and root.right==None:
#         return None

#     root.left = remLeaf(root.left)
#     root.right = remLeaf(root.right)

#     return root

# root = treeInput()
# printTreeDetailed(root)
# print("-----------------")
# root = remLeaf(root)
# printTreeDetailed(root)

# # 1:L 2,R 3
# # 2:L 4,R 6
# # 4:
# # 6:
# # 3:R 5
# # 5:
# # -----------------
# # 1:L 2,R 3
# # 2:
# # 3:


# # Sum of nodes
# def sumNodes(root):
#     if root == None:
#         return 0
#     return sumNodes(root.left)+sumNodes(root.right)+root.data

# root = treeInput()
# printTreeDetailed(root)
# print(sumNodes(root))

# # 1:L 2,R 3
# # 2:
# # 3:
# # 6

