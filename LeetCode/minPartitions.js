//start by multiplying all 1's 
//start at 7 digits
var minPartitions = function (n) {
    let max = 0
    let nums = '0123456789'

    for (let i = 0; i < nums.length; i++){
        if (n.includes(nums[i])) {
            max = parseInt(nums[i])
        }
    }
    return max
};
console.log(minPartitions("27346209830709182346"))//9