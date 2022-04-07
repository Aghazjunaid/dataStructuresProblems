let s = "cbacdcbc";
let arr = s.split("")
let alphabets = {
    a:1,
    b:2,
    c:3,
    d:4
}
let opt = new Set([...arr])
console.log(opt.size)

let naz = []
for(let i=0;i<arr.length;i++){
  let obj={}
  for(let j=i;j<arr.length;j++){
    if(!(arr[j] in obj)){
      obj[arr[j]]= true
    }
  }
  let aj = Object.keys(obj).join('')
  if(aj.length === opt.size)   naz.push(aj)
}

let maxmNumber = 0;
let index = -1
for(let i=0;i<naz.length;i++){
    let str = ""
    for(let j=0; j<naz[i].length;j++){
        str += alphabets[naz[i][j]]
    }
    if(str > maxmNumber){
      index = i
    }
}

let result = naz[index]
console.log(result) //acdb