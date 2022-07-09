//find if num - money is there

function whatFlavors(cost, money) {
    let costFilter = cost.filter(num => num < money)
    let i = 0
    while(i < costFilter.length){
        let numToFind = cost.indexOf(money - costFilter[i], i+1)

        if(numToFind > 0){
            console.log(`${i+1} ${numToFind+1}`)
            return 
        }
        i++             

    }

    
}
console.log(whatFlavors([1, 4, 5, 3, 2], 4))
console.log(whatFlavors([2, 2, 4, 3], 4))//1 2