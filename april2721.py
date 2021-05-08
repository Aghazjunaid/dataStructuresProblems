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

#      OR  using HashTable
opt = [1,4,7,5,2,6,8,12,11]
hashTable = []
max = opt[0] #12
for i in opt:
    if i > max:
        max = i
for j in range(0,max+1):
    hashTable.append(0)
print(hashTable) # [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for i in opt:
    hashTable[i] += 1
print(hashTable) # [0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1]
for i in range(1,len(hashTable)):
    if hashTable[i]==0:
        print(i)

# 3
# 9
# 10


# finding duplicates in a sorted array
opt = [1,2,3,3,4,4,4,5,5,5,5,6,7,7]
duplicates = []
first = 0
for i in opt:
    if first == i:
        if i not in duplicates:
            duplicates.append(i)
        first = i
    else:
        first = i
print(duplicates)

# [3, 4, 5, 7]


# count duplicates in an unsorted array
opt = [2,3,6,3,4,2,4,1,4,5,5,12,5,6,7,7]
table = []
max = opt[0] #2
for i in opt:
    if i > max:
        max = i
for i in range(0,max+1):
    table.append(0)
print(table) # [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for i in opt:
    table[i] += 1
print(table) # [0, 1, 2, 2, 3, 3, 2, 2, 0, 0, 0, 0, 1]
for i in range(1,len(table)):
    if table[i]>1:
        print(str(i)+" is appeared "+str(table[i])+" times.")

# 2 is appeared 2 times.
# 3 is appeared 2 times.
# 4 is appeared 3 times.
# 5 is appeared 3 times.
# 6 is appeared 2 times.
# 7 is appeared 2 times.


# find maxm and minm in a single turn
opt = [21,23,6,13,34,112,14,10,24,45,5,12,5,46,79,7]
max = opt[0]
min = opt[0]
for i in range(1,len(opt)):
    if opt[i]>max:
        max=opt[i]
    elif opt[i]<min:
        min=opt[i]
print(max,min)

# 112 5


# Write a program which will find all such numbers which are divisible by 7 but are not a multiple of 5,
# between 2000 and 3200 (both included).
# The numbers obtained should be printed in a comma-separated sequence on a single line.

num = []
for i in range(2000,3201):
    if (i%7 == 0) & (i%5 != 0):
        num.append(i)
print(num)

# [2002, 2009, 2016, 2023, 2037, 2044, 2051, 2058, 2072, 2079, 2086, 2093, 2107, 2114, 2121, 2128, 2142, 
# 2149, 2156, 2163, 2177, 2184, 2191, 2198, 2212, 2219, 2226, 2233, 2247, 2254, 2261, 2268, 2282, 2289, 2296, 
# 2303, 2317, 2324, 2331, 2338, 2352, 2359, 2366, 2373, 2387, 2394, 2401, 2408, 2422, 2429, 2436, 2443, 2457, 
# 2464, 2471, 2478, 2492, 2499, 2506, 2513, 2527, 2534, 2541, 2548, 2562, 2569, 2576, 2583, 2597, 2604, 2611, 
# 2618, 2632, 2639, 2646, 2653, 2667, 2674, 2681, 2688, 2702, 2709, 2716, 2723, 2737, 2744, 2751, 2758, 2772, 
# 2779, 2786, 2793, 2807, 2814, 2821, 2828, 2842, 2849, 2856, 2863, 2877, 2884, 2891, 2898, 2912, 2919, 2926, 2933, 
# 2947, 2954, 2961, 2968, 2982, 2989, 2996, 3003, 3017, 3024, 3031, 3038, 3052, 3059, 3066, 3073, 3087, 3094, 3101, 
# 3108, 3122, 3129, 3136, 3143, 3157, 3164, 3171, 3178, 3192, 3199]


# With a given integral number n, write a program to generate a dictionary that contains (i, i*i) 
# such that is an integral number between 1 and n (both included). and then the program should print the dictionary.
def dict(n):
    dic = {}
    for i in range(1,n+1):
        dic[i] = i*i
    print(dic)

x=input("raw_input")
dict(int(x))

# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64}


# 9. Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo
opt = [0,1,2,0,2,1]
low = 0
mid = 0
high = len(opt)-1
while mid <= high:
    if opt[mid] == 0:
        opt[low], opt[mid] = opt[mid], opt[low]
        low +=1
        mid +=1
    elif opt[mid] == 1:
        mid +=1
    else:
        opt[mid], opt[high] = opt[high], opt[mid]
        high -= 1
# print(opt)


# No. is prime or not
def prime(opt):
    count = 0
    for i in range(2,opt):
        if opt%i==0:
            count += 1
    if count >= 1:
        print("Not prime")
    else:
        print("prime")

prime(13) # prime
prime(130) # Not prime


# count factors of a number
def factor(opt):
    count = 0
    for i in range(1,opt+1):
        if opt%i==0:
            count += 1
    print("No. of factor of "+str(opt)+ " is "+str(count))

factor(24) # No. of factor of 24 is 8