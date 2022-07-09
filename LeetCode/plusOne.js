/**
https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 * decrimnet if = 9 replace with 0 add 1 to the next
 */
var plusOne = function (digits) {
    digits.reverse()
        let newArr = []  

    if (digits.length === 1) {
       
        let onlyOne = digits[0] + 1
        let toString = JSON.stringify(onlyOne).split('')
        return toString.map( num => Number(num))
    }
   
    for (let i = 0 ; i > digits.length; i++){
         
    
        if (digits[i] === 9) {
            digits[i -1] = 1
            newArr.push(0)

            
            
        } else if (i === digits.length-1) { 
            newArr.unshift(digits[i]+1)
        } else {
            newArr.unshift(digits[i])
        }

    }
    return newArr
}
    
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([9]))
console.log(plusOne([9, 9]))
console.log(plusOne([1,2,3]))