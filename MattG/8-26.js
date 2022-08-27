/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    
    let solution = []
    let i = 0

    while (strs.length > 0) {

        let heldArr = []
        let heldWord = strs.shift()
        heldArr.push(heldWord)

        while (i < strs.length) {
                
            if (compareWords(heldWord, strs[i])) {
                
                heldArr.push(strs[i])
                strs.splice(i, 1)
                
            } 
            i++
        }
            
        i = 0
        solution.push(heldArr)
        heldArr = []  
    }

    return solution
};
console.log(groupAnagrams(["","",""]))//[["bat"],["nat","tan"],["ate","eat","tea"]]
/**
 * 
 * @param {str} hldWord 
 * @param {str} loopedWord 
 * @returns boolean 
 */
function compareWords(hldWord, loopedWord) {
    let sortedHeldWord = hldWord.split('').sort().join('')
    let sortedLoopedWord = loopedWord.split('').sort().join('')
    let heldWordObj = turnToObject(sortedHeldWord)
    let loopedWordObj = turnToObject(sortedLoopedWord)
    if (JSON.stringify(heldWordObj) === JSON.stringify(loopedWordObj)) {
       
       return true
    }
    
    return false
}

function turnToObject(word) {
    let letterCountOject = {}
    for (let letter in word) {
        if (letter in letterCountOject) {
            letterCountOject[word[letter]] += 1
        } else {
            letterCountOject[word[letter]] = 1
        }
    }
    return letterCountOject
}


