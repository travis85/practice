/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = 0
    let heldCount = nums[0]
    if (nums.length === 1) {
        return nums[0]
    } 
    if (nums.length === 2 && nums[0] < 0 || nums.length === 2 && nums[1] < 0) {
        return Math.max(...nums)
    }
    
    let i = 0 
    while (i < nums.length) {
        let combined = nums[i] + nums[i + 1]

        while()
    }

    return max
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))//6
// console.log(maxSubArray([5, 4, -1, 7, 8]))//23
// console.log(maxSubArray([-2, 1]))//1
console.log(maxSubArray([8,-19,5,-4,20]))//21

//if heldCount + num[i] > held ... held += num i
//else if max < heldCount... max = HeldCount
//heldcount = 0