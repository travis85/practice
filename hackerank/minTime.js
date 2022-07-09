
//decriment if 0 add until hit goal
function minTime(machines, goal) {
    let maxTime = (goal / machines.length) * Math.max(...machines)
    let minTime = (goal / machines.length) * Math.min(...machines)
    let half = maxTime / minTime
    let totalDays = 0
    console.log(maxTime, minTime, half)
    // while (goal > totalDays) {
    //     let difference = half + 
    // }

}
// console.log(minTime([2, 3], 5))//6
console.log(minTime([1, 3, 4], 10))//7

