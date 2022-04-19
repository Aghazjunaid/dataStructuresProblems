let arr = [3, 7, 6, 8, 4, 2, 1];
let k =3;

// let count = 0
// for(let i=0; i<arr.length;i++){
//     let sum = 0
//     let aj = 0
//     for(let j=i; j<arr.length;j++){
//         sum += arr[j]
//         aj++
//         if(aj==k){
//             if(sum > count) count = sum
//             break
//         }
//     }
// }
// console.log(count) // 21

// Sliding window technique
let firstSum = 0;
for(let i=0;i<k;i++){
    firstSum+= arr[i]
}
console.log(firstSum)

let sum = 0
for(let i=k; i<arr.length;i++){
    firstSum += arr[i] - arr[i-k]
    if(firstSum > sum) sum = firstSum
}

console.log(sum) //21