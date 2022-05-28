//Form-1
// let arr = [9, 4, 20, 3, 10, 5]
// let k = 13;

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j] == k){
//             console.log(i,j)
//         }
//     }
// }
// // 0 1
// // 3 4

// OR
let arr = [9, 4, 20, 3, 10, 5]
let k = 13;

let obj = {}
for(let i=0;i<arr.length;i++){
    let num = k-arr[i]
    if(num in obj){
        console.log(obj[num],i)
    }
    obj[arr[i]] = i
}

//Form-2

