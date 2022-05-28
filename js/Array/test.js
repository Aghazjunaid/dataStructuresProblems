let arr = [9, 4, 20, 3, 10, 5]
let k = 33;
let count = 0;

for(let i=0;i<arr.length;i++){
    let sum = 0
    for(let j=i;j<arr.length;j++){
        sum += arr[j]
        if(sum == k) count++        

    }
}

console.log(count)