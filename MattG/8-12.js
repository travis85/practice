

//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/
var twoSum = function (numbers, target) {
    let solution = []
    let numbersCopy = [...numbers]
    let i = 0
    let medianNumber = numbersCopy[Math.floor(numbersCopy.length / 2)]
    let numberNeeded = target - medianNumber
    
    while (i < numbers.length) {
        if (medianNumber > target && !numbers.includes(numberNeeded)) {
            numbersCopy = numbersCopy.slice(0, numbersCopy.findIndex((num) => num === medianNumber))
            medianNumber = numbersCopy[numbersCopy.length / 2]
            numberNeeded = target - medianNumber
            
        } else  {
            let heldIndex = numbersCopy.indexOf(medianNumber)
            let heldNumber = numbersCopy.splice(heldIndex, 1) 
            if (numbersCopy.includes(numberNeeded)) {
                numbersCopy.splice(heldIndex, 0, heldNumber[0])
                solution.push(numbers.indexOf(heldNumber[0])+1, numbers.lastIndexOf(numberNeeded)+1)
                return solution.sort((a,b) => a - b)  
            } else {
                numbersCopy = numbersCopy.filter((number) => number !== medianNumber)
                medianNumber = numbersCopy[Math.floor(numbersCopy.length / 2)]
                numberNeeded = target - medianNumber
            }
        }
        i++
    }
    return solution
};
console.log(twoSum([-1,-1,-1,-1,-1,-1,1,1], 2))
// console.log(twoSum([12, 13, 23, 28, 43, 44, 59, 60, 61, 68, 70, 86, 88, 92, 124, 125, 136, 168, 173, 173, 180, 199, 212, 221, 227, 230, 277, 282, 306,
//     314, 316, 321, 325, 328, 336, 337, 363, 365, 368, 370, 370, 371, 375, 384, 387, 394, 400, 404, 414, 422, 422, 427, 430, 435, 457, 493, 506,
//     527, 531, 538, 541, 546, 568, 583, 585, 587, 650, 652, 677, 691, 730, 737, 740, 751, 755, 764, 778, 783, 785, 789, 794, 803, 809, 815, 847,
//     858, 863, 863, 874, 887, 896, 916, 920, 926, 927, 930, 933, 957, 981, 997], 542))
