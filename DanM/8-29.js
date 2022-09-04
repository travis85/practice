//function formula  numofpizza * numofpizza * 3.14 
//to get 1 slice divide by 8
// find the area of 8inch pizza 
//see how many times 8inch goes into passed number param
// 
function areaFormula(num) {
   return num * num * 3.14
}

function decimal(num) {
    let dec = num - Math.floor(num)
    dec = Math.floor(dec * 10) / 10
    console.log(dec)
    if (dec === 0) {
        return 0
    }
    return dec.toString().split('.')[1]
}

function pizza(size) {
    const eigthInch = areaFormula(size) / areaFormula(8)
    return `pizzas: ${parseInt(eigthInch)}, slices: ${decimal(eigthInch)}`

   
}
console.log(pizza(7))
console.log(pizza(50))

