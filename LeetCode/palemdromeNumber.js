// https://leetcode.com/problems/palindrome-number/


/**
 * Given an integer x, return true if x is palindrome integer.

    An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.
*/

/**
 * @param {number} x
 * @return {boolean}
*/
var isPalindrome = function(x) {
    const xReverse = x.toString().split('').reverse().join('')
    const toNum = Number(xReverse)
    
    if (toNum === x) {
        return true
    }
    return false
};
console.log(isPalindrome(121))
console.log(isPalindrome(123))

//turn toString then reverse then turn back to num
//if reverse  === x return true else return false