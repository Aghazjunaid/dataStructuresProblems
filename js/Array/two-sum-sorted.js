// function twoSumSOrted(arr){
//     for(let i in arr){
//         let num = -arr[i]
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] == num){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(twoSumSOrted([-3, 1, 3, 4])) //true
// console.log(twoSumSOrted([-3, 1, 2, 4])) //false
// console.log(twoSumSOrted([3, 1, -3, 4])) //true


// 2(Best Method)
function twoSumSOrted(arr){
    let l = 0;
    let r = arr.length-1
    while(l<r){
        if(arr[l]+arr[r] > 0){
            r--
        } else if(arr[l]+arr[r]< 0){
            l++
        } else if(arr[l]+arr[r] == 0){
            console.log(arr[l],arr[r])
            return true
        }
    }
    return false
}

console.log(twoSumSOrted([-3, 1, 3, 4])) //true
console.log(twoSumSOrted([-3, 1, 2, 4])) //false
console.log(twoSumSOrted([-19,-3, 0, 3, 4,5,7,8])) //true


let arr = [-19,-3, 0, 3, 4,5,7,8]

let obj = {}

for(let i=0;i<arr.length;i++){
    let diff = 0 - arr[i]
    if(diff in obj){
        console.log([obj[diff],i])
        break
    }
    obj[arr[i]] = i
}