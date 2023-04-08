

function convert(str){
    let value = str.split(" ")[0]
    let time = str.split(" ")[1]
    if(time == 'AM'){
        return value
    }
    let hr = parseInt(value.split(":")[0]) + 12
    return `${hr}:${value.split(":")[1]}`
}

console.log(convert("10:00 PM"))
console.log(convert("10:00 AM"))
console.log(convert("11:35 PM"))

// 22:00
// 10:00
// 23:35