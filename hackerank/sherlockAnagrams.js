

function sherlockAndAnagrams(s) {

    const allSubs = getAllSubstrings(s)
    
    function getAllSubstrings(str) {
        let result = [];
        for (let i = 0; i < str.length; i++) {
          for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j))
          }
        }
        return result
    }

    function anagram(str1, str2) {
        const letterCount = {}
      
        for (let i = 0; i < str1.length; i++) {
          const letter = str1[i]
          if (letterCount[letter]) {
            letterCount[letter] += 1
          } else {
            letterCount[letter] = 1
          }
        }
      
        for (let j = 0; j < str2.length; j++) {
          const letter = str2[j]
          if (letterCount[letter]) {
            letterCount[letter] -= 1
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
          if (currentElement.length === arrRest[i].length && anagram(currentElement, arrRest[i]) === true) {
            counter++
          }
        }
       return counter
    }



    let count = 0
    for(let i = 0; i < allSubs.length; i++){
        count += countAnagrams(i, allSubs)
    }

    return count

}
console.log(sherlockAndAnagrams('cdcd'))
console.log(sherlockAndAnagrams('ifailuhkqq'))