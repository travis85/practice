


//count = i-2 + i-1
//heldNum = count + i-1
//days = count + heldNum
function fibonacci(n) {
    let trailingCount = 0
    let count = 1
    let next = 1
    for (let i = 2; i < n; i++){
        trailingCount = count + next
        count = next
        next = trailingCount

    }
    return next

}
// console.log(fibonacci(3))//2   
console.log(fibonacci(5))//5    
console.log(fibonacci(12))//144    