/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let intervalsSorted = intervals.sort((a, b) => a[0] - b[0])
    let newArr = []
    let i = 0
    let j = 1
    if (intervalsSorted.length === 2) {
        if (intervalsSorted[0][1] >= intervalsSorted[1][0]) {
            let solution = [Math.min(...intervalsSorted[0]), Math.max(...intervalsSorted[1])]
            return solution
        } 
        return intervalsSorted
    }

    while (i < intervalsSorted.length) {
        
        let currentArr = intervalsSorted[i]
        let nextArr = intervalsSorted[j]
        let currentArrEnd = intervalsSorted[i][1]
        let nextArrStart = intervalsSorted[j][0]
       
        if (currentArrEnd >= nextArrStart) {
    
            currentArr = [Math.min(...currentArr, ...nextArr), Math.max(...currentArr, ...nextArr)]
            newArr.push(currentArr)
           j++
        } 
        i++
        

    }
    return newArr

};
// console.log(merge([[2, 6], [8, 10], [1, 3], [15, 18]]))//[[1,6],[8,10],[15,18]]
// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1,4],[4,5]]))
//while loop
//empty arr
// 1 start[i][0]
//2 end [i][1]
// if end > start+1
//empty push 


//compare current and next
//if end > next[start]
//arr[i] + arr[i+1] === lowest of start and the highest of end

