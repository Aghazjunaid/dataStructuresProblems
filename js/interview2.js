// let str = "AghAz"
// console.log(str.toLowerCase()) //aghaz

// //Compare two objects in js
// const obj1 = {
//     name: 'Aghaz',
//     age: 21
// };

// const obj2 = {
//     age: 21,
//     name: 'Aghaz',
// };

// console.log(JSON.stringify(obj1)===JSON.stringify(obj2)) //false

// console.log(Object.entries(obj1).length)
// const haveSameData = function (obj1, obj2) {
//     const obj1Length = Object.keys(obj1).length;
//     const obj2Length = Object.keys(obj2).length;

//     if (obj1Length === obj2Length) {
//         return Object.keys(obj1).every(
//             key => obj2.hasOwnProperty(key)
//                 && obj2[key] === obj1[key]);
//     }
//     return false;
// }
// console.log(haveSameData (obj1,obj2)) //true
