

function arrayManipulation(n, queries) {
    let countedArr = new Array(n).fill(0,0)
    let maxCount = 0
    let current = 0


    for(let index = 0; index < queries.length; index++){
        const start = queries[index][0]-1
        const end  = queries[index][1]
        const add = queries[index][2]

        countedArr[start] += add
        countedArr[end] -= add

    }

    for(let i = 0; i < countedArr.length; i++){
        current += countedArr[i] 
        if(maxCount < current){
            maxCount = current
        }

    }
    

    return maxCount
}
// console.log(arrayManipulation(5,[[1, 2, 100],[2, 5, 100],[3, 4, 100]]))
// console.log(arrayManipulation(10,[[2, 6, 8],[3, 5, 7],[1, 8, 1],[5, 9 ,15]]))//31




