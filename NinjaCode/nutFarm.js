
function nutFarm(arr){
    
    let nutArr = []

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === 'o'){
                nutArr.push(arr[i][j] = 1)
            } else {
                nutArr.push(arr[i][j] = 0)
            }
        }
        break
    }
    

    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){

            if(arr[i][j] === '\\' && nutArr[j] > 0){
                
                nutArr[j + 1] += nutArr[j]
                nutArr[j] -= nutArr[j]

            } else if (arr[i][j] === '/' && nutArr[j] > 0 ){

                
                nutArr[j - 1] += nutArr[j]
                nutArr[j] -= nutArr[j]
            } else if(arr[i][j] === '_'){
                nutArr[j] -= nutArr[j]
               
            } else {
                if(arr[i][j] === '.'){
                    nutArr[j] = nutArr[j]
                }
            }
        }
    }

    return nutArr
}


const tree = [
    ".o.oooooo.o.o.oooooo.",
    "..\\.\\.../..\\.../..\\..",
    "..../..\\..../....../.",
    ".....\\...././.\\..\\.\\.",
    "...../../././...\\....",
    ".../.../..\\./.\\..\\...",
    "./.......\\../.\\../...",
    "....\\..../....././...",
    ".../.\\._.\\../._../.\\.",
    ".\\...././....\\../.\\..",
    "./......././.../../.."

]

// console.log(nutFarm(tree)) 
//[101005000020000000040]
