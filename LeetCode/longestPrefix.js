// https://leetcode.com/problems/longest-common-prefix/
/**
 * Write a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, return an empty string "".    
*/

/**
 * @param {string[]} strs
 * @return {string}
*/
var longestCommonPrefix = function (strs) {
    let solution = ''
    
    let i = 0
    let j = 0
    let p = 0
    let prefix = strs[0].split('')
    if (strs[0] === '') {
        return ''
    } else {
        if (strs.length === 1) {
           return strs[0]
       }
    }
    while (i < strs.length) {
        if (strs[i][j] !== prefix[p]) {
            break

        } else if (i === strs.length-1 && j === strs[i].length-1) {
            return strs[0]
        } else if (strs[i][j] === prefix[p] && i === strs.length-1 ) {
            solution += strs[i][j]
            i = 0
            j++
            p++
        } else {
            if (strs[i][j] === prefix[p]) {
                i++
            }
        }
        
    }
    return solution 
};
console.log(longestCommonPrefix(["flower","flower","flower","flower"]))//'fl'
console.log(longestCommonPrefix(["ab", "a"]))//'fl'

// console.log(longestCommonPrefix(["dog", "racecar", "car"]))//''

//loop and set var to a letter 
//continue adding to that var if remains true