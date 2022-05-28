// let arr = [1, 3, 5, 7, 10];
// let k = 2
// let count = 0
// for(let i = 0; i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(i<j){
//             let diff = Math.abs(arr[j] - arr[i])
//             if(diff == k) count++
//         }
//     }
// }
// console.log(count)


// 2 (Optimized Code) two pointer approach
let arr = [1, 3, 5, 7, 10];
let k = 2
let count = 0
let left = 0;
let right = 0

while(right <arr.length){
    let diff = arr[right] - arr[left]
    if(diff > k){
        left++
    }else if(diff < k){
        right++
    }else if(diff == k){
        count++
        right++
        left++
    }
}
console.log(count)


// let arr = [1, 3, 5, 7, 10];
// let k = 2
// let count = 0
// for(let i = 1; i<arr.length;i++){
//     let diff = arr[i] - arr[i-1]
//     if(diff == k) count++ 
// }
// console.log(count) 