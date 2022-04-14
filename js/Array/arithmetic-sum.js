let arr = [9, 13, 5, 15, 7, 11]

let sortedArr = arr.sort((a,b) => a-b)
let diff = sortedArr[1]-sortedArr[0]
let ans = true
for(let i in sortedArr){
    if(i>0){
        if(sortedArr[i]-sortedArr[i-1] !== diff){
           ans = false
        }
    }
}
console.log(ans) //true