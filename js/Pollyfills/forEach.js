const names = ["ali", "hamza", "jack"];
function consoleFunc(x) {
   console.log(x);
}
names.forEach(consoleFunc);
// console
// ali hamza jack


Array.prototype.show = function (){
    return this
}
console.log(names.show()) //[ 'ali', 'hamza', 'jack' ]


Array.prototype.myForEach = function (cb){
    for(let i=0; i<this.length;i++){
        cb(this[i])
    }
}

names.myForEach(consoleFunc)

names.myForEach((ele) => {
    console.log(ele+1)
})