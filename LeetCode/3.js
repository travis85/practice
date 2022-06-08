
/**
 * return the num that is only listed once
 * assume there is only 1 unique num..
 * create 2 loops 
 * outer loop says if no other num = that num return that num
*/
function listedOnlyOnce(arr) {
    // let arrToObject = arr.reduce((prev, nxt) => { prev[nxt] = (prev[nxt] + 1) || 1; return prev;}, {}) 
    let arrToObject = {}

    arr.forEach(num => {
        if(num in arrToObject){
            arrToObject[num] += 1
        } else {
            arrToObject[num] = 1
        }
    });

    for (let num in arrToObject){
        if (arrToObject[num] === 1) {
            return num
        }
    }
}
// console.log(listedOnlyOnce([4, 1, 2, 1, 2]))
console.log(listedOnlyOnce([4, 1, 4,1, 1, 2]))