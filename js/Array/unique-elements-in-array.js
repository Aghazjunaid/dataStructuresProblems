let arr = [1, 2, 3, 3, 3, 4, 5, 5]

for(let i=1; i<arr.length;i++){
    if(arr[i-1] == arr[i]){
        arr.splice(i--,1)
    }
}

console.log(arr) //[ 1, 2, 3, 4, 5 ]