1.
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
// 1 2 3 4 5 6

let n = 6;
let ans = '';

for(let i=1;i<=n;i++){
  for(let j=1;j<=i;j++){
    ans += `${j} `
  }
  ans += '\n'
}

console.log(ans)

2.
// 1 2 3 4 5 6 
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1

let n = 6;
let ans = '';

for(let i=6;i>=1;i--){
  for(let j=1;j<=i;j++){
      ans += `${j} `
  }
  ans += '\n'
}

console.log(ans)

3.
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
// 16 17 18 19 20 21

let n = 6;
let ans = '';

let num = 1
for(let i=1;i<=n;i++){
  for(let j=0;j<i;j++){
    ans += `${num} `
    num++
  }
  ans += '\n'
}

console.log(ans)

4.
// 1 
// 0 1 
// 1 0 1 
// 0 1 0 1 
// 1 0 1 0 1 
// 0 1 0 1 0 1

let n = 6;
let ans = '';

let num = true;
for(let i=1;i<=n;i++){
  for(let j=1;j<=i;j++){
    ans += `${Number(num)} `
    num = !num
  }
  if(i%2 == 0) num = !num
  ans += '\n'
}

console.log(ans)

5.
// ******
// ******
// ******
// ******
// ******
// ******

let n = 6;
let ans = '';

for(let i=1;i<=n;i++){
  for(let j=1;j<=n;j++){
    ans += '*'
  }
  ans += '\n'
}

console.log(ans)

6.
// *
// **
// ***
// ****
// *****
// ******
let n = 6;
let ans = '';

for(let i=1;i<=n;i++){
  for(let j=1;j<=i;j++){
    ans += '*'
  }
  ans += '\n'
}

console.log(ans)

7.
// ******
// *****
// ****
// ***
// **
// *

let n = 6;
let ans = '';

for(let i=1;i<=n;i++){
  for(let j=i;j<=n;j++){
    ans += '*'
  }
  ans += '\n'
}

console.log(ans)

8.
//******
// *****
//  ****
//   ***
//    **
//     *

let n = 6;
let ans = '';

for(let i=0;i<n;i++){
  for(let j=0;j<i;j++){
    ans += ' '
  }
  for(let j=0;j<n-i;j++){
    ans += '*'
  }
  ans += '\n'
}

console.log(ans)

9.
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//* * * * * *

let n = 6;
let ans = '';

for (let i = 1; i <= n; i++) {

  // leading spaces
  for (let s = 1; s <= n - i; s++) {
    ans += ' ';
  }

  // stars with space after each star
  for (let j = 1; j <= i; j++) {
    ans += '* ';
  }

  ans += '\n';
}

console.log(ans);

10.

