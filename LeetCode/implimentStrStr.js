/**
 * https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const needleToRegex = new RegExp(needle) 
    if (haystack === '') {
        return 0
    } else if (haystack.length === 1) {
        return 0
    } else if (haystack === needle) { 
        return 0
    }else {
        if (needle.length === 1 && haystack.includes(needle[0])) {
            return haystack.indexOf(needle[0])
        }
    }
    let i = 0
    let j = 0
    let heldCount = 0
    if (haystack.match(needleToRegex)) {
        while (i < haystack.length) {
            
            
            if (haystack[i] === needle[j]) {
               
                i++
                j++
                
            } else {
                heldCount++
                i = heldCount
                
                j = 0
            }
            if (j === needle.length) {
                
                return heldCount
            }
            
        }  
    } 
    return -1
};
console.log(strStr("mississippi", 'issip'))//4
console.log(strStr("mississippi", 'issi'))//1
console.log(strStr("mississippi", 'pi'))//9


//ifhaystack = '' return 0
//make needle regex
// if true return index of needle[0]
// if false return -1
