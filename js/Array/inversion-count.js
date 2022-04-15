let arr = [8,4,2,1]
let count = 0;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            count++
            console.log(arr[i],arr[j])
        }
    }
}
console.log(count) //6

// 8 4
// 8 2
// 8 1
// 4 2
// 4 1
// 2 1