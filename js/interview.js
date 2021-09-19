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


// let myCar = [ 2, 'cherry condition', 'purchased 1997']
// let newCar = myCar.slice(0, 2)
// console.log(newCar) //[ 2, 'cherry condition' ]


// let arr = [1,10,15,23,12,19]
// console.log   (arr.every(value => value< 30)) //true
// console.log(arr.filter(value => value> 10)) //[ 15, 23, 12, 19 ]
// console.log(arr.find(value => value> 10)) //15


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]


// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
//   ];
  
//   function isCherries(fruit) {
//     return fruit.name === 'cherries';
//   }
  
//   console.log(inventory.find(isCherries));
  // { name: 'cherries', quantity: 5 }


//   let kvArray = [{key: 1, value: 10},
//     {key: 2, value: 20},
//     {key: 3, value: 30}]

// let reformattedArray = kvArray.map(obj => {
// let rObj = {}
// rObj[obj.key] = obj.value
// return rObj
// })
// // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// // kvArray is still:
// // [{key: 1, value: 10},
// //  {key: 2, value: 20},
// //  {key: 3, value: 30}]


// let arr = [{x: 1}, {x: 2}, {x: 3}]
// let ans = arr.reduce((prev,curr)=> {
//     prev = prev + curr.x
//     return prev
// },0)
// console.log(ans) // 6


// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
// let ans = names.reduce((acc,curr) =>{
//     if(acc[curr]){
//         acc[curr] += 1
//     }else{
//         acc[curr] = 1
//     }
//     return acc
// }, {})
// console.log(ans) //{ Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }


// const add = {
//     a: {value:1},
//     b: {value:2},
//     c: {value:3}
//   }
  
//   const total = Object.values(add).reduce((t, {value}) => t + value, 0)
  
//   console.log(total) // 6


// const add = {
//     a: 1,
//     b: 2,
//     c: 3
//   }
  
//   const total = Object.values(add).reduce((t, n) => t + n)
  
//   console.log(total) // 6


// const posts = [
//     {id: 1, category: "frontend", title: "All About That Sass"},
//     {id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips"},
//     {id: 3, category: "frontend", title: "Sanitizing HTML: Going antibactirial on XSS attacks"}
// ];

// const categoryPosts = posts.reduce((acc, post) => {
//     let {id, category} = post;
//     return {...acc, [category]: [...(acc[category] || []), id]};
// }, {});
// console.log(categoryPosts) //{ frontend: [ 1, 3 ], backend: [ 2 ] }


// var wizards = [
//     {
//       name: 'Harry Potter',
//       house: 'Gryfindor'
//     },
//     {
//       name: 'Cedric Diggory',
//       house: 'Hufflepuff'
//     },
//     {
//       name: 'Tonks',
//       house: 'Hufflepuff'
//     },
//     {
//       name: 'Ronald Weasley',
//       house: 'Gryfindor'
//     },
//     {
//       name: 'Hermione Granger',
//       house: 'Gryfindor'
//     }
//   ];

// let ans = wizards.reduce((acc, curr) =>{
//     if(curr.house == 'Gryfindor'){
//         acc.push(curr.name)
//     }
//     return acc
// }, [])
// console.log(ans) //[ 'Harry Potter', 'Ronald Weasley', 'Hermione Granger' ]


// let people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 },
//     { name: 'Aghaz', age: 22 }
// ];

// let groupByAge = {}
// for(let obj of people){
//     if(groupByAge[obj.age]){
//         groupByAge[obj.age].push(obj.name)
//     } else {
//         groupByAge[obj.age] = [obj.name]
//     }
// }
// console.log(groupByAge) //{ '20': [ 'Max', 'Jane' ], '21': [ 'Alice' ], '22': [ 'Aghaz' ] }
//=========================OR============================================
// let ans = people.reduce((acc,curr) => {
//     if(acc[curr.age]){
//         acc[curr.age].push(curr.name)
//     } else {
//         acc[curr.age] = [curr.name]
//     }
//     return acc
// },{})

// console.log(ans) //{ '20': [ 'Max', 'Jane' ], '21': [ 'Alice' ], '22': [ 'Aghaz' ] }


// function modifyArray(arr, callback) {
//     // do something to arr here
//     arr.push(100);
//     // then execute the callback function that was passed
//     callback();
//   }
  
//   var arr = [1, 2, 3, 4, 5];
  
//   modifyArray(arr, function() {
//     console.log("array has been modified", arr); //array has been modified [ 1, 2, 3, 4, 5, 100 ]
// });


// function modifyArray(arr, callback) {
//     // do something to arr here
//     let sum = arr[0]+arr[1]
//     // then execute the callback function that was passed
//     callback(sum);
//   }
  
//   var arr = [1, 2];
  
//   modifyArray(arr, function(sum) {
//     console.log("sum is", sum); // sum is 3
// });


// closure example
// function createBase(base){
//     return function addSix(num){
//         return base + num
//     }
// }
// var ad = createBase(2)
// console.log(ad(6)) //8
// console.log(ad(4)) //6


// //======================================Promise example===================================
// var promise = new Promise(function(resolve, reject) {
//     let opt = Math.floor(100000 * Math.random()+900000)
//     console.log(opt)
//     if(opt % 2 == 0) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
    
//   promise.
//       then(function () {
//           console.log('Even number');
//       }).
//       catch(function () {
//           console.log('Odd number');
//       });
// // 949588
// // Even number

// var promise = new Promise(function(resolve, reject) {
//     let opt = Math.floor(100000 * Math.random()+900000)
//     console.log(opt)
//     if(opt % 2 == 0) {
//       resolve("Even");
//     } else {
//       reject("Odd");
//     }
//   });

//   async function numb(){
//     try {
//         var doc = await promise
//         console.log(doc)
//     } catch (error) {
//         console.log(error)
//     }
// }
// numb()
    
//   promise.
//       then(function (msg) {
//           console.log(msg);
//       }).
//       catch(function (err) {
//           console.log(err);
//       });
// // 961509
// // Odd







