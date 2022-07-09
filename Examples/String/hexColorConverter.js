


/**
 * 
 * @param {string} ex:#ff9933'
 * @returns r: , g:, b: color conversion
 */
function hexConverter(string){
    let hexSplit = string.toUpperCase().split('').splice(1)
    const R = hexSplit.splice(0,2)
    const g = hexSplit.splice(0,2).reduce((a,b) => (parseInt(a) * 16) + parseInt(b), 0)
    const b = hexSplit.reduce((a,b) => (parseInt(a) * 16) + parseInt(b), 0)

    R.forEach(hex => {
        if(hex === "A" ){
            R.push(10)
        } else if(hex === 'B'){
            R.push(11)
        } else if(hex === 'C'){
            R.push(12)
        } else if(hex === 'D'){
            R.push(13)
        } else if(hex === 'E'){
            R.push(14)
        } else if(hex === 'F'){
            R.push(15)
        }
    })
    R.shift()
    R.shift()
    let r = R.reduce((a,b) => (a * 16) + b, 0)
        
    return({
        r: r,
        g: g,
        b: b
    })
}
// console.log(hexConverter('#ff9933'))


