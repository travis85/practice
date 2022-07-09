
//
function pairs(diffOf, arr) {
    arr.sort((a,b) => b-a,0)
    let count = 0
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] - arr[j] === diffOf){
                count++
    
            }
    
        }
    }
    return count

}
console.log(pairs(2,[1, 5, 3, 4, 2]))//3
console.log(pairs(1,[363374326, 364147530, 61825163, 1073065718 ,1281246024 ,1399469912 ,428047635, 491595254, 879792181 ,1069262793]))//0
  

