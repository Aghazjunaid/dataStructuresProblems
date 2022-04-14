let arr = [1, 2, 2, 3, 2, 1]

let count = 0;
let newArr = []
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            ++count;
            newArr.push([i,j])
        }
    }
}
console.log(newArr) //[ [ 0, 5 ], [ 1, 2 ], [ 1, 4 ], [ 2, 4 ] ]
console.log(count) //4
