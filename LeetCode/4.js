/**
    if close b4 open returm=n false
    

 * @param {string} s
 * @return {boolean}
*/
var checkValidString = function(s) {
    const open = '('
    const wildCard = '*'
    let = openStack = []
    let starStack = []
    for (let i = 0; i < s.length; i++){
        if (s[i] === open) {
            openStack.push(i)
        } else if (s[i] === wildCard) {
            starStack.push(i)
        } else {
            if (openStack.length > 0) {
                openStack.pop()
            } else if (starStack.length > 0) {
                starStack.pop()
            } else {
                return false
            }
        }
    }
    console.log(openStack, starStack)
    if (openStack.length === 0) {
        return true
    } else if (starStack.length < openStack.length) {
        return false
        
    }
    while (starStack.length > 0) {
        if (openStack.length === 0) {
            return true
        }
        if (starStack[0] > openStack[0]) {
            openStack.shift()
            starStack.shift()
        } else {
            starStack.shift()
        }
        
    }
    if (openStack.length === 0) {
            return true
    }

    return false
   
};
// console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"))//false
// console.log(checkValidString("((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"))//true
// console.log(checkValidString('(())((())()()(*)(*()(())())())()()((()())((()))(*'))//false
console.log(checkValidString("((*)"))//t