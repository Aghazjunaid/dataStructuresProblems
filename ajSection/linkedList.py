class node:
    def __init__(self,data):
        self.data = data
        self.next = None


def takeInput():
    inputList = [int(ele) for ele in input().split()]
    head = None
    tail = None
    for curr in inputList:
        if curr == -1:
            break
        newNode = node(curr)
        if head is None:
            head = newNode
            tail = newNode
        else:
            tail.next = newNode
            tail = newNode
    return head


# print linked list
def printll(listData):
    while listData is not None:
        print(str(listData.data)+"->",end="")
        listData = listData.next
    print("None")
    return

# 1 2 3 4 5 -1
# 1->2->3->4->5->None


# Length of LL
def lengthLL(head):
    count = 0
    while head is not None:
        count += 1
        head = head.next
    return count

# 1 3 5 2 77 4 -1
# 1->3->5->2->77->4->None
# 6

# # Insert at ith position
# def insert(head,pos,data):
#     count = 1
#     prev = None
#     curr = head
#     if pos == 1:
#         newNode = node(data)
#         newNode.next = curr
#     while count <= pos:
#         count+=1
#         prev = curr
#         curr = curr.next
#         count +=1
#     newNode = node(data)
#     prev.next = newNode
#     newNode.next = curr
#     return head

# # 1->2->3->5->6->None
# # 5
# # 1->4->2->3->5->6->None

# #=================================================== OR ====================================================
# def insertAtI(head,i,data):
#     if i < 0 or i > length(head):
#         return head

#     count = 0
#     prev = None
#     curr = head
#     while count < i:
#         prev = curr
#         curr = curr.next
#         count += 1
        
#     newNode = node(data)
#     if prev is not None:
#         prev.next = newNode
#     else:
#         head = newNode
        
#     newNode.next = curr
#     return head


# # print data at ith node
# def printAt(head,pos): # head mtlb ll ka first whole node ka address
#     if pos < 0 or pos > lengthLL(head):
#         return head
#     count = 0
#     while count < pos:
#         count +=1
#         head = head.next
#     return head.data

# # 1 2 3 4 5 -1
# # 1->2->3->4->5->None
# # 3


# # delete ith node
# def deleteIthNode(head,i):
#     if i < 0 or i > lengthLL(head):
#         return head
#     count = 0
#     prev = None
#     curr = head
#     nxt = head.next
#     while count < i:
#         count += 1
#         prev = curr
#         curr = nxt
#         nxt = nxt.next
#     if prev is not None:
#         prev.next = nxt
#     else :
#         head = nxt
#     del curr
#     return head

# # 1 2 3 -1
# # 1->2->3->None
# # 2->3->None

# # 1 2 3 4 5 -1
# # 1->2->3->4->5->None
# # 1->2->3->5->None

# # 1 2 3 -1
# # 1->2->3->None
# # 1->2->None


# def findKey(head,key):
#     for i in range(lengthLL(head)):
#         if head.data == key:
#             return i
#         head = head.next
#     return "Not Found"

# # 1 2 3 4 -1
# # 1->2->3->4->None
# # Key is found at index  2


# # Sum of LL
# def sumLL(head):
#     sum = 0
#     while head is not None:
#         sum += head.data
#         head = head.next
    
#     return sum

# # 1 2 3 4 -1
# # 1->2->3->4->None
# # 10

# Maxm ele in LL
def maxm(head):
    maxi = 0
    while head is not None:
        maxi = max(maxi, head.data)
        head = head.next
    
    return maxi

# 1 2 6 3 9 4 5 -1
# 1->2->6->3->9->4->5->None
# 9


# LL Sorted or not 
def sorll(head):
    maxi = head.data
    while head is not None:
        if head.data < maxi:
           return "Not Sorted"
        maxi = head.data
        head = head.next
    
    return "sorted"

# 1 3 2 4 -1
# 1->3->2->4->None
# Not Sorted
head = takeInput()
printll(head)
print(sorll(head))
# print(maxm(head))
# print(sumLL(head))
# key = findKey(head, 3)
# print("Key is found at index ",key)
# newHead = deleteIthNode(head, 2)
# printll(newHead)
# print(head) # <__main__.node object at 0x01387220>
# print(printAt(head, 2))
# print(lengthLL(head))
# insert(head, 1, 4)
# printll(head)
