# # Binary Search
# def bs(arr,tar,s,e):
#     if s>e:
#         return -1
#     mid = (s+e)//2
#     if(arr[mid]==tar):
#         return mid
#     if arr[mid] > tar:
#         return bs(arr,tar,s,mid-1)
#     else:
#         return bs(arr,tar,mid+1,e)
    
# print(bs([1,3,5,7,9,11],2,0,len([1,3,5,7,9,11]))) # -1


# # n to 1
# def nto1(n):
#     if n == 0:
#         return
#     print(n)
#     nto1(n-1)

# nto1(5)

# # sum of digits
# def sod(n):
#     if n < 9:
#         return n
#     rem = n % 10
#     n = n // 10
#     return rem + sod(n) 

# print(sod(12345))

# # rever a num
# sum = 0
# def rev(n):
#     global sum
#     if n == 0:
#         return 

#     rem = n % 10
#     n = n // 10
#     sum = (sum * 10) + rem
#     rev(n)

# rev(12345)
# print(sum) #54321


# # count no of zeros
# count = 0
# def coz(n):
#     global count
#     if n == 0:
#         return 
#     if n%10 == 0:
#         count += 1
#     coz(n//10)

# coz(10200100000)
# print(count) #8

# # reduce to zero (lc)
# count = 0
# def rz(n):
#     global count
#     if n == 0:
#         return

#     if n % 2 == 0:
#         count+= 1
#         rz(n/2)
#     else:
#         count+=1
#         rz(n-1)

# rz(14)
# print(count) //6

# # ==============OR=====================
# def rz(n):
#     return helper(n,0)

# def helper(n,count):
#     if n == 0:
#         print(count)
#         return
    
#     if n % 2 == 0:
#         helper(n/2,count+1)
#     else:
#         helper(n-1,count+1)

# rz(14) #6


# # Linear Serach
# def ls(arr,i,tar):
#     l = len(arr)
#     if i >= l:
#         return -1
#     if arr[i] == tar:
#         return i
#     return ls(arr,i+1,tar) #jo v reurn ho rha hai yhi se ho rha hai

# print(ls([1,3,4,11,19],0,10)) #-1

#==============OR========================

# def ls(arr,i,tar,li):
#     l = len(arr)
#     if i >= l:
#         return li
#     if arr[i] == tar:
#         li.append(i)
#     return ls(arr,i+1,tar,li) #jo v reurn ho rha hai yhi se ho rha hai

# print(ls([1,3,4,11,4,19],0,4,[])) #[2,4]

#==============OR==========================

# def ls(arr,i,tar):
#     li = []
#     l = len(arr)
#     if i >= l:
#         return li
#     if arr[i] == tar:
#         li.append(i)
#     ansFromBelowCalls = ls(arr,i+1,tar) 
#     li.append(ansFromBelowCalls)
#     return li

# print(ls([1,3,4,11,4,19],0,4)) #[[[2, [[4, [[]]]]]]]


# #Remove a from a string
# def rs(strng,tar,newStr):
#     if len(strng) == 0:
#         return newStr

#     if strng[0] != tar:
#         newStr += strng[0]

#     return rs(strng[1:],tar,newStr)

# print(rs("baccad",'a','')) #bccd 


# # Subset of a string
# def subst(strng,newStr):
#     if len(strng) == 0:
#         print(newStr)
#         return

#     subst(strng[1:],newStr+strng[0]) #include
#     subst(strng[1:],newStr) #exclude

# subst("abc",'')

# # abc
# # ab
# # ac
# # a
# # bc
# # b
# # c

# # ====================OR==================
# def subst(strng,newStr,arr):
#     if len(strng) == 0:
#         arr.append(newStr)
#         return

#     subst(strng[1:],newStr+strng[0],arr) #include
#     subst(strng[1:],newStr,arr) #exclude
#     return arr

# print(subst("abc",'',[])) #['abc', 'ab', 'ac', 'a', 'bc', 'b', 'c', '']


# # Permutation
# def per(ques,ans):
#     if len(ques)==0:
#         print(ans)
#         return
    
#     for i in range(len(ques)):
#         per(ques[i+1:]+ques[0:i], ans+ques[i])

# per("abcd","")

# # abc
# # acb
# # bca
# # bac
# # cab
# # cba


# def getcode(num):
#     if num == '2':
#         return 'abc'
#     elif num == '3':
#         return 'def'
#     elif num == '9':
#         return 'wxyz'

# # Letter Combination of a number
# def lc(ques,ans):
#     if len(ques) == 0:
#         print(ans)
#         return
    
#     ch = ques[0]
#     roc = ques[1:]

#     code = getcode(ch)

#     for i in range(len(code)):
#         lc(roc, ans+code[i])

# lc('23','')

# # ad
# # ae
# # af
# # bd
# # be
# # bf
# # cd
# # ce
# # cf
    

# Coin Toss
# def coinToss(n,ans):
#     if n == 0:
#         print(ans)
#         return

#     coinToss(n-1, ans+'H')
#     coinToss(n-1,ans+'T')

# coinToss(2,'')

# # HH
# # HT
# # TH
# # TT
    

