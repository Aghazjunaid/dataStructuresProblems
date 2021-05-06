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