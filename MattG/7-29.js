

var longestPalindrome = function (s) {
    let palidrome = ''
    let maxPalindrome = ''
    let numberToSliceBy = s.length / 2
    let startOfString = s.slice(0, numberToSliceBy)
    let endOfString = s.slice(numberToSliceBy).split('').reverse().join('')
    
    if (endOfString.length % 2 !== 0) {
        endOfString = endOfString.split('')
        endOfString.pop()
        endOfString = endOfString.join('')
    }

    let i = 0
     
    while (i < startOfString.length) {
        if (startOfString[i] === endOfString[i]) {
            palidrome += startOfString[i]
            if (palidrome.length > maxPalindrome.length) {
                maxPalindrome = palidrome
            }

        } else {
            
            if (palidrome.length > maxPalindrome.length) {
                maxPalindrome = palidrome
                palidrome = ''
            }
        }
        i++
    }
    
    return maxPalindrome
       
    
};
console.log(longestPalindrome("babad"))
/*    
//empty str 
//longest palidrome                        '122020222'
take str.length / 2 
//set 2 vars that splice the front half and 2nd half
//take 2nd str and reverse
//itereate and compare
    input str
    return boolean 
*/
function isPalidrome(str){
    let reverse = str.split('').reverse().join('')
    if(str === reverse){
        return true
    } else {
        return false
    }
}
