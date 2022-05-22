

function maxSubsetSum(arr) {
    if (arr.length === 1) {
        return arr[0]
    }

    const newArr = arr.slice()
    newArr[1] = Math.max(arr[0], arr[1])
    for (let i = 2; i < arr.length; i++){
       newArr[i] = Math.max(newArr[i-1], arr[i] + newArr[i-2], arr[i])
    }
    if (newArr[newArr.length - 1 < 0]) {
        return 0
    }
    return newArr[newArr.length-1]
}
console.log(maxSubsetSum([3, 7 ,4 ,6 ,5]))//13  