/**
 * https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
 * The goal of this exercise is to convert a string to a new string where each character in the new string is
 *  "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
 * Ignore capitalization when determining if a character is a duplicate.
 */

function duplicateEncode(word) {
    let wordUpper = word.toUpperCase()
    let countedObject = {}
    let result = ''
    
    for (let letter in wordUpper) {
        let eachLetter = wordUpper[letter]
        
        if (eachLetter in countedObject) {
            countedObject[eachLetter] += 1
        } else {
            countedObject[eachLetter] = 1
        }
    }

    for (let i = 0; i < wordUpper.length; i++){
        if (countedObject[wordUpper[i]] > 1) {
            result += ')'
        } else {
            result += '('
        }
    }
    
  return result

}
console.log(duplicateEncode("(( @"))//()()()
//to uppercases
//create object that keeps count
//if value is more than 1 push ) bracket 
//else open( brackeet
/**
 *  for (let letter in countedObject) {
        if (countedObject[letter] > 1) {
            result += ')'
        } else {
            result += '('
        }
    }
 */