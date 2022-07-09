
//if sting contains letter splice and push into array
//add both strings and subtract from arr.length
function makeAnagram(a, b) {
    let longestString = {}
    let shortestString = ''
    if(a.length >= b.length){
        longestString = a.split('').reduce((prev, nxt) => { prev[nxt] = (prev[nxt] + 1) || 1; return prev;}, {})
        shortestString = b
    } else {
        longestString = b.split('').reduce((prev, nxt) => { prev[nxt] = (prev[nxt] + 1) || 1; return prev;}, {}) 
        shortestString = a  
    }
    
    let x = []
    for(let i=0; i < shortestString.length; i++){
        if(shortestString[i] in longestString ){
            longestString[shortestString[i]] -= 1
            x.push(shortestString[i])
        }
    }

    return (shortestString.length - x.length) + Object.values(longestString).reduce((a,b) => Math.abs(a) + Math.abs(b), 0)
 

}
console.log(makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'))//30
console.log(makeAnagram('cde','abc'))//30

// cde
// abc