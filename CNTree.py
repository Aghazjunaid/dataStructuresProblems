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

root = treeInput()
printTreeDetailed(root)
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
