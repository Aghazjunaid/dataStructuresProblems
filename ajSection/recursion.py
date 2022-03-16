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

# print(isSorted([1,21,3,4,5],0))
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


# Replace String
def replaceChar(s,a,b):
    if len(s) == 0:
        return s
    out = replaceChar(s[1:], a, b)
    print((out))
    if s[0]==a:
        return b+out
    else: 
        return s[0]+out
 
print(replaceChar('cdfd', 'd', 'x')) 
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


# # Permutation of a string
# def per(ques,ans):
#     if len(ques)==0:
#         print(ans)
#         return
    
#     for i in range(len(ques)):
#         per(ques[i+1:]+ques[0:i], ans+ques[i])

# per("abc","")

# # abc
# # acb
# # bca
# # bac
# # cab
# # cba


# # Tossing coin
# def coin(n,ans):
#     if n == 0:
#         print(ans)
#         return
    
#     coin(n-1,ans+"H")
#     coin(n-1, ans+"T")

# coin(3,"")

# # HHH
# # HHT
# # HTH
# # HTT
# # THH
# # THT
# # TTH
# # TTT

# # Climbing Stairs
# def climb(curr,n,ans):
#     if curr == n:
#         print(ans)
#         return
#     if curr > n:
#         return

#     climb(curr+1, n, ans+"1")
#     climb(curr+2, n, ans+"2")
#     climb(curr+3, n, ans+"3")

# climb(0,5,"")

# # 11111
# # 1112
# # 113
# # 1211
# # 122
# # 131
# # 2111
# # 212
# # 221
# # 23
# # 311
# # 32


# # Maze Path(Without Diagonal)
# def path(cr,cc,er,ec,ans):
#     if (cr==er and cc==ec):
#         print(ans)
#         return
#     if cr>er or cc>ec:
#         return
#     path(cr,cc+1,er,ec,ans+"H")
#     path(cr+1, cc, er, ec, ans+"V")

# path(0,0,2,2,"")

# # HHVV
# # HVHV
# # HVVH
# # VHHV
# # VHVH
# # VVHH

# # Maze Path(With Diagonal)
# def path(cr,cc,er,ec,ans):
#     if (cr==er and cc==ec):
#         print(ans)
#         return
#     if cr>er or cc>ec:
#         return
#     path(cr,cc+1,er,ec,ans+"H")
#     path(cr+1, cc, er, ec, ans+"V")
#     path(cr+1, cc+1, er, ec, ans+"D")

# path(0,0,2,2,"")

# # HHVV
# # HVHV
# # HVVH
# # HVD
# # HDV
# # VHHV
# # VHVH
# # VHD
# # VVHH
# # VDH
# # DHV
# # DVH
# # DD


# # Power of n:
# def powr(n):
#     if n == 1:
#         print(True)
#         return
#     if n < 1:
#         print(False)
#         return 
#     powr(n/2)

# powr(1)

# # True

# # #  Subtract the Product and Sum of Digits of an Integer
# abc=4421
# sum = 0
# prod = 1
# for i in range(len(str(abc))):
#     x = str(abc)[i]
#     sum +=int(x)
#     prod *=int(x)
# res = prod - sum
# print(res) 
# # 21


# # Multiply Numbers Recursively
# abc=1234
# ques = str(abc)
# ans = 1
# def subst(ques,ans):
#     if len(ques)==0:
#         print(ans)
#         return

#     subst(ques[1:],ans*int(ques[0]))

# subst(ques,ans)
# # 24

# # Add Numbers Recursively
# def addd(ques,ans):
#     if len(ques)==0:
#         print(ans)
#         return
    
#     addd(ques[1:],ans+int(ques[0]))

# addd('1234',0)
# # 10


