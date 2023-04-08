var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let result = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 1){
            count++
            if(count > result) result = count
        } else {
            if(count > result) result = count
            count = 0
        }
    }
    return result
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])) //3