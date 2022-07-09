// https://leetcode.com/problems/roman-to-integer/

/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
*/


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let solution = 0

    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'CM': 900,
        'CD': 400,
        'XC': 90,
        'XL': 40,
        'IX': 9,
        'IV': 4
    }

    for (let i = 0; i < s.length; i++){

        const letterAhead = s[i] + s[i + 1]

        if (letterAhead in romans){
                            
            solution += romans[letterAhead]
            i = i+1
        } else {

            solution += romans[s[i]]
            
        }

    }
    return solution
        
};
console.log(romanToInt("MCMXCIV"))
//compare and add each letter 
//keep a eye on the one after to see if it mathces -10, 100, 500
