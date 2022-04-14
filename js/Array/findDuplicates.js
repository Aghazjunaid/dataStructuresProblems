// Find all repeated numbers from an array

// // 1
// const input1 = [1, 2, 4, 5, 6, 1, 3, 7, 9, 10, 2, 5]; // [1, 2, 5]

// const findDuplicates = (input1) => {
//   if (!Array.isArray(input1)) {
//     return "Please enter a valid array";
//   }

//   let arr = []
//   for(let i=0; i<input1.length;i++){
//       for(let j=i+1; j<input1.length;j++){
//         if(input1[i] === input1[j]){
//             arr.push(input1[j])
//             input1.splice(j,1)
//             j--
//         }
//       }
//   }
//   return arr
// };

// console.log(findDuplicates(input1)); // [1,2,5]


// 2
a = [1, 2, 4, 5, 6, 1, 3, 7, 9, 10, 2, 5]
uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) !== pos;
})
console.log(uniqueArray) // [ 1, 2, 5 ]
