// let arr = [1, 2, 3, 3, 3, 4, 4, 5]
// let num = 4;

// function findEle(arr,num){
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i] == num) return true
//     }
//     return false
// }

// console.log(findEle(arr,num)) //true

// Binary Search
let arr = [1, 2, 3, 3, 3, 4, 4, 5,6]
let num = 14;

function findEle(arr,num){
    let l = 0;
    let r = arr.length-1
    
    while(l<r){
        m = parseInt((l+r)/2)
        if(arr[m] > num){
            r = m-1
        } else if(arr[m] < num){
            l= m+1
        } else if(arr[m] == num){
            return true
        }
    }
    return false
}

console.log(findEle(arr,num)) //false