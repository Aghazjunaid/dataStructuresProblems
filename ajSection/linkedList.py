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

head = takeInput()
printll(head)
print(lengthLL(head))
