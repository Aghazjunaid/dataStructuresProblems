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

4. Mean of array using recursion
function rec(arr,i){
  if(i == 0){
    return 0
  }
  
  return arr[i-1] + rec(arr,i-1)
  
}

console.log(rec([1,2,3,4],[1,2,3,4].length)) //10

5. Sum of First N Natural Numbers Using Recursion
function rec(n){
  if(n==1){
    return 1;
  }
  
  return n + rec(n-1)
}

console.log(rec(4)) //10

6. Print reverse of a string using recursion
function rec(str,i){
  if(i == 0){
    return '';
  }
  
  return str[i-1]+ rec(str,i-1)
}

console.log(rec("Geeks for Geeks","Geeks for Geeks".length)) //skeeG rof skeeG

7.
function rec(num){
  
  if(num == 0){
    return 0;
  }
  
  return num%10 + rec(parseInt(num/10))
}

console.log(rec(12345)) //15

8. Fibonacci
function rec(n){
  
  if(n == 0 || n == 1){
    return n;
  }
  
  return rec(n-1) + rec(n-2)
}

console.log(rec(4)) //3

9. Factorial of a Number
function rec(n){
  
  if(n == 1){
    return 1;
  }
  
  return n * rec(n-1)
}

console.log(rec(5)) // 120

10.Minimum and Maximum elements Using Recursion
function rec(arr, i, max, min) {
  if (i == 0) {
    return { min, max };
  }

  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];

  return rec(arr, i - 1, max, min);
}

console.log(
  rec([1, 4, 3, -5, -4, 8, 6], [1, 4, 3, -5, -4, 8, 6].length-1, 1, 1)
); //{ min: -5, max: 8 }

rec(arr, 6, max=1, min=1)
 ├─ arr[6] = 6
 ├─ max = 6, min = 1
 └─ rec(arr,5,max=6,min=1)
      ├─ arr[5] = 8
      ├─ max = 8, min = 1
      └─ rec(arr,4,max=8,min=1)
           ├─ arr[4] = -4
           ├─ max = 8, min = -4
           └─ rec(arr,3,max=8,min=-4)
                ├─ arr[3] = -5
                ├─ max = 8, min = -5
                └─ rec(arr,2,max=8,min=-5)
                     ├─ arr[2] = 3
                     ├─ max = 8, min = -5
                     └─ rec(arr,1,max=8,min=-5)
                          ├─ arr[1] = 4
                          ├─ max = 8, min = -5
                          └─ rec(arr,0,max=8,min=-5)
                               └─ base case → return {min: -5, max: 8}


