// ["SubrectangleQueries","getValue","updateSubrectangle","getValue","getValue","updateSubrectangle","getValue","getValue"]
 
//  "SubrectangleQueries"
//  [
//  [1,2,1],
//  [4,3,4],
//  [3,2,1],
//  [1,1,1]
//  ]
 
//  "getValue" [0,2]
//  returns 1
 
//  "updateSubrectangle"
//  [0,0,3,2,5]
//  changes rect to
//  [
//  [5,5,5],
//  [5,5,5],
//  [5,5,5],
//  [5,5,5]
//  ]
 
//  get value [0,2]
//  5
 
//  [3,1]
//  5
 
//  update subrectangle
//  [3,0,3,2,10]
//  [
//  [5, 5, 5],
//  [5, 5, 5],
//  [5, 5, 5],
//  [10,10,10]
//  ]
 
//  getValue [3,1]
//  10
 
//  getValue [0,2]
//  5
//  */

/**
 * @param {number[][]} rectangle
 * making the rectangle 
 * iterate if i === ? call function
*/
var SubrectangleQueries = function(rectangle) {
    return { updateSubrectangle, getValue }
    function updateSubrectangle(row1, col1, row2, col2, newValue) {
        for (let i = row1; i <= row2; i++){
            for (let j = col1; j <= col2; j++){
                rectangle[i][j] = newValue
            }
        }
    }
    //
    function getValue(row, col) {
        return rectangle[row][col]
    }
};


// console.log(SubrectangleQueries([[],[0,2],[0,0,3,2,5],[0,2],[3,1],[3,0,3,2,10],[3,1],[0,2]]))
let rectangle = [[1,2,1],[4,3,4],[3,2,1],[1,1,1]]

SubrectangleQueries(rectangle).updateSubrectangle(0, 0, 1, 1, 50)
console.log(SubrectangleQueries(rectangle).getValue(0,2))
console.log(SubrectangleQueries(rectangle).getValue(1,1))
console.log(SubrectangleQueries(rectangle).getValue(1,2))
SubrectangleQueries(rectangle).updateSubrectangle(3,0,3,2,50)
// console.log(SubrectangleQueries(rectangle).getValue(0,2))
// console.log(SubrectangleQueries(rectangle).getValue(3,1))
//
// 50 50 50 10 
// 50 50 50 20
// 50 50 50 30
// 40 40 40 40
//row0 -start row2 -max hori
//col0- start col2- max vert
// outer loop thru rows
//inner loop thru cols
//for every iteration i j = newval
//check work call getValue(0,3)(1,1)(2,3)

// row 0, col 0, row 2, col 2, 50
// 0, 0, 2, 2, 50
// SubrectangleQueries.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
// };

// SubrectangleQueries.getValue = function(row, col) {
   
// };

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
    //create functions for each queiry 
*/