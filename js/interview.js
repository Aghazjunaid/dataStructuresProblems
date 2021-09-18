// // 1. Count frequency of characters in a string
// function freq(str){
//     obj = {}
//     for(let i = 0; i< str.length; i++){
//         if (str[i] in obj){
//             obj[str[i]] += 1
//         } else {
//             obj[str[i]] = 1
//         }
//     }
//     return obj
// }

// let ans = freq("aghazjunaid")
// console.log(ans) //{ a: 3, g: 1, h: 1, z: 1, ' ': 1, j: 1, u: 1, n: 1, i: 1, d: 1 }

// function itr(ans){
//     for(let [key,value] of Object.entries(ans)){
//         console.log(`${key} appears ${value} times`)
//     }
// }
// // a appears 3 times
// // g appears 1 times
// // h appears 1 times
// // z appears 1 times
// // j appears 1 times
// // u appears 1 times
// // n appears 1 times
// // i appears 1 times
// // d appears 1 times
// itr(ans)

// // 2. deep/shalow/isolated copy of an object
// var empDetails = {
//     name: "John", age: 25, expertise: "Software Developer"
//   }
  
//   var empDetailsShallowCopy = empDetails    //Shallow copying!
//   empDetailsShallowCopy.name = "Johnson"
//   console.log(empDetailsShallowCopy) //{ name: 'Johnson', age: 25, expertise: 'Software Developer' }

// // Deep copy
// var empDetails = {
//     name: "John", age: 25, expertise: "Software Developer"
//   }

//   var empDetailsDeepCopy = {
//     name: empDetails.name,
//     age: empDetails.age,
//     expertise: empDetails.expertise
//   }
//   empDetailsDeepCopy.name = "Johnson"
//   console.log(empDetails) //{ name: 'John', age: 25, expertise: 'Software Developer' }
//   console.log(empDetailsDeepCopy) //{ name: 'Johnson', age: 25, expertise: 'Software Developer' }

// //Using Spread Operators
// var empDetails = {
//     name: "John", age: 25, expertise: "Software Developer"
//   }

// let obj = {...empDetails}
// obj.name = "aj"
// console.log(obj) //{ name: 'aj', age: 25, expertise: 'Software Developer' }
// console.log(empDetails) //{ name: 'John', age: 25, expertise: 'Software Developer' }


// //3. Count no. of substring in a string
// var temp = "This is a string.";
// var count = (temp.match(/is/g) || []).length;
// console.log(count); // 2


// // 4. convert object into an array
// var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// console.log(Object.entries(obj));
// // [
// //     [ '1', 5 ],  [ '2', 7 ],
// //     [ '3', 0 ],  [ '4', 0 ],
// //     [ '5', 0 ],  [ '6', 0 ],
// //     [ '7', 0 ],  [ '8', 0 ],
// //     [ '9', 0 ],  [ '10', 0 ],
// //     [ '11', 0 ], [ '12', 0 ]
// // ]


// // 5. remove duplicate values from an array
// let arr = [1,2,2,3,3,4]
// let result = new Set(arr)
// console.log([...result]) // [ 1, 2, 3, 4 ]


// // 6. remove duplicate objects from an array
// const arr = [
//     {label: 'All', value: 'All'},
//     {label: 'All', value: 'All'},
//     {label: 'Alex', value: 'Ninja'},
//     {label: 'Bill', value: 'Op'},
//     {label: 'Cill', value: 'iopop'}
// ]

// var result = arr.reduce((unique, o) => {
//     if(!unique.some(obj => obj.label === o.label && obj.value === o.value)) {
//       unique.push(o);
//     }
//     return unique;
// },[]);
// console.log(result);
// // [
// //     { label: 'All', value: 'All' },
// //     { label: 'Alex', value: 'Ninja' },
// //     { label: 'Bill', value: 'Op' },
// //     { label: 'Cill', value: 'iopop' }
// //   ]


// //  7. make an object immutable
// let obj = {
//     "aj": 1
// }
// Object.freeze(obj)
// obj.aj = 5
// console.log(obj) // { aj: 1 }
// delete obj.aj //will not delete
// obj.op = 2 // will not add new property


// // 8. remove an element from an array
// let value = 3
// let arr = [1, 2, 3, 4, 5, 3]
// arr = arr.filter(item => item !== value)
// console.log(arr) // [ 1, 2, 4, 5 ]

// arr = [1,2,3,4]
// delete arr[3]
// console.log(arr) //[ 1, 2, 3, <1 empty item> ]


// 
// function curry(f) { // curry(f) does the currying transform
//     return function(a) {
//       return function(b) {
//         return f(a, b);
//       };
//     };
//   }
  
//   // usage
//   function sum(a, b) {
//     return a + b;
//   }
  
//   let curriedSum = curry(sum);
//   console.log(curriedSum(1)(2))  //3

  
//   const curryUnaryFunction = a => b => c => a + b + c;
//   console.log(curryUnaryFunction (1) (2) (3)); // returns the number 6

