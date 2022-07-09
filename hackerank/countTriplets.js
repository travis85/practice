
function countTriplets(arr, r) {
    const numCounts = {}
    const pairCounts = {}
    let count = 0
  
    for (let i = arr.length - 1; i >= 0; i--) {
        const val = arr[i] 
        const nextVal = arr[i] * r

        if (nextVal in pairCounts) {
            count += pairCounts[nextVal]
        }
        
        if (nextVal in numCounts) {
            pairCounts[val] = (pairCounts[val] || 0) + numCounts[nextVal]
        }
        
        numCounts[val] = (numCounts[val] || 0) + 1

    }
  
    return count

}
// console.log(countTriplets([1 ,2 ,2 ,4], 2))
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3))

 