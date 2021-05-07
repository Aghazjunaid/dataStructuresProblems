for i in range(1,6):
    print("*"*i)

# *
# **
# ***
# ****
# *****



for i in range(5,0,-1):
    print("*"*i)

# *****
# ****
# ***
# **
# *



def fun(n):
    if n>0:
        fun(n-1)
        print(n)

fun(3)

# 1
# 2
# 3

# factorial using recursion
def fact(n):
    if n==0:
        return 1
    else:
        return fact(n-1)*n

opt=fact(4)
print(opt)

# 24


# searching algo
aj = [10,12,15,16,18]
key = 18
for i in aj:
    if key==i:
        print("true")

#true


# count and print vowels and consonant
opt = ['a','e','i','o','u']
data= "aghazjunaid"
vow =0
cons=0
for i in data:
    if i in opt:
        print(i+" is vowel")
        vow= vow + 1
    else:
        print(i+" is consonant")
        cons = cons + 1
print("No. of vowel is ="+ str(vow))
print("No. of consonant is ="+ str(cons))

# a is vowel
# g is consonant
# h is consonant
# a is vowel
# z is consonant
# j is consonant
# u is vowel
# n is consonant
# a is vowel
# i is vowel
# d is consonant
# No. of vowel is =5
# No. of consonant is =6


#find minm number
opt = [100,201,37,45,190,158,67]
vow = opt[0]
for i in opt:
    if i<vow:
        vow = i
print(vow)

# 37

# fibonacci series
def fib(n):
    i=0
    j=1
    print(i)
    print(j)
    for k in range(0,n-2):
        x = i+j
        print(x)
        i=j
        j=x

fib(100)

# 0
# 1
# 1
# 2
# 3
# 5
# 8
# 13
# 21
# 34


# sum of elements of an array
opt = [1,2,3,4,5,6,7,8]
sum=0
for i in opt:
    sum = sum + i
print(sum)

#36

# array is sorted or not
def isSorted(opt):
    aj = opt[0]
    for i in opt:
        if i>=aj:
            aj = i
        else:
            print("Not sorted")
            break

opt = [1,2,3,4,9,6,7,8]
isSorted(opt)

# Not sorted

# reverse of an array
opt = [1,2,3,4,5,6,7,8]
opt.reverse()
print(opt)

# [8, 7, 6, 5, 4, 3, 2, 1]


# find single missing element
opt = [1,2,3,4,5,6,8,9,10,11,12]
dif = opt[0] -0
for i in opt:
    newDif = opt[i] - i
    if dif != newDif:
        print(i+dif)
        break

# 7
#                             OR

sum = 0
for j in opt:
    sum =sum + j
calc = ((len(opt)+1)*(len(opt)+2))/2
print("Missing no. is = "+ str(calc-sum))

# Missing no. is = 7.0


# table maker
for i in range(1,11):
    print(str(11) + "*" + str(i) + "=" + str(11*i))

# 11*1=11
# 11*2=22
# 11*3=33
# 11*4=44
# 11*5=55
# 11*6=66
# 11*7=77
# 11*8=88
# 11*9=99
# 11*10=110


# finding multiple missing elements
opt = [1,2,3,4,5,6,8,11,12]
dif = opt[0] -0
for i in opt:
    newDif = opt[i] - i
    if dif != newDif:
        while dif < newDif:
            print(i+dif)
            dif = dif + 1

# 7
# 10
# 11