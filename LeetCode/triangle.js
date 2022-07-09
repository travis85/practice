/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let count = triangle[0][0]
    let i = 1
    let j = 0
    if (triangle.length === 1) {
        return count
    }
    while (i < triangle.length) {
        let lowest = triangle[i][0]
        while (j < triangle[i].length-1) {
            if (lowest > triangle[i][j+1]) {
                lowest = triangle[i][j+1]
            }
            
            j++
        }
        count += lowest
        j = 0
        i++
        
    }

        

    return count
};
// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))
// count = 0
//loop1 i < triangle
//intiate vars belowan duse to hold value
//loop2
//set 2 vars current = [i][j] and next i [j+1]
//count += math.min(vars)