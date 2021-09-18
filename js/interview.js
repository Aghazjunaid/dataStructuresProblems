// // Count frequency of characters in a string
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

// // deep/shalow/isolated copy of an object
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
