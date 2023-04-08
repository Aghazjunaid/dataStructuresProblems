let arr = [1,2,[3,4],[5,6,[7]]]

let flatten = (arr) =>  {
    let data = arr.reduce((acc,cur) => {
        if(Array.isArray(cur)){
            acc = acc.concat(flatten(cur))
        } else {
            acc.push(cur)
        }
        return acc
    },[])
    return data
}

console.log(flatten(arr)) //[1,2,3,4,5,6,7]


const flatten1 = (arr) => {
    let ar = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            ar = ar.concat(flatten(arr[i]))
        }else {
            ar.push(arr[i])
        }
    }
    return ar
}

console.log(flatten1(arr)) //[1,2,3,4,5,6,7]
