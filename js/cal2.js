// /**
//  * @description - Method to perform calculation based on params
//  * @param {Number} a
//  * @param {Number} b
//  * @param {Function} callback
//  * @returns {Number}
//  */
// function calculator(a, b, callback) {
//     if(isNaN(a) == false && isNaN(b) == false){
//         return callback(a, b);
//     }else {
//         return "Invalid input"
//     }
// }
  
//   /**
//    * @description Function to add two value
//    * @param {Number} a
//    * @param {Number} b
//    * @returns {Number}
//    */
//   function add(a, b) {
//     return a + b;
//   }
  
//   /**
//    * @description Function to Multiply two value
//    * @param {Number} a
//    * @param {Number} b
//    * @returns {Number}
//    */
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   /**
//    * @description Function to Divide two value
//    * @param {*} a
//    * @param {*} b
//    */
//   function divide(a, b) {
//     return a / b;
//   }
  
//   /**
//    * @description Function to Subtract two value
//    * @param {*} a
//    * @param {*} b
//    */
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   console.log("Add: ", calculator("1", 2, add)); // 3
//   console.log("Multiply: ", calculator(3, 4, multiply)); //12
//   console.log("Divide: ", calculator(4, 2, divide)); // 2
//   console.log("Subtract: ", calculator(50, 3, subtract)); //47
// //   console.log("Subtract: ", calculator(50, 3, aj)); //47


let arr = [1,2,3,4,2,3,5,6,2,3,1,4]
let doc = {}
for(let i = 0; i < arr.length; i++){
    if (doc[arr[i]]){
        doc[arr[i]] = ++doc[arr[i]]
    } else {
        doc[arr[i]] = 1
    }
}
console.log(doc) //{ '1': 2, '2': 3, '3': 3, '4': 2, '5': 1, '6': 1 }

for(let j of Object.keys(doc)){
    if (doc[j]> 1){
        console.log("Repeated number is "+ j +" and is repated "+ doc[j] +" times")
    }
}

