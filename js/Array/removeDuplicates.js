const input1 = [1, 2, 4, 5, 6, 1, 3, 7, 9, 10, 2, 5];

const findDuplicates = (input1) => {
  if (!Array.isArray(input1)) {
    return "Please enter a valid array";
  }

  for(let i=0; i<input1.length;i++){
      for(let j=i+1; j<input1.length;j++){
        if(input1[i] === input1[j]){
            input1.splice(j,1)
            j--
            i--
        }
      }
  }
  return input1
};

console.log(findDuplicates(input1)); 
// [
//     1, 2, 4,  5, 6,
//     3, 7, 9, 10
// ]


// 2
a = [1, 2, 1,2,3]
uniqueArray = a.filter(function(item, pos) {
    console.log(a.indexOf(item),pos)
    return a.indexOf(item) == pos;
})
console.log(uniqueArray)

// Basically, we iterate over the array and, for each element, check if the first position of this 
// element in the array is equal to the current position. Obviously, these two positions are different for duplicate elements.