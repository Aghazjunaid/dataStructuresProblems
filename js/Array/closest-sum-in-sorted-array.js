// let arr = [10, 22, 28, 29, 30, 40]
// let k = 54;

// let diff = Infinity

// let m,n

// for(let i =0 ;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         let cal = arr[i]+arr[j]
//         if(diff> cal-k){
//             diff = Math.abs(cal-k)
//             m = arr[i]
//             n=arr[j]
//         }
//     }
// }

// console.log(m,n) //22 30


// 2(Best Approach)
let arr = [10, 22, 28, 29, 30, 40]
let k = 54;

let l = 0;
let r = arr.length-1
let diff = Infinity

let m,n
while(l<r){                                                                                                                                        
    let cal = arr[l]+arr[r]
    if(diff > cal-k){
        diff = Math.abs(cal-k)
        m = arr[l]
        n=arr[r]
    }
    if(cal>k){
        r--
    } else if(cal<k){
        l++
    }else{
        break
    }
}
console.log(m,n) //22 30


