/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */
function anagram(str1,str2){
    let obj = {}

    for(let letter in str1){
        if(letter in obj){
            obj[letter] += 1
        } else {
            obj[letter] = 1
        }
    }

    for(let letter in str2){
        if(letter in obj){
            obj[letter] -= 1
        } else {
            return false
        }
    }
    return true
}




function countAnagrams(currentIndex, arr) {
    const currentElement = arr[currentIndex]
    const arrRest = arr.slice(currentIndex + 1)
    let counter = 0
  
    for (let i = 0; i < arrRest.length; i++) {
      if (currentElement.length === arrRest[i].length && anagram(currentElement, arrRest[i])) {
        counter++
      }
    }
  
   return counter
}