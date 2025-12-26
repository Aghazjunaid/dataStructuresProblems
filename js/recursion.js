1.
function rec(n,arr){
  if(n==0){
    return arr
  }
  rec(n-1,arr)
  arr.push(n)
  console.log(n)
  return arr
}

console.log(rec(4,[]))
// 1
// 2
// 3
// 4
// [ 1, 2, 3, 4 ]

🧠 Rule of thumb
❌ Never do this in recursion:
rec(n - 1, arr.push(n))

✅ Always do:
arr.push(n);
rec(n - 1, arr);

Key takeaway 🧠
Every recursive call must return something
Otherwise JavaScript returns undefined
Arrays are passed by reference, but return still matters

2.
function rec(n,arr){
  if(n==0){
    return arr
  }
  arr.push(n)
  console.log(n)
  rec(n-1,arr)
  return arr
}

console.log(rec(4,[]))
4
3
2
1
[ 4, 3, 2, 1 ]

3.
function rec(arr,i){
  if(i <= 0){
    return 0
  }
  
  return 1 + rec(arr,i-1)
  
}

console.log(rec([1,2,3,4],[1,2,3,4].length)) //4
🧠 Key Takeaways
-Always return the recursive call
-Don’t update variables after recursion unless you understand stack unwinding
-return 1 + rec(...) is the safest recursive pattern
-If asked “find array length using recursion”, use:
  return 1 + rec(...)
