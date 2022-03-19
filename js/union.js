// // Method-1
// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = [2, 777, 3, 78, 97];

// let arr = []
// for(let i=0; i< arr1.length;i++){
//     let flag = true
//     for(let j=0; j<arr2.length; j++){
//         if(arr1[i] == arr2[j]){
//             flag = false
//             break
//         }
//     }
//     if(flag){
//         arr.push(arr1[i])
//     }
// }
// arr = arr.concat(arr2)

// console.log(arr)

// Method-2
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [2, 777, 3, 78, 97];

for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
}

for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i] == arr1[j]){
            arr1.splice(j,1)
            j--
        }
    }

}
console.log(arr1)