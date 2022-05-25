function merge(arr) {

    const combineArrays = (arr1, arr2) => {
        const lowest = Math.min(arr1[0], arr2[0])
        const highest = Math.max(arr1[1], arr2[1])
        return [lowest, highest]
    }

    let i = 0
    while (i < arr.length-1) {
        if (arr[i][1] > arr[i + 1][0]) {
            arr[i] = combineArrays(arr[0], arr[1])
            arr.splice(i + 1, i + 1)
            
        } else {
            i++
        }

        
    }
    return arr
}
console.log(merge([[1, 4], [2, 5], [7, 10], [12, 16]]))
console.log(merge([[ 1, 3 ], [ 2, 9 ], [ 3, 10 ], [ 1, 16 ]]))