// // 6 Python Program to Swap Two Variables
// let a = 10
// let b = 20
// let tem = a
// a = b 
// b = tem
// console.log(a,b)

// // 7 Python Program to Generate a Random Number
// console.log(Math.floor(100000 + Math.random() * 900000))

// // 8 Python Program to Convert Kilometers to Miles
// let km = 10
// let miles = km * 0.621371
// console.log(miles)

// // 14 Python Program to Check Prime Number
// let num = 9
// count = 0
// for(let i = 2; i <num;i++){
//     if (num % i === 0){
//         count += 1
//         break
//     }
// }
// if (count === 0) {
//     console.log("Not-Prime")
// } else {
//     console.log("Prime")
// }

// // 15 Python Program to Print all Prime Numbers in an Interval
// let lower = 900
// let higher = 1000
// for (let i = lower; i <= higher; i++){
//     let count = 0
//     for (let j = 2; j <i; j++){
//         if (i % j ===0){
//             count += 1
//             break
//         }
//     }
//     if (count === 0){
//         console.log(i)
//     }
// }

// // 16 Python Program to Find the Factorial of a Number
// let n = 4
// let fac = 1
// for(let i =n; i > 0; i--){
//     fac *= i
// }
// console.log(fac)

// // 17 Python Program to Print the Fibonacci sequence
// let n = 7
// first = 0
// last = 1
// temp = 0
// console.log(first)
// console.log(last)
// for (let i = 0; i<n-2; i++){
//     temp = last
//     last = first+temp
//     first = temp
//     console.log(last)
// }


// // Armstrong Number
// let numb = 153
// let sum = 0
// let len = (String(numb)).length
// let num = numb
// for(let i =0; i < len; i++){
//     rem = num % 10
//     sum += rem ** len
//     num = Math.floor(num / 10)
// }
// if (sum === numb){
//     console.log("Armstrong")
// } else {
//     console.log("not")
// }

// // Number divisible by another number
// let arr = [12, 65, 54, 39, 102, 339, 221]

// let arr1 = arr.filter(ele => ele%13==0)
// console.log(arr1) 
// // [ 65, 39, 221 ]

// Binary To Decimal
// bin = 101011000
// bins = String(bin).split('').reverse()
// console.log(bins)
// dec = 0
// for(let i = 0; i < bins.length; i++){
//     dec += bins[i]*(2**i)
// }
// console.log(dec)
// // 344

// // Decimal to Binary
// dec = 16
// bin = ''
// while (dec>1){
//     rem = dec % 2
//     dec = Math.floor(dec/2)
//     bin += String(rem)
// }
// bin = (bin+dec)
// let newBin = bin.split('').reverse().join('')
// console.log(newBin)

// // HCF
// s = 300
// l = 400
// let rem =-1
// while(rem != 0){   //jb tak rem =0 ke equal na ho jaaye loop chlega
//     rem = l % s
//     l = s
//     s = rem
// }
// console.log(l)

// // Add two matrices
// let x = [[12,7,3],
//     [4 ,5,6],
//     [7 ,8,9]]

// let y = [[5,8,1],
// [6,7,3],
// [4,5,9]]

// let result = [[0,0,0],
// [0,0,0],
// [0,0,0]]

// for(let i = 0 ; i < x.length; i++){
//     for(let j = 0 ; i < x[0].length; j++){
//      result[i][j] = x[i][j]+y[i][j]
//     }
// }
// print(result)


// let my_str = "Hello this Is an Example With cased letters"
// let news = my_str.toLowerCase()
// console.log(news.split(' ').sort())
// // [
// //     'an',      'cased',
// //     'example', 'hello',
// //     'is',      'letters',
// //     'this',    'with'
// //   ]

// // Star Pattern questions

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < n; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// // ****
// // ****
// // ****
// // ****
// // ****

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

// *****
// *   *
// *   *
// *   *
// *****

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// *
// **
// ***
// ****
// *****

// reverse of above print
// let n = 15;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if(n-i>=j){
//         string += " ";
//     }else {
//         string += "*";
//     }
//   }
//   string += "\n";
// }
// console.log(string);

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************
// **************
// ***************

// let n = 5;
// let string = "";
// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// *****
// ****
// ***
// **
// *


// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//       if(i === 1 || i === 2 || i === n){
//         string += "*";
//       } else {
//         if(j ===1 || j===i){
//             string += "*";
//         } else{
//             string += " ";
//         }
//       }
//   }
//   string += "\n";
// }
// console.log(string);

// *
// **
// * *
// *  *
// *****


// let n = 10;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if(n-i>=j){
//         string += " ";
//     }else {
//         string += "*";
//     }
//   }
//   for (let j = 1; j < i; j++) {
//         string += "*";
//       }
//   string += "\n";
// }
// console.log(string);

// OR
// let n = 10;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//          *
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************

// let n = 10;
// let string = "";
// // External loop
// for (let i = n; i >= 1; i--) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// *******************
//  *****************
//   ***************
//    *************
//     ***********
//      *********
//       *******
//        *****
//         ***
//          *


// let n = 10;
// let string = "";

// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if(i === 1 || i === n) {
//       string += "*";
//     }
//     else {
//       if(k === 1 || k === 2 * i - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);

//          *
//         * *
//        *   *
//       *     *
//      *       *
//     *         *
//    *           *
//   *             *
//  *               *
// *******************


// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= n - 1; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


// let n = 5;
// let string = "";
// // Upside pyramid
// // upside diamond
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     if (k === 0 || k === 2 * i - 2) {
//       string += "*";
//     }
//     else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }
// // downside diamond
// for (let i = 1; i <= n - 1; i++) {
//     // printing spaces
//     for (let j = 0; j < i; j++) {
//       string += " ";
//     }
//     // printing star
//     for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//       if (k === 1 || k === (n - i) * 2 - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//     string += "\n";
//   }
// console.log(string);

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *


// let n = 5;
// let string = "";
// // External loop
// for (let i = n; i >= 1; i--) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }

// // External loop
// for (let i = 2; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********


// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *