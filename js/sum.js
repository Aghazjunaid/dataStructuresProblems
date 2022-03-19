const addString = (a, b) => {

    let big = Math.max(a.length,b.length)

    let carry = 0;
    let sum = []
    for(let j= 0; j<big; j++){
      let a1 = a[a.length-1-j] || 0
      let b1 = b[b.length-1-j] || 0

      let add = parseInt(a1) + parseInt(b1) + parseInt(carry)
      let addStr = String(add)
      sum.unshift(addStr[addStr.length-1])
      addStr.length > 1 ? carry = addStr[0] : carry = '0'
    }
    sum = sum.join('')
    if(carry != 0){
      sum = carry + sum
    }
    return sum
};



console.log(addString(
    "12345",
    "7"
  )) // 12352

  console.log(addString("1234", "3")) //1237
console.log(addString(
  "12345512345678923456789345678945678456745674567456745673456745679",
  "355456784567845674567"
))

console.log(addString(
  "123455123456789234564567845674567894567890845678456783456745674567789345678945678456745674567456745673456745679",
  "3554567845678456745674567456785678456784567845678456784567845674567"
))