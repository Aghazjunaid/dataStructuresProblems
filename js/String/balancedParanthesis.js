// 3. Validate balanced parentheses


// Write a function which takes only parentheses (curly {}, square []or round () ). It should check that all parentheses in provided string is balanced or not. Simply it should check if there’s an opening parentheses then it should have closing parentheses.

// First input: {[({})]}

// First output: true

// Second input: {[({})}

// Second output: false


function checkParanthesis(str){
    let arr = str.split('')
    if(arr.length % 2 !== 0) return false
    
    let arr1 = ['(','{','[']
    let stackArray = []
    for(let i=0; i< arr.length; i++ ){
        if(arr1.includes(arr[i])){
            stackArray.push(arr[i])
        }

        if(stackArray.length == 0) return false

        if(arr[i] === ']'){
            let removeElement = stackArray.pop()
            if(removeElement == '(' || removeElement == '{') return false
        }else if(arr[i] === '}'){
            let removeElement = stackArray.pop()
            if(removeElement == '(' || removeElement == '[') return false
        }else if(arr[i] === ')'){
            let removeElement = stackArray.pop()
            if(removeElement == '{' || removeElement == '[') return false
        }
    }

    if(stackArray.length !== 0) return false

    return true
}


console.log(checkParanthesis('{{([}}')) //false
console.log(checkParanthesis('{([])}')) //true
console.log(checkParanthesis('{{}[]}')) //true
console.log(checkParanthesis('{({}}')) //false
console.log(checkParanthesis('{{}]}]')) //false
console.log(checkParanthesis('}{}]}]')) //false