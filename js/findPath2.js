let obj ={
    a : {
        b:2,
        c:{
            e:5,
            f:6
        },
        g:3
    },
    d: 4
}

const pathData = []
const value = 3

function path(obj){
    for(let i in obj){
        if(typeof obj[i] === "object"){
            pathData.push(i)
            path(obj[i])
        }
        if(obj[i] == value) pathData.push(i)
    }
}
path(obj)
console.log(pathData)
