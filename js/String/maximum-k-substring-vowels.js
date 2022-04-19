let str = "substring";
let vowels = ['a', 'e', 'i', 'o', 'u']
let arr = []
let k = 2

let count = 0; 
for(let i=0;i<k;i++){
    if(vowels.includes(str[i])) count++
}
arr.push(count)

let newStr = ''
for(let i=k; i<str.length;i++){
    count = count - Number(vowels.includes(str[i-k])) + Number(vowels.includes(str[i]))
    arr.push(count)
}

console.log(arr) // [1,1,0,0,0,1,1,0]

console.log(Math.max(...arr)) // 1