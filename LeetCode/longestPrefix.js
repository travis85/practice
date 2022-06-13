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
    let heldIndex = 0
    let heldLetter = strs[0][0]
    if (strs.length === 1) {
        return strs[0]
    } else {
        if (strs[0] === ''){
            return solution
        }
    }
    while (heldLetter === strs[i][heldIndex]) {
        if (i === strs.length - 1 && heldIndex === strs[i].length) {
            return solution
        } else if (i === strs.length - 1) {
            solution += heldLetter
            i = 0 
            heldIndex++
            heldLetter = strs[i][heldIndex]            
        } 
        i++
    }
    return solution
}
console.log(longestCommonPrefix(["flower","flower","flower","flower"]))//'flower'
console.log(longestCommonPrefix(["a"]))//'a'
//hold each letter in var
//if i === 
