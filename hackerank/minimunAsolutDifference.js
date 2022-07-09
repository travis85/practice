function minimumAbsoluteDifference(arr) {
    arr.sort()
    let lowest = Infinity

    for(let i = 0; i < arr.length-1; i++){
        
            let possibleLowest = Math.abs(arr[i] - arr[i+1])
            if(possibleLowest < lowest){
                lowest = possibleLowest
            }
        
    
    }

    return lowest


}
console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]))
