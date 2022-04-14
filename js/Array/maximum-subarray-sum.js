// let arr = [4, -6, 2, 5]

// let sum =0
// for(let i in arr){
//     let sum1 = 0;
//     for(let j=i; j<arr.length;j++){
//         sum1 += arr[j]
//         if (sum1> sum) sum = sum1
//     }
// }

// console.log(sum) //7

// OR(kadane's algorithm)

let arr = [-2,-3,4,-1,-2,1,5,-3]

let sum =0
let max = arr[0]
for(let i in arr){
    sum+=arr[i]
    if(sum>max) max =sum
    if(sum<0) sum = 0
}

console.log(max) //7