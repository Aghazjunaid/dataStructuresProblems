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

console.log(Object.entries(obj1).length)
const haveSameData = function (obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if (obj1Length === obj2Length) {
        return Object.keys(obj1).every(
            key => obj2.hasOwnProperty(key)
                && obj2[key] === obj1[key]);
    }
    return false;
}
console.log(haveSameData (obj1,obj2)) //true



// var opt = "efnksfbkjsbfkjs"
// // var num = 43536536624
// // console.log(num.length)

// console.log(opt.slice(-4,-1))


// var obj = "naz"
// let res = obj[0].toUpperCase() + obj.slice(1)
// console.log(res) //Naz

let input1Start = 9
let input1End = 12
let input2Start = 11
let input2End = 13

function calculateTime(input1Start,input1End,input2Start,input2End){
  if(input1End < input2Start){
    return "Invalid Time"
  }
  if(input2End <input1End){
    if(input1Start< input2Start){
      return [input2Start,input2End]
    }
  } else if(input2End>input1End && input1Start < input2Start){
    return [input2Start, input1End]
  } 
}


let opt = calculateTime(input1Start,input1End,input2Start,input2End)
console.log(opt)