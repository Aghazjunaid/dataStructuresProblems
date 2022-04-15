// let arr = [1, 1, 0, -1, -2]

// let newArr = []
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         for(let k=j+1;k<arr.length;k++){
//             if(arr[i]+arr[j]+arr[k] == 0){
//                 let value = [arr[i],arr[j],arr[k]].sort()
//                 newArr.push(value)
//             }
//         }
//     }
// }
// console.log(newArr) //[ [ -2, 1, 1 ], [ -1, 0, 1 ], [ -1, 0, 1 ] ]


//2 (Best soln) only for sorted arrays
let arr = [-2,-1,0,1,1]

let newArr = []
for(let i=0;i<arr.length;i++){
    let curr = arr[i]
    left = i+1
    right = arr.length-1
    while(left<right){
        if(arr[left]+arr[right]+curr >0){
            right--
        } else if(arr[left]+arr[right]+curr <0){
            left++
        }else{
            newArr.push([curr,arr[left],arr[right]])
            right--
            left++
        }
    }
}
console.log(newArr) //[ [ -2, 1, 1 ], [ -1, 0, 1 ] ]

