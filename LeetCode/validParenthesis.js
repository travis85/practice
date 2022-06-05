/**
 * https://leetcode.com/problems/valid-parentheses/
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

*/

/**
 * @param {string} s
 * @return {boolean}
*/
var isValid = function (s) {
    let key = []
    let charObject = {
        '[': ']',
        '{': '}',
        '(': ')'
    }

    for (let i = 0; i < s.length; i++){
        if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
            
            key.push(s[i])
        } else {
            // console.log(charObject[s[i]] )
            if (s[i] !== charObject[key.pop()]) {
                return false
            }
        }
    }
    console.log(key.length)
    return key.length === 0 ? true : false
};
console.log(isValid("{(}{})}"))
//ifclose come before open false 
// must have match
//if nukber dont match false