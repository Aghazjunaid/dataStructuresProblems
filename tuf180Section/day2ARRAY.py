# # Set Matrix Zeros (inc)
# li =[[1,1],[0,1]]
# n = len(li)
# m = len(li[0])

# for i in range(m):
#     for j in range(n):
#         if li[j][i] == 0:
#             li[j][i] = -1
            
# print(li) # [[1, 1], [-1, 1]]


# # Pascals Triangle
# n = 5
# arr = [[0 for x in range(n)]
#               for y in range(n)]
 
#     # Iterate through every line
#     # and print integer(s) in it
# for line in range (0, n):

#     # Every line has number of
#     # integers equal to line number
#     for i in range (0, line + 1):

#         # First and last values
#         # in every row are 1
#         if(i == 0 or i == line):
#             arr[line][i] = 1
#             print(arr[line][i], end = " ")

#         # Other values are sum of values
#         # just above and left of above
#         else:
#             arr[line][i] = (arr[line - 1][i - 1] +
#                             arr[line - 1][i])
#             print(arr[line][i], end = " ")            
#     print("\n", end = "")


# # 1
# # 1 1
# # 1 2 1
# # 1 3 3 1
# # 1 4 6 4 1


# # Best Time to BUY and SELL STOCK
# arr = [7,1,5,3,6,4]

# minm = arr[0]
# profit = 0
# for i in range(len(arr)):
#     minm = min(minm, arr[i])
#     profit = max(profit, arr[i]-minm)

# print(profit) # 5