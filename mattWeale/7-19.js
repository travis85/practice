/**
 * x amount of ppl
 * sub groups of 3,4,5
 * randomize the groups
 * [1,2,3,4,5,6,7,8,9,10]
*/
function subGroups(arr) {
    let randomArr = arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
    let subGroups = []
    let legalGroups = [3,4,5]
    const chunkSize = 5;

    
    for (let i = 0; i < randomArr.length; i += chunkSize) {
        const chunk = randomArr.slice(i, i + chunkSize);
        subGroups.push(chunk)
       
    }
    let lastArr = subGroups[subGroups.length - 1]
   
    if (legalGroups.includes(lastArr.length)) {
        return subGroups
    } else if(chunkSize === 3) {
        let last = subGroups.pop()
        let second = subGroups.pop()
        subGroups.push([...second, ...last])
        
    } else if (chunkSize === 4) {
        if (lastArr.length === 1) {
            let last = subGroups.pop()
            let second = subGroups.pop()
            subGroups.push([...second, ...last])
         
        } else {
            let secondToLast = subGroups[subGroups.length - 2].pop()
            subGroups[subGroups.length - 1].push(secondToLast)
           
        }
        
    } else {
        if (lastArr.length === 1) {
            subGroups[subGroups.length - 1].push(subGroups[subGroups.length - 2].pop(), subGroups[subGroups.length - 2].pop())
        } else {
            subGroups[subGroups.length - 1].push(subGroups[subGroups.length - 2].pop())
        }
            
    }

         return subGroups

}
console.log(subGroups([1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16]))


//4 => 1 left => merge last 2 arrs
// 4 => 2 left => slice and push to last arr
//5 => 2 left => slice and push to last arr
//5 => 1 left => slice 2 from and push to last