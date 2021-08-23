# # Print nth factorial number
# def fact(n):
#     if n == 0:
#         return 1
#     return n*fact(n-1)

# print(fact(3)) 
# # 6


# # Print sum upto nth number
# def sum(n):
#     if n == 0:
#         return 0
#     return n+sum(n-1)

# print(sum(5))
# 15

# # Print n natural number
# def nat(n):
#     if n == 0:
#         return
#     nat(n-1)
#     print(n)
#     return

# print(nat(10))

# # Fibonacci
# def fib(n):
#     if n == 0:
#         return 0
#     if n == 1:
#         return 1
#     return fib(n-1)+fib(n-2)

# print(fib(10))
# 55

# # Check List is sorted or not
# def isSorted(a, i):
#     l = len(a)
#     if i == l or i == l-1:
#         return True
#     if a[i] > a[i+1]:
#         return False
#     return isSorted(a, i+1)

# print(isSorted([1,21,3,4,5],0))s
# # False

# # First Index Of a Number
# def fir(a, x, i):
#     l = len(a)
#     if i == l:
#         return -1
#     if a[i] == x:
#         return i
#     return fir(a,x,i+1)

# print(fir([1,12,3,2],2,0))
# # 3

# # Last Index of a number
# def last(a,x,i):
#     if i == -1:
#         return -1
#     if a[i] == x:
#         return i
#     return last(a,x,i-1)

# a = [1,2,3,2,5]
# l = len(a)
# print(last(a,1,l-1))
# # 0


# # Replace String
# def replaceChar(s,a,b):
#     if len(s) == 0:
#         return s
#     out = replaceChar(s[1:], a, b)
#     print((out))
#     if s[0]==a:
#         return b+out
#     else: 
#         return s[0]+out
 
# print(replaceChar('cdfd', 'd', 'x')) 
# cxfx

# # Sum of digits
# def sum(num):
#     if num < 10:
#         return num
#     abc = sum(num//10) + num % 10
#     print(abc)
#     return abc 

# print(sum(1234567))

# def f(n):
#     if n== 0:
#         return
#     print("before",n)
#     f(n-1)
#     print("after",n)

# f(3)

# # before 3
# # before 2
# # before 1
# # after 1
# # after 2
# # after 3

# # Valid Parenthesis:
# def vali(n, open, close,ans):
#     if n==open and n==close:
#         print(ans)
#         return

#     if open>n or close>open:
#         return
    
#     vali(n,open+1,close,ans+"(")
#     vali(n,open,close+1,ans+")")

# vali(3,0,0,"")

# # ((()))
# # (()())
# # (())()
# # ()(())
# # ()()()