
//NOT DONE*************************************
//make middle unique add both sides 
function triplets(a, b, c) {
    const aSet = Array.from(new Set(a))
    const bSet = Array.from(new Set(b))
    const cSet = Array.from(new Set(c))

    let count1 = 0
    let count2 =0 

    for(let i = 0; i < bSet.length; i++){
        for(let j = 0; j < aSet.length; j++){

        if(bSet[i] >= aSet[j]){
            count1++  }      
        }
    }

    for(let i = 0; i < bSet.length; i++){
        for(let j = 0; j < cSet.length; j++){
    
           if(bSet[i] >= cSet[j]){

                count2++
            }
        }
 
    }

console.log(bSet)

    return count1+count2
}
console.log(triplets([1,3,5],[2,3],[1,2,3]))//8
console.log(triplets([1,4,5],[2,3,3],[1,2,3]))//5 

