// 1
function isAnagram(str1,str2){

    if(str1.length !== str2.length){
        return "Not Anagram"
    }else if(typeof(str1) !== "string" || typeof(str2) !== "string"){
        return "invalid string"
    }

    str1 = str1.split("")
    str2 = str2.split("")
    for(let i=0; i<str1.length;i++){
        for(let j=0; j<str2.length;j++){
            if(str1[i] === str2[j]){
                str1.splice(i--,1)
                str2.splice(j--,1)
            }
        }
    }
    if(str1.length === 0 && str2.length=== 0){
        return "Anagram"
    }
    return "Not Anagram"
}

let aj = isAnagram("nazj","zatn")
console.log(aj)

// 2
function isAnagram(str1,str2){

    if(str1.length !== str2.length){
        return "Not Anagram"
    }else if(typeof(str1) !== "string" || typeof(str2) !== "string"){
        return "invalid string"
    }

    str1 = str1.split("")
    str2 = str2.split("")
    for(let i=0; i<str1.length;i++){
        for(let j=0; j<str2.length;j++){
            if(str1[i] === str2[j]){
                str2.splice(j--,1)
            }
        }
        if(str1.length === str2.length){
            return ".Not Anagram"
        }
    }
    if(str2.length=== 0){
        return "Anagram"
    }
    return "Not Anagram"
}

let aj = isAnagram("naz","zan")
console.log(aj)


// 2- What is the largest palindrome of a string
// 3- Fastes way to compare two element elements & find the matching one
// ex- [1,2,3,4,5,6,7], [1,2,3,4,5]