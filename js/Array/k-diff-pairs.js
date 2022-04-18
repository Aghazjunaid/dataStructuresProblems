let arr = [1, 3, 5, 7, 10];
let k = 2
let count = 0
for(let i = 0; i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(i<j){
            let diff = Math.abs(arr[j] - arr[i])
            if(diff == k) count++
        }
    }
}
console.log(count)

