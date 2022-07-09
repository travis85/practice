
function countOccurances(arr){
    let countedObject = {}

    arr.forEach(element => {
        if(element in countedObject){
            countedObject[element] += 1
        } else {
            countedObject[element] = 1
        }
    });
    return countedObject
}




//TO FIND THE MOST
return Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });