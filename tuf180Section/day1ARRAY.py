# # Sort an array of 0,1 and 2, T-O(n) & S-O(1) 
# Dutch National Flag Algorithm

# arr=[0,1,1,0,1,2,0,1,2,0,1]
# low=0
# mid=0
# high=len(arr)-1
# while mid <= high:
#     if arr[mid] == 0:
#         arr[low],arr[mid] = arr[mid], arr[low]
#         low += 1
#         mid += 1
#     elif arr[mid] ==1:
#         mid += 1
#     else:
#         arr[high],arr[mid] = arr[mid], arr[high]
#         high -= 1
# print(arr)
# # [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]


# # find single missing element
# opt = [1,2,3,4,5,6,8,9,10,11,12]
# dif = opt[0] -0
# for i in opt:
#     newDif = opt[i] - i
#     if dif != newDif:
#         print(i+dif)
#         break

# # 7

# # Merge two sorted Arrays without extra space
# arr1 = [1,3,4,7,9,11,33]
# arr2 = [2,5,13,21]
# i= 0

# while arr1[len(arr1)-1] > arr2[0]:
#     if arr1[i]>arr2[0]:
#         arr1[i],arr2[0] = arr2[0], arr1[i]
#         arr2 = sorted(arr2)
#     i += 1

# print(arr1)
# print(arr2)
# [1, 2, 3, 4, 5, 7, 9]
# [11, 13, 21, 33]

