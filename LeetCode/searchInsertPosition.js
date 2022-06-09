
/**
https://leetcode.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var searchInsert = function (nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target)
    } else {
        nums.push(target)
        nums.sort((a,b) => a - b)
        console.log(nums)
        return nums.indexOf(target)
        
    }
    
};
console.log(searchInsert([3,5,7,9,10], 8))//3
//if nums includes target return index of taget
//nums push target sort() return indexof target