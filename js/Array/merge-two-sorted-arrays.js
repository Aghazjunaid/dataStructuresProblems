let arr1 = [1, 2, 3, 4, 4];
let arr2 = [2, 4, 5, 5];

let arr = []   
let i=0;
let j=0;
while(i<arr1.length && j<arr2.length){
    if(arr1[i] <= arr2[j]){
        arr.push(arr1[i])
        i++
    }else{
        arr.push(arr2[j])
        j++
    }
}
//now check if i and j is equal to array length
while(i<arr1.length){
    arr.push(arr1[i])
    i++
}
while(j<arr2.length){
    arr.push(arr2[j])
    j++
}
console.log(arr)
// [
//     1, 2, 2, 3, 4,
//     4, 4, 5, 5
// ]