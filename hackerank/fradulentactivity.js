
//*****************RUNTIME ERROR**********

function activityNotifications(expenditure, d) {
    let expendArr = []

    for(let i = 0; i < expenditure.length; i++){

        if(expenditure.slice(i, i+d).length === d){
            expendArr.push(expenditure.slice(i, i+d))
        }

    }
    expendArr.pop()


    let notifications = 0

    for(let i = 0; i < expendArr.length; i++){
        expendArr[i].sort()
        let todaySpending = expenditure[i+d]
        let midNum = Math.floor(d / 2)
        let median = expendArr[i][midNum]
        let ifEvenMedian = expendArr[i][midNum] / expendArr[i][midNum -1]

        if(d % 2 === 0){
            if(todaySpending < ifEvenMedian * 2 ){
                
                notifications += 1
                
            }
        } else {
            if(todaySpending < median * 2){
                
                notifications += 1
            }
        }

    }
    return notifications
}
console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))//2
// if median  <  expednture send notice
//break if expend.len < d
//