// Task 2 - Multiple every number by 2 but ignore of divisible by 5 (print same number)
let numbers = [5,3,9,30]

// const multipleElementByTwoButNotFive = (numArr) => {
//   return numArr.map((item) => !item%5==0 && item * 2);
// };

// console.log(multipleElementByTwoButNotFive(numbers)); // [ 5, 6, 18, 30 ]

// const multipleElementByTwoButNotFive = (numArr) => {
//     if(!Array.isArray(numArr)){
//         return "Not an array"
//     }
//     return numArr.map((item) => {
//         if(item%5 == 0){
//             return item
//         }
//         return item * 2
//     });
//   };
  
//   console.log(multipleElementByTwoButNotFive(numbers)); // [ 5, 6, 18, 30 ]



// let aj = [1,1,1,2,2,3,4,5,6,6,7]

// let obj = {}
// aj.map((ele) => {
//     if(obj[ele]){
//         return obj[ele] = obj[ele] + 1
//     }else{
//         return obj[ele] = 1
//     }
// })

// console.log(obj) // { '1': 3, '2': 2, '3': 1, '4': 1, '5': 1, '6': 2, '7': 1 }


// Task 2 - Multiple every number by 2 but ignore of divisible by 5 (Remove that number)
// const multipleElementByTwoAndDeleteIfDivisibleBy5 = (numArr) => {
//     return numbers.execMap((item) => (item % 5 !== 0 ? item * 2 : item));
//   };

// const multipleElementByTwoAndDeleteIfDivisibleBy5 = (numArr) => {
//     return numArr.filter((item) => item%5!==0).map((ele) => ele*2)
//   };

//     console.log(multipleElementByTwoAndDeleteIfDivisibleBy5(numbers)); // [ 5, 6, 18, 30 ]


// Task 4 - Union of an array
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [2, 777, 3, 78, 97];

function findUnion(a, b) {
  if (!Array.isArray(a) && !Array.isArray(b)) {
    return "Please enter a valid array";
  }

  //method-1
  for (let i = 0; i < b.length; i++) {
    a.push(b[i])
  }

  for(let i = 0; i<a.length; i++){
    for(var j=i+1; j<a.length; ++j) {
      if(a[i] === a[j])
          a.splice(j--, 1);
    }
  }
  return a
  // let union = []
  // let doc = {}
  // for(let i = 0; i < a.length; i++){
  //     if (doc[a[i]]){
  //         doc[a[i]] = ++doc[a[i]]
  //     } else {
  //         doc[a[i]] = 1
  //     }
  // }

  // for(let key in doc){
  //   union.push(key)
  // }
  // return union


  a.concat(b)
  let union = []
  
}

let result = findUnion(arr1, arr2); // [1,2,3,4,5,6,7,777,3,78,97]
console.log(result)

//method-2
// let aj1 = arr1.concat(arr2)
// let aj = [...aj1]
// console.log(aj)


