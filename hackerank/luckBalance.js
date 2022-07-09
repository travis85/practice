//

function luckBalance(allowedLoses, contests) {
    let importantContest = []
    let lowestNum = []
    let restOfNums = []
    
    for(let i = 0; i < contests.length; i++){
        restOfNums.push(contests[i][0])
        importantContest.push(contests[i][1])

        if(contests[i][1] === 1){
            lowestNum.push(contests[i][0])

        }
    }
   
    let important = importantContest.reduce((a,b) => a + b, 0)
    const neededWins = important - allowedLoses 
    const allNumLuck = restOfNums.reduce((a,b) => a + b, 0)
    lowestNum.sort((a,b) => a - b).splice(neededWins)
    let x = lowestNum.reduce((a,b) => a + b,0) * 2

    if(neededWins > 0){
        return allNumLuck - x
    } else{
        return allNumLuck
    }
    

}
console.log(luckBalance(3,[[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]))
console.log(luckBalance(5,[[13 ,1], [10, 1], [9, 1], [8, 1], [13, 1], [12, 1],[18, 1],[13, 1]]))//42








