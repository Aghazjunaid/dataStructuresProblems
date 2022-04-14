let str = "wwwwaaadexxxxxxywww"
let newStr = ""
let i = 0;
while(i<str.length){
    let count = 0
    for(let j=i;j<str.length;j++){
        if(str[i] == str[j]){
            ++count
        }else{
            break
        }
    }
    newStr += str[i]+count
    if(count>0){
        i += count
    }else{
        i++
    }
}
console.log(newStr) //w4a3d1e1x6y1w3