
//https://leetcode.com/problems/add-binary/
var addBinary = function (a, b) {
    let aReverse = a.split('').reverse().join('')
    let bReverse = b.split('').reverse().join('')
    
    let solution = []
    for (let i = 0; i < aReverse.length; i++){
        if(aReverse[i] === '1' && bReverse[i] === '1'){
            solution[i] = '0'
            while (solution[i + 1] === 1) {
                solution[i+1] = 0
            }
            solution[i + 1] = '1'
           
        } else if(aReverse[i] === '1' && bReverse[i] === '0'){
            solution[i] = '1'
        } else if(aReverse[i] === '0' && bReverse[i] === '1'){
            solution[i] = '1'
        } else if(aReverse[i] === '0' && bReverse[i] === '0'){
            solution[i] = '0'
        }
    }
    return solution.reverse().join('')
};
console.log(addBinary('11', '1'))
console.log(addBinary('1010', '1011'))

// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// var merge = function (intervals) {
//     let newArr = []
//     let i = 0
//     let j = 1
//     if (intervals.length === 2) {
//         if (intervals[0][1] >= intervals[1][0]) {
//             let solution = [Math.min(...intervals[0]), Math.max(...intervals[1])]
//             return solution
//         } 
//         return intervals
//     }

//     while (i < intervals.length) {
        
//         let currentArr = intervals[i]
//         let nextArr = intervals[j]
//         let currentArrEnd = intervals[i][1]
//         let nextArrStart = intervals[j][0]
       
//         if (currentArrEnd >= nextArrStart) {
            
//             currentArr = [Math.min(...currentArr, ...nextArr), Math.max(...currentArr, ...nextArr)]
//             newArr.push(currentArr)
//             j++
//         } 
//         i++

//     }
//     return newArr
// };
// // console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
//     // console.log(merge([[1,4],[5,6]]))
// console.log(merge([[1, 4], [4, 5]]))

// nested internal while current >= next loop
// keep track currents[i][1] and next[j][0] 
// if current >= next {emptyArr.push math.lowest and highest}
//i = j
// 


//compare current and next
//if end > next[start]
//arr[i] + arr[i+1] === lowest of start and the highest of end