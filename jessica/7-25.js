/**
Write a function that takes as arguments two strings: pattern and input. Return whether or not the words in input match the pattern of the characters in pattern.
Jessica McKellar (she/her) to Everyone (2:14 PM)
Example 1:

| `pattern: 'abba'`            |
| ---------------------------- |
| `input: 'red blue blue red'` |
| `result: True`               |

Example 2:

| `pattern: 'abcabc'`                      |
| ---------------------------------------- |
| `Input: 'red blue green red blue green'` |
| `result: True`                           |

Example 3:

| `pattern: 'abba'`             |
| ----------------------------- |
| `Input: 'red blue green red'` |
| `result: False`               |
 * 
    *turn pattern to array 
   *if letter is not in object push (a as key) and input (index as value)
  *if letter is in object then check to see if the input index is ===
 * if not return false
*/

/**
 * takes 2 strings and returns true if pattern matches
*/
function patternMatch(input, pattern) {
    let patternArr = pattern.split('')
    let inputArr = input.split(' ')
    let comparisonObject = {}

    if (inputArr.length != patternArr.length) {
        return false
    }
    for (let index in inputArr) {
        
        if (!(inputArr[index] in comparisonObject)) {
            comparisonObject[inputArr[index]] = patternArr[index]
            
        } else if(inputArr[index] in comparisonObject){
            if (comparisonObject[inputArr[index]] !== patternArr[index]) {
                return false
            }
        }
    }
    return true

    
}
// console.log(patternMatch('red blue blue red', 'abba'))
console.log(patternMatch('red blue blue red red','abbba'))
