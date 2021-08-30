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