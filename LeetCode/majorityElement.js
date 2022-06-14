/**
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
*/
var majorityElement = function(nums) {
    let countedNums = nums.reduce((prev, nxt) => { prev[nxt] = (prev[nxt] + 1) || 1; return prev; }, {})
    let held = 0
    let max 
    for (let num in countedNums) {
       
        if (countedNums[num] > held) {
            held = countedNums[num]
            max = num
        }
    }
    return max
};
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([3,2,3]))