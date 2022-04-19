let str = "substring";
let vowels = ['a', 'e', 'i', 'o', 'u']
let arr = []
let k = 2
for(let i = 0; i< str.length+1-k; i++){
    let count = 0;
    let max = 0
    for(let j =i; j<k+i;j++){
        count++
        if(vowels.includes(str[j])) max++
        if(count == k) break
    }
    arr.push(max)
}
console.log(arr) // [1,1,0,0,0,1,1,0]