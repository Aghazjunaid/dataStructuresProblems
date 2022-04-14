let arr = [1, 1,1,1, 3, 2, 3, 1, 1, 1,3,1,1]
let count = 0;
let reset = 0
for(let i in arr){
    if(arr[i] == 1){
        ++count
    }else{
        if(count>reset) reset = count;
        count = 0
    }
}

console.log(reset) //4