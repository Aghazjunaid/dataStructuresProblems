// //Maximum K-Subarray Sum
// function maxKSum(arr,k){
    
//     let res = 0
//     for(let i=0; i<k;i++){
//         res += arr[i]
//     }

//     let newRes = res
//     for(let i=k; i<arr.length;i++){
//         newRes += arr[i] - arr[i-k]
//         res = Math.max(newRes,res)
//     }
//     return res
// }

// console.log(maxKSum([3, 5, 6, 2, 4, 7, 8],3))


function foo() {
  return "bar";
}
foo = "bar";
console.log(typeof foo);
