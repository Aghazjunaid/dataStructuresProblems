let arr = [1, 2, 3, 3, 3, 4, 4, 5];
let k = 3

function serachRange(arr,k){
    let j = 0
    let count = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == k){
            j = i;
            count++
        }
    }
    if(count > 1) {
        return [j-count+1,j]
    } else if(count ==1){
        return [j,j]
    }
    return [-1,-1]
}

console.log(serachRange(arr,k)) //[2,4]
console.log(serachRange([1, 2, 3, 3, 3, 4, 4, 5],5)) //[7,7]
console.log(serachRange([1, 2, 3, 3, 3, 4, 4, 5],6)) //[-1,-1]