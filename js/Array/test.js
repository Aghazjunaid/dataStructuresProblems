
let arr = [1, 3, 5, 7, 10];
let k = 2
let count = 0
for(let i = 1; i<arr.length;i++){
    let diff = arr[i] - arr[i-1]
    if(diff == k) count++ 
}
console.log(count) 