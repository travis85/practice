
function maximumToys(prices, k) {
    let affordableToys = prices.filter(price => price <= k).sort((a,b) => a - b)
    let mostToys = []
    let count = 0
    
    for(let i = 0; i < affordableToys.length; i++){
        let next = count + affordableToys[i]
        if(next <= k){
            count += affordableToys[i]
            mostToys.push(affordableToys[i])
        }
    }

    return mostToys.length
}
// console.log(maximumToys([1, 12, 5 ,111, 200 ,1000, 10], 50))
console.log(maximumToys([1, 2, 3 ,4], 7))





