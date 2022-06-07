
/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++){
        while (nums[i] === nums[i+1]) {
            nums.splice(i, 1)
            
        }
    }
    return nums.length
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([1,1,1]))

//if num i = i+1 repalce with null