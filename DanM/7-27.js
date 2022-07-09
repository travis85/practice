/**
 * https://www.codewars.com/kata/5842df8ccbd22792a4000245
 * takes number 
 * returns string => 12 => '10 + 2'
 * GAME PLAN
 * take each num and turn all trailing nums to 0
 * 70304 to arr of str
 * []
 * ''
 * [7,0,3,0,4]''
 * [0,0,0,0,0]
 * [7,0,0,0,0].join
 * [3,0,0]
 * [4]
 * 
 * if 
*/
function expandedForm(num) {
    let numArr = num.toString().split('')
    let stringOfZeros = numArr.map(x => x = 0).join('')
    let solution = ''
    let i = 0
    while (i < numArr.length) {
        if (numArr[i] != '0') {
            solution += `${numArr[i]+=stringOfZeros.slice(0, -1)} + `
        } 
        i++
        stringOfZeros = stringOfZeros.slice(0, -1)
    }
    return solution = solution.slice(0, -3)
}
console.log(expandedForm(70304))