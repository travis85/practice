/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 * start at lower bound
 * //adding each 
 * //if even lower is 1
 * //if odd lower 
 * //* diff between lower upper
 * 
*/
var climbStairs = function (n) {
    let countArr = []
    countArr[1] = 1
    countArr[2] = 2
    
    for (let i = 3; i <= n; i++){
        countArr[i] = countArr[i-1] + countArr[i-2]
    }
    
   return countArr[n]
};
console.log(climbStairs(4))//5
console.log(climbStairs(6))//13
//1111
//121
//211
//112
//22

//total / 2 rounded up
//5
//11111
//2111
//1211
//1121
//1112
//221
//212
//122

//6
//111111
//21111
//12111
//11211
//11121
//11112
//2211
//2121
//2112
//1212
//1122
//1221
//222


