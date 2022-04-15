// 1 Naive Approach
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

// 2(Optimized approach)
let  obj= {};
for(let i in str){
    if(str[i] in obj){
        ++obj[str[i]]
    }else{
        if(Object.keys(obj).length>0){
            newStr += `${Object.keys(obj)}${Object.values(obj)}`
            obj = {}
        }
        obj[str[i]] = 1
    }
    if(i==(str.length-1)){
        newStr += `${Object.keys(obj)}${Object.values(obj)}`
    }
}
console.log(newStr) //w4a3d1e1x6y1w3




