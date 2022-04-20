let arr = [1, 2, 3, 4, 5];
let k = 3
let ans = arr.length

for(let i=0;i<arr.length;i++){
    if(arr[i]>=k){
        ans = i
        break
    }
}

console.log(ans) //2

