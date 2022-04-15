// let arr = [9, 4, 20, 3, 10, 5]
// let k = 33;

// let count = 0;
// for(let i =0;i<arr.length;i++){
//     let sum = arr[i]
//     for(let j=i+1;j<arr.length;j++){
//         sum += arr[j]
//         if(sum == k){
//             count++
//         }
//     }
// }

// console.log(count) //2


// 2(Best Approach)
let arr = [10, 2, -2, -20, 10]
let sum = -10;

// HashMap to store number of subarrays
// starting from index zero having
// particular value of sum.
let prevSum = new Map();
let res = 0;

// Sum of elements so far.
let currsum = 0;
for (let i = 0; i < arr.length; i++)
{

    // Add current element to sum so far.
    currsum += arr[i];

    // If currsum is equal to desired sum,
    // then a new subarray is found. So
    // increase count of subarrays.
    if (currsum == sum)
        res++;

    // currsum exceeds given sum by currsum
    //  - sum. Find number of subarrays having
    // this sum and exclude those subarrays
    // from currsum by increasing count by
    // same amount.
    if (prevSum.has(currsum - sum))
        res += prevSum.get(currsum - sum);

    // Add currsum value to count of
    // different values of sum.
    let count = prevSum.get(currsum);
    if (count == null)
        prevSum.set(currsum, 1);
    else
        prevSum.set(currsum, count + 1);
}

console.log(res)
