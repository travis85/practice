/**
 * Write a function that returns the k largest values in an array of numbers. In other word, write a function that takes 2 inputs:
    arr: an array of numbers
    k: the number of largest values to return
    and returns an array with the k largest values from arr
 */
function largestValue(arr, k) {
    let sortedArr = arr.sort((a,b) => b - a).slice(0,k)
    return sortedArr
}
//QUESTIONS
//can i assume that there would always be atleast k numbers in arr

// GAME PLAN
// set up empty arr numbers.sort((a, b) => b - a);
// sort the list from largest to smallest
// return arr.slice(0,2)

// function square(number) {
//     return number * number
// }
// function repeat(string) {
//     return string + string
// }

// function multiplyByThree(number) {
//     return number * 3
// }


// function map(arr, func) {
//     let result = []
    
//     for (let i = 0; i < arr.length; i++){
//         result.push(func(arr[i]))
//     }
//     return result
// }

// const strings = ['s','fg','dfg']
// console.log(map(strings, repeat))

function highThanTen(number) {
    return number > 10
}
function even(number) {
    return number % 2 === 0
}
function odd(number) {
    return number % 2 !== 0
}


function filter(arr, func) {
    let emptyArr = []
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i])){
            emptyArr.push(arr[i])
        }
    }
    return emptyArr
}

function sum(total, number) {
    return total + number
}

// take arr of words as keys: word return dicrtionary of count as val
const words = ['the', 'the', 'we', 'we', 'it']

function countWords(accu, word){
    if (word in accu) {
         accu[word] += 1
    } else {
         accu[word] = 1
    }
    return accu
    
} 


function reduce(arr, func, initial) {
    for (let i = 0; i < arr.length; i++){
        initial = func(initial, arr[i])
    }
    return initial 
}
console.log(reduce(words, countWords, {}))
const numbers = [1, 2, 3, 4, 5,1,34,46]