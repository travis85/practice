/**
 * array of ints 
 * takes two params
 * return indexss of two that have goal number
*/

function goalNumbers(arr, goal) {
    let solution = new Set()
    for (let i = 0; i < arr.length; i++){
        let checkIfThere = goal - arr[i]
        
        if (arr.includes(checkIfThere) && arr[i] != checkIfThere) {
            solution.add([arr[i], checkIfThere])
        }
        
    }
    return solution

}
// console.log(goalNumbers([1,2,3,4,5,6], 8))
//GAME PLAN
//var that takes goal and subtracts current iteration index
//take that var and check to see if arr has that number
// if true return arr of [current and value of var]
//no repeat




/**
 * return arr that removes dups from original
 * order must be preserved 
*/
function noDups(arr) {
    let solution = []
    for (let i = 0; i < arr.length; i++){
        if (!(solution.includes(arr[i]))) {
            solution.push(arr[i])
        }
    }
    return solution
}
// console.log(noDups([1, 3, 4, 4, 5, 8, 4, 2, 2]))//[1, 3, 4, 5, 8, 2];
//set
//iterate and add to set

/**
 * input array - return array
 * function countPlanes([[]])
 * nested loop
 * arr[i]
 * arr[i][j]
 * count
 * keep track of horizontal [i][j-1]
 * verticle [i-1][j], [i+1][j]
 * 
 * [
    ['.', '.', '.', 'P'],
    ['.', '.', 'P', 'P'],
    ['P', 'P', '.', 'P'],
    ['.', '.', '.', 'P']
]
 */

function countPlanes(arr) {
    
    let count = 0
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            let current = arr[i][j]
            let left = arr[i][j - 1]
            console.log(current)
            if (i === 0 && current === 'P' && left !== 'P') {
                console.log(current)
                count ++
            } else if( i > 0) {
                 let above = arr[i - 1][j]
                if(current === 'P' && above != 'P' && left != 'P') {
                    count++
                } 
            }
                
            
        }

    }
    return count
}
console.log(countPlanes([
    ['.', '.', '.', 'P'],
    ['.', '.', 'P', 'P'],
    ['P', 'P', '.', 'P'],
    ['.', '.', '.', 'P']
]))