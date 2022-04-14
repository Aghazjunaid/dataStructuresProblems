let arr = [1, -2, 3, 4, -6]

for(let i=1;i<arr.length;i++){
    arr[i] = arr[i-1]+arr[i]
}
console.log(arr) //[ 1, -1, 2, 6, 0 ]
