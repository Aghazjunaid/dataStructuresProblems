// // Program to Count the Number of Digits Present In a Number
// var num = 1234535635636625
// count = 0
// while(num > 1){
//     num = Math.floor(num / 10)
//     count += 1
// }
// console.log(count) // 15

// // Program to Count the Number of Digits Present In a Number
// var num = 12345352367
// var numb = String(num).split('')
// var doc = {}

// for(let i = 0; i < numb.length; i++){
//     if (doc[numb[i]]){
//         doc[numb[i]] = ++doc[numb[i]]
//     } else {
//         doc[numb[i]] = 1
//     }
// }
// console.log(doc)
// // { '1': 1, '2': 2, '3': 3, '4': 1, '5': 2, '6': 1, '7': 1 }
// for (const [key, value] of Object.entries(doc)) {
//     if (value > 1){
//         console.log(`${key}: ${value}`);
//     }
// }
// // 2: 2
// // 3: 3
// // 5: 2

// // Program to Check If Two Strings are Anagram
// let str1 = "race"
// let str2 = "care"

// if (str1.length != str2.length){
//     console.log("Not Anagram")
// }

// let arr1 = str1.split('') 
// let arr2 = str2.split('') 
// console.log(arr1.sort()) //console.log(JSON.stringify(a1)==JSON.stringify(a2));    use this two match two arrays

// var doc1 = {}
// for(let i = 0; i < arr1.length; i++){
//     if (doc1[arr1[i]]){
//         doc1[arr1[i]] = ++doc1[arr1[i]]
//     } else {
//         doc1[arr1[i]] = 1
//     }
// }
// console.log(doc1)
// var doc2 = {}
// for(let i = 0; i < arr2.length; i++){
//     if (doc2[arr2[i]]){
//         doc2[arr2[i]] = ++doc2[arr2[i]]
//     } else {
//         doc2[arr2[i]] = 1
//     }
// }
// console.log(doc2)
// if (JSON.stringify(doc1) === JSON.stringify(doc2)){
//     console.log("Anagram")
// }else {
//     console.log("Not Anagram")
// }
// [ 'a', 'c', 'e', 'r' ]
// { a: 1, c: 1, e: 1, r: 1 }
// { c: 1, a: 1, r: 1, e: 1 }
// Not Anagram


// let arr = [1,2,3,4,5,6,7,8,9]
// let tar = 9
// s = 0
// l = arr.length-1
// while (s<=l){
//     mid = Math.floor((s+l)/2)
//     if (arr[mid] === tar){
//         console.log("Found")
//         break
//     }
//     if (arr[mid] > tar){
//         l = mid - 1
//     } else {
//         s = mid + 1
//     }
// }
// // Found


// // Program to Compute all the Permutation of the String
// let s = "abc"
// console.log(s.length)

// function perm(ques,ans){
//     if (ques.length === 0){
//         console.log(ans)
//         return
//     }
//     for(let i = 0; i < ques.length; i++){
//         perm(ques.slice(1),ans+ques[i])
//     }    
// }

// perm(s,"")
// // abc
// // acc
// // bbc
// // bcc
// // cbc
// // ccc


// function convertToRoman(num) {
//     var roman = {
//       M: 1000,
//       CM: 900,
//       D: 500,
//       CD: 400,
//       C: 100,
//       XC: 90,
//       L: 50,
//       XL: 40,
//       X: 10,
//       IX: 9,
//       V: 5,
//       IV: 4,
//       I: 1
//     };
//     var str = '';
  
//     for (var i of Object.keys(roman)) {
//         if(num >= roman[i]){
//             let rem = num % roman[i]
//             let quo = Math.floor(num/roman[i])
//             str += i.repeat(quo)
//             num = rem
//         }
//     }
  
//     return str;
// }

// console.log(convertToRoman(130)) //CXXX


// let arr = [1,2,3,4,2,3,5,6,2,3,1,4]
// let doc = {}
// for(let i = 0; i < arr.length; i++){
//     if (doc[arr[i]]){
//         doc[arr[i]] = ++doc[arr[i]]
//     } else {
//         doc[arr[i]] = 1
//     }
// }
// console.log(doc) //{ '1': 2, '2': 3, '3': 3, '4': 2, '5': 1, '6': 1 }
// for(let j of Object.keys(doc)){
//     if (doc[j]> 1){
//         console.log("Repeated number is "+ j +" and is repated "+ doc[j] +" times")
//     }
// }

// Repeated number is 1 and is repated 2 times
// Repeated number is 2 and is repated 3 times
// Repeated number is 3 and is repated 3 times
// Repeated number is 4 and is repated 2 times

const a = {a:1}
a.a = 2
console.log(a) //{ a: 2 }


const a = 5
a = 10
console.log(a) //TypeError: Assignment to constant variable.


let arr = [1,2,4,3,2,1]
let opt = new Set(arr)
console.log(opt) //Set(4) { 1, 2, 4, 3 }
console.log([...opt]) //[ 1, 2, 4, 3 ]