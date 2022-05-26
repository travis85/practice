//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the 
// value to go outside the signed 32 - bit integer range[-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const low = -2147483648
    const high = 2147483647
    const numReverse = x.toString().split('').reverse().join('')

    if (parseInt(numReverse) > low && parseInt(numReverse) < high) {

        if (numReverse[0] === '0' && x > 0) {
            let numSlice = numReverse.slice(1)
            return Number(numSlice)
        } else if (x < 0) {
            if (numReverse[0] === '0') {
                let numSlice = numReverse.slice(1)
                return 0 - parseInt(numSlice)
            } else {
                return 0 - parseInt(numReverse)
            }
        } else {
            return Number(numReverse)
        }
    } 
    return 0

};
console.log(reverse(120))
console.log(reverse(1534236469))
console.log(reverse(-10))//-1
console.log(reverse(-2147483412))