
//the extra column is to account for the empty string
function commonChild(s1, s2) {
    let string1 = s1
    let string2 = s2

    for(let i=0; i < s2.length;i++){
        if(s1.includes(s2[i])){
            string1.replace(s2[i],s2[i].toLowerCase())

        }
    }

    for(let i=0; i<s1.length;i++){
        if(s2.includes(s1[i])){
            string2.replace(s1[i],s1[i].toLowerCase())
        }
    }
    console.log(string1,string2)
    let sameLetters = []
    for(let i = 0; i < s2.length+1; i++){
        sameLetters.push(new Array(s1.length+1).fill(0))
    }

    for(let i=1; i < s1.length+1; i++){
        for(let j=1; j < s2.length+1; j++){
            if(s1[i-1] === s2[j-1]){
                sameLetters[i][j] = sameLetters[i-1][j-1]+1

            } else {
                sameLetters[i][j] = Math.max(sameLetters[i-1][j], sameLetters[i][j-1])
            }

        }
    }
    return sameLetters[s1.length][s2.length]
}
console.log(commonChild('HARRY','SALLY'))//2
console.log(commonChild('SHINCHAN','NOHARAAA'))//3

