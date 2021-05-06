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