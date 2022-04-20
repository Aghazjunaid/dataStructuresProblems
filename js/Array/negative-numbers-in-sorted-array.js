let arr = [-5, -3, -2, 3, 4, 6, 7, 8];

let count = 0
for(let i=0; i<arr.length;i++){
    if(arr[i] < 0){
        count++
    }
}

console.log(count) //3