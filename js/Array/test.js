let arr = [1, 3, 5, 7, 10];
let k = 2
let count = 0
let left = 0;
let right = arr.length-1

while(left <right){
    let diff = arr[right] - arr[left]
    if(diff > k){
        right--
    }else if(diff < k){
        left++
    }else if(diff == k){
        count++
        right--
        left++
    }
}
console.log(count)