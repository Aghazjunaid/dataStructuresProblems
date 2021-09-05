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
head = takeInput()
printll(head)
