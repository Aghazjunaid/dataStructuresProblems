function checkParanthesis(str){
    

    return true
}


console.log(checkParanthesis('{{([}}')) //false
console.log(checkParanthesis('{([])}')) //true
console.log(checkParanthesis('{{}[]}')) //true
console.log(checkParanthesis('{({}}')) //false
console.log(checkParanthesis('{{}]}]')) //false
console.log(checkParanthesis('}{}]}]')) //false