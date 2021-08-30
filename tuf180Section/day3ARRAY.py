# # Search in 2D-MATRIX
# arr = [[1,3,5,7],[10,11,16,20],[23,30,34,50]]
# target = 30
# n = len(arr)
# m = len(arr[0])

# low = 0
# high = n*m-1
# while low <= high:
#     mid = (low+(high-low)//2)
#     if arr[mid//m][mid%m] == target:
#         print("Element found at",[mid//m,mid%m])
#     elif arr[mid//m][mid%m] < target:
#         low = mid+1
#     else:
#         high = mid-1
    
# # Element found at [2, 1]


# # Majority Element
# arr = [2,2,1,1,1,2,2]

# k = len(arr)//2

# for ele in arr:
#     count = 0
#     for i in arr:
#         if ele == i:
#             count+=1
#     if count > len(arr)//2:
#         print(ele) # 2


# # OR Moore Voting Algorithm
# arr = [2,2,1,1,1,2,2]

# cut = 0
# el = 0
# for i in range(len(arr)):
#     if cut == 0:
#         el = arr[i]
#     if arr[i] == el:
#         cut += 1
#     else:
#         cut -= 1

# print(el) # 2
