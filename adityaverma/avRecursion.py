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
# # cxfx

# First Index Of a Number
def fir(a, x, i):
    l = len(a)
    if i == l:
        return -1
    if a[i] == x:
        return i
    return fir(a,x,i+1)

print(fir([1,12,3,2],2,0))
