let arr = [1, 2, 3, 3, 4, 4, 8, 10]
let k=4
let ans = -1
let l = 0
let h = arr.length-1
while(l<=h){
    let m = parseInt((l+h)/2)
    if(arr[m] <= k){
        l = m+1
    }else{
        ans = arr[m]
        h = m-1
    }
}

console.log(ans)