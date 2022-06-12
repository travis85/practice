

var generate = function (numRows) {
    let solution = [[1],[1,1]]

    if (numRows === 1) {
        return [[1]]
    } else {
        if (numRows === 2) {
            return [[1],[1,1]]
        }       
    }
    for (let i = 1; i < numRows-1; i++){

        let heldArr = [1]
        for (let j = 0; j < solution[i].length-1; j++){
            const before = solution[i][j]
            const after  = solution[i][j+1]
            heldArr.push(before + after) 
        }
        heldArr.push(1)
        
        solution.push(heldArr)
    }
    return solution
};
console.log(generate(5))
//[1,5,10,10,5,1]
//[i][i+1]
//var = 
//if num is 1 return [1] if 2 return [[1],[1,1]]
//if < 2 var = [[1],[1,1]]
//for loop i =1 < numRows 
// var blank = [1]
//always take last array add i i+1
//nested loop arr[i][j]

// add j j+1 of i
//var push Array()
