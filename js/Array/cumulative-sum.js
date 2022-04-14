let arr = [1, 3, 5, 7, 9]

for(let i=1;i<arr.length;i++){
    arr[i] = arr[i-1]+arr[i]
}
console.log(arr) //[ 1, 4, 9, 16, 25 ]
