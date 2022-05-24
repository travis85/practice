//nested loop
//count if both has 1
//if count = previous count add to total
function acmTeam(topic) {
    let total = 0
    let count = 0
    let i = 0
    for(let j = 0; i < topic.length-1; j++){
        let count1 = 0

        if(topic[i][j] && topic[i+1][j] === 1){
            count1++
        }
        if(count1 >= count){
            console.log(count1, count)

            count = count1
            total ++
            
        }
        i++

    }
    return count
}
console.log(acmTeam(['10101','11100','11010','00101']))
    


