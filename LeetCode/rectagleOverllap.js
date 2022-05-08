
var isRectangleOverlap = function(rec1, rec2) {
    let count = 0
    const rec1Range1 = [...Array(rec1[2] - rec1[0] + 1).keys()].map(x => x + rec1[0]).slice(1,-1).reduce((a, v) => ({ ...a, [v]: v}), {})
    const rec1Range2 = [...Array(rec1[3] - rec1[1] + 1).keys()].map(x => x + rec1[1]).slice(1,-1).reduce((a, v) => ({ ...a, [v]: v}), {})
    const rec2Range1 = [...Array(rec2[2] - rec2[0] + 1).keys()].map(x => x + rec2[0])
    const rec2Range2 = [...Array(rec2[3] - rec2[1] + 1).keys()].map(x => x + rec2[1])
    
    if(rec2[0] > rec1[2]){
        return false
    }
    for(number in rec2Range1){
        if(rec2Range1[number] in rec1Range1){
            count++
            break
        }
    }

    if(count != 1){
        return false
    }else if(rec2[1] > rec1[3]){
        return false
    }

    for(number in rec2Range2){
        if(rec2Range2[number]in rec1Range2){
            count++
            break
        }
    }

    if(count === 2){
        return true
    } else {
        return false
    }
};
// console.log(isRectangleOverlap([0,0,1,1],[1,0,2,1]))//f
// console.log(isRectangleOverlap([0,0,1,1],[2,2,3,3]))//f
// console.log(isRectangleOverlap([4,4,14,7],[4,3,8,8]))//true
// console.log(isRectangleOverlap([-4,-9,-2,3],[1,-5,9,-1]))//false
// console.log(isRectangleOverlap([4,0,6,6],[-5,-3,4,2]))//false
//  console.log(isRectangleOverlap([-687153884,-854669644,-368882013,-788694078],[540420176,-909203694,655002739,-577226067]))//false


var isRectangleOverlap = function(rec1, rec2) {
    let rec1Obj =  Object.assign({}, rec1)
    let rec2Obj = Object.assign({}, rec2)

    if(rec1Obj[2] <= rec2Obj[0]){
        return false
    } else if(rec1Obj[0] >= rec2Obj[2]){
        return false
    } else if(rec1Obj[1] >= rec2Obj[3]){
        return false
    } else if(rec1Obj[3] <= rec2Obj[1]){
        return false
    } 

    return true
}
console.log(isRectangleOverlap([0,0,2,2],[1,1,3,3]))//t
console.log(isRectangleOverlap([-6,-10,9,2],[0,5,4,8]))//false


