
//slice to make new arr
//
function maximumSum(a, m) {
    let set = new Set(a)
    let arr = Array.from(set)
    let max = 0
    for (let i = 0; i < arr.length; i++){
        let heldNum = 0
        for (let j = 0; j < a.length; j++){
            heldNum += a[j]
            if (max < heldNum % m) {
                max = heldNum % m
            }
        }
        a.splice(0, 1)
    }
    return max
}
console.log(maximumSum([3,3,9,9,5],7))