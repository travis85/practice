/**
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 * https://leetcode.com/problems/number-of-1-bits/
*/



/**
 * @param {number} n - a positive integer
 * @return {number}
*/
var hammingWeight = function (n) {
    return n.toString(2).split('').reduce((a,b) => Number(a) + Number(b), 0)
}
console.log(hammingWeight(00000000000000110000001000010000000))