/**
https://leetcode.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const sSplit = s.split(' ')
    const patternSet = new Set(pattern.split(''))
    const sSet = new Set(s.split(' '))
    
    let object = {}
    if (patternSet.size !== sSet.size) {
        return false
    } else {
        if (pattern.length !== sSplit.length) {
            return false
        }
    }
    for (letter in pattern) {
        let heldLetter = pattern[letter]
        let heldWord = sSplit[letter]
        if (!( heldLetter in object)) {
            object[heldLetter] = heldWord
        } else if (heldLetter in object ) {
            if (object[heldLetter] != heldWord) {
                return false
            }
        }
    }
    return true
    

};
console.log(wordPattern( "abba","dog cat cat dog"))
// make object 
// if pattern leangth !== s length return false
//if pattern[i] ! in obj set as key value pair
//if pattern is there then check if value === s[i]
// if not return false
// if make all the way thru return true