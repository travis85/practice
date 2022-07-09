//  Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//
var convert = function (s, numRows) {
    let newArr = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        newArr[i] = new Array(1); // make each element an array
    }
    if (numRows === 1) {
        return s
    }
    let i = 0 //string
    let j = 0 //arrs
    let up = true
    while (i < s.length) {
        newArr[j].push(s[i])
       
        if (j === numRows - 1) {
            up = false
        } else {
            if (j === 0) {
                up = true
            }
        }
        if (up === true) {
            j++
        } else {
            j--
        }
        i++
    } 
    return newArr.flat().join('')
}
// convert("PAYPALISHIRING", 3)
console.log(convert('AB',1))
