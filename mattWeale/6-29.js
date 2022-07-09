/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const digitObject = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','k'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    }


    const digitsSplit = digits.split('').map((number) => Number(number))
    let possibleDigits = [] // array of arrays 
    for (let i = 0; i < digitsSplit.length; i++){
        let current = digitsSplit[i]
        possibleDigits.push(digitObject[current])
    }

    let allCombinations = []
    let heldIndex = 0
    let i = heldIndex
    let j = 0 //held arr
    let combo = ''

    while (heldIndex < possibleDigits[0].length) {
        if (i === possibleDigits.length-1  && j === possibleDigits[i].length-1 ) {
        console.log(allCombinations,combo,1)

            combo += possibleDigits[i][j]
            heldIndex++
            i = heldIndex
            j = 0
        }  else if (i === possibleDigits.length-1) {
            combo += possibleDigits[i][j]
            i = heldIndex
            j++
            
        } else if (j === possibleDigits[i].length) {

            combo += possibleDigits[i][j]
            i++
            j = 0
        } else {

            combo += possibleDigits[i][j]
            i++
        }
        
        if (combo.length === possibleDigits.length) {
            allCombinations.push(combo)
            
            combo = ''
        }

    }

    return allCombinations
};
console.log(letterCombinations('234'))
//order of number matters
//9 wxyz
//7 pqrs
//['']
//'2345'
{
    
}
// [adg,aeg,afg,aeh,aei,bdg,beg]
// [0,0,0], [0,1,0], [0,2,0], [0,1,1], [0,1,2],[1,0,0],[1,1,0],
// set up empty arr
//make object {number: [letters val]}
// hold onto 
//  

