
//set counter && a most
//if i != i+1 count++
//else most = counter 
//counter = 0

/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} 
 * @returns {int}
 */

function lengthOfLongestSubstring(s) {
    let i = 0
    let count = 0
    let heldString = ''
    
    while (i < s.length) {
        if (!heldString.includes(s[i])) {
            heldString += s[i]
            if (count < heldString.length) {
                count = heldString.length
            }
        } else {
            let indexOfDuplicate = Array.from(heldString).findIndex((letter) => letter === s[i])
            heldString = heldString.slice(indexOfDuplicate+1)
            heldString += s[i]
        }
        i++
    }
    return count
    
    
}
console.log(lengthOfLongestSubstring("ohvhjdml"))//6
console.log(lengthOfLongestSubstring("bbbbb"))//1
 console.log(lengthOfLongestSubstring("pwwkew"))//3
console.log(lengthOfLongestSubstring("au"))//2
console.log(lengthOfLongestSubstring("aab"))//2
console.log(lengthOfLongestSubstring("dvdf"))//3
console.log(lengthOfLongestSubstring("jbpnbwwd"))//4


//push onto newArr until i reaches numRows
//then push 