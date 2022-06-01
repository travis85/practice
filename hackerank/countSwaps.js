

function countSwaps(a) {
    let count = 0
    let end = a.length -1

    for(let i = 0, j = 1; i < a.length; i++, j++){

        if(a[i] > a[j]){
            [a[i],a[j]] = [a[j],a[i]]
            count++
            i = -1
            j = 0
            continue
        }
        
    }
    
    return ` Array is sorted in ${count} swaps.\n First Element: ${a[0]} \n Last Element: ${a[end]}`
    
}
console.log(countSwaps([6,4,1]))


