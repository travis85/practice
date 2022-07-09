
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
// var lengthOfLongestSubstring = function (s) {
//     let solution = 0

//     if (s[0] === ' ' || s.length === 1) {
//         return 1
//     } else {
//         if (s[0] === '') {
//             return 0
//         }
//     }

//     let uniqueArr = [s[0]]

//     for (let i = 1; i < s.length ; i++){


//         // for (let j = i + 1; j < s.length + 1; j++){

//             if (!uniqueArr.includes(s[i])) {
//                     uniqueArr.push(s[i])
//                     console.log(1,i,uniqueArr)

                    
                
//                 if (uniqueArr.length === s.length) {
//                     solution = uniqueArr.length
//                     console.log(2,i,uniqueArr)

//                 }
//             } 
//             if (solution < uniqueArr.length) {
//                 console.log(3,i,uniqueArr)

//                 solution = uniqueArr.length
//             } else {
//                 uniqueArr = [s[i]]
//                 console.log(4,i,uniqueArr)


//             }
            

//         // }
    
//     }
//     return solution
// };
// console.log(lengthOfLongestSubstring("abcabcbb"))//3
// console.log(lengthOfLongestSubstring("bbbbb"))//1
// console.log(lengthOfLongestSubstring("pwwkew"))//3
// console.log(lengthOfLongestSubstring("au"))//2
// console.log(lengthOfLongestSubstring("aab"))//2
// console.log(lengthOfLongestSubstring(""))//0
// console.log(lengthOfLongestSubstring("jbpnbwwd"))//4


//push onto newArr until i reaches numRows
//then push 