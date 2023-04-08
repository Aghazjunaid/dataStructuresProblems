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


function find3Numbers(A,arr_size,sum)
{
    // Fix the first element as A[i]
    for (let i = 0; i < arr_size - 2; i++) {

        // Find pair in subarray A[i+1..n-1]
        // with sum equal to sum - A[i]
        let s = new Set(); //21
        let curr_sum = sum - A[i];
        for (let j = i + 1; j < arr_size; j++)
        {
            if (s.has(curr_sum - A[j]))
            {
                console.log(A[i],A[j],(curr_sum-A[j]))
                return true;
            }
            s.add(A[j]);
        }
    }

    // If we reach here, then no triplet was found
    return false;
}

let A=[1, 4, 45, 6, 10, 8];
     
    let sum = 22;
    let arr_size = A.length;
    find3Numbers(A, arr_size, sum);




    let arr = [-2,-1,0,1,1]

let obj = {}
for(let i = 0; i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
        let num = 0 - (arr[i] + arr[j])
        if(num in obj){
            console.log(arr[i],arr[j],num)
        }
        obj[num] = 1
    }
}

console.log(arr)