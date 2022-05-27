/**
 * 
 * Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

*/



/**
 * @param {number} num
 * @return {string}
*/
var intToRoman = function(num) {
    let solution = []
    const firstNumeral = () => {
        return num.toString().split('').map(num => Number(num))[0]
    }

    while (num > 0) {
        if (num >= 1000) {
            solution.push('M')
            num -= 1000
        } else if (firstNumeral() + 1 === 5 || firstNumeral() + 1 === 10) {
            if (num > 500) {
                solution.push('CM')
                num -= 900
            } else if (num > 100) {
                solution.push('CD')
                num -= 400
            } else if (num > 50) {
                solution.push('XC')
                num -= 90
            } else if (num > 10) {
                solution.push('XL')
                num -= 40
            } else if (num > 5) {
                solution.push("IX")
                num -= 9
            } else {
                solution.push('IV')
                num -= 4
            }
        } else if (num >= 500) {
            solution.push('D')
            num -= 500
        } else if (num >= 100) {
            solution.push('C')
            num -= 100
        } else if (num >= 50) {
            solution.push('L')
            num -= 50
        } else if (num >= 10) {
            solution.push('X')
            num -= 10
        } else if (num >= 5) {
            solution.push('V')
            num -= 5
        } else {
            solution.push('I')
            num--
        }
        
    }
    return solution.join('')
};
console.log(intToRoman(3))
//place numeral value into object
//if num > M then add M until....
//if next num plus 1 === 10 || 5