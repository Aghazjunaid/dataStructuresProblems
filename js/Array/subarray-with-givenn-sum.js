// let arr = [1,2,3,7,5]
// let s = 12

// for(let i=0;i<arr.length;i++){
//     let sum = 0
//     for(let j=i;j<arr.length;j++){
//         sum+=arr[j]
//         if(sum == s){
//             console.log(i,j)
//         }
//     }
// }
// // 1 3
// // 3 4

let arr = [1,2,3,7,5]
let s = 12

let sum = 0
let a = 0
for(let i=0;i<arr.length;i++){
    sum += arr[i]
    if(sum > s){
        sum -= arr[a]
        a++
    }
    if(sum == s){
        console.log(a,i)
    }
}