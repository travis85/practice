
// loop and if it matches .toUppercase !match && [a-z] splice
//capitalize splice if not letter 
function abbreviation(a, b) {
    const stringA = a.slice().toUpperCase().split('')

    for (let i = 0; i < stringA.length; i++){
        let match = new RegExp(stringA[i])

        if (!b.match(match)) {
            stringA.splice(i,1,0)
        } 
    }
    let x = stringA.join('')
    if (x.match(new RegExp(b))) {
        return 'yes'
    }

b

}
console.log(abbreviation('daBcd', 'ABC'))
