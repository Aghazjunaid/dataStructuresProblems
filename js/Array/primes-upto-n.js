let k = 13

i=2
while(i<=k){
    let booleanValue = isPrime(i)
    if(booleanValue) console.log(i)
    i++
}

function isPrime(n){
    for(let i=2; i<n;i++){
        if(n%i === 0) return false
    }
    return true
}


// 2 3 5 7 11 13