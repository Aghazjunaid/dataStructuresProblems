let arr1 = [1, 3, 4, 5, 5, 6, 6, 7];
let arr2 = [2, 5, 6, 6, 7, 8];

let arr = []
let i=0;
let j=0;
while(i<arr1.length && j<arr2.length){
    if(arr1[i] < arr2[j]){
        i++
    }else if(arr1[i]>arr2[j]){
        j++
    }else{
        arr.push(arr1[i])
        i++
        j++
    }
}

console.log(arr) // [ 5, 6, 6, 7 ]