
function substrCount(n, s) {
    let count = n

    for(let i = 0; i < s.length; i++){
        let outerLetters = s[i] === s[i+2]
        let inner = s[i+1]
        let heldLetters = ''

        if(s[i] === s[i+1]){
            heldLetters = s[i], s[i+1]
            count++
        } 
        if(s[i] === s[+1] && s[i] === s[+2]){
            count++
        }
        if(outerLetters === true && inner != s[i]){
            count++
        }
        
    }


    return count
}
// console.log(substrCount(5,'asasd'))//7
// console.log(substrCount(7,'abcbaba'))//10
// console.log(substrCount(4,'aaaa'))//10
// console.log(substrCount(8,'mnonopoo'))//12




