

/**
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 * https://leetcode.com/problems/pascals-triangle-ii/

 * @param {number} rowIndex
 * @return {number[]}
*/
var getRow = function (rowIndex) {
    let solution = [[1],[1, 1]]
    
    if (rowIndex === 0) {
        return [[1]]
    } else {
        if (rowIndex === 1) {
            return [[1],[1,1]]
        }
    }

    for (let i = 1; i < rowIndex ; i++){
        let heldRow = [1]
        for (let j = 0; j < solution[i].length-1; j++){
            const before = solution[i][j]
            const after = solution[i][j + 1]
            heldRow.push(before + after)
        }
        heldRow.push(1)
        solution.push(heldRow)
    }

    return solution[rowIndex]
};
console.log(getRow(3))