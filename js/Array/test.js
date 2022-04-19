let arr = [2, 2, 0, 1,1,2,0,1,2,0];

let l = 0;
let m = 0;
let h = arr.length-1

while(m<=h){
    if(arr[m] == 0){
        [arr[m],arr[l]] = [arr[l],arr[m]]
        m++
        l++
    } else if( arr[m] == 1){
        m++
    } else{
        [arr[h],arr[m]] = [arr[m],arr[h]]
        h--
    }
}

console.log(arr) // [0,0,0,1,1,1,2,2,2,2]
