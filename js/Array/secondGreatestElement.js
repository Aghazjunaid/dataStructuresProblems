let arr = [3,1,4,9,4]

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] < arr[j]){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
// }

// console.log(arr[0],arr[1]) //9,4


let f = 0
let s = 0

for(let i=0;i<arr.length;i++){
    if(s==0) s=arr[i]
    if(arr[i]>f){
        s = f
        f = arr[i]
    } else if(arr[i] > s){
        s= arr[i]
    }
}
console.log(s) //4