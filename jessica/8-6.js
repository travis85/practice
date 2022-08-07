

/**
 * reture true if balanced params
 * 
 */
function balanedParen(str) {
    const bracketTypes = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let stack = []

    for (let i = 0; i < str.length; i++){
        if (Object.keys(bracketTypes).includes(str[i])) {
            stack.push(str[i])
            
        } else {
            for (let bracket in bracketTypes) {
                console.log(bracket,i)
                if (bracketTypes[bracket] === str[i]) {
                    if (stack.pop() != bracket) {
                        return false
                    }
               }
            }
        }
    }
    
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
    
}

console.log(balanedParen('({{()}})'))
//set var for open and close

//stack 
//itereate 
//if open push onto stack
// if close stack pop
// if non is in stack with a cloce return false
// stack needs to 0 in the end