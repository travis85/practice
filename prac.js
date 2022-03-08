




//make compare set to string.split('')
//iterate over string
//if comapre < string[i] 
//compare = string[i]
// push(compare.length)
function findShort(string){
    let words = string.split(' ');
    let compare = words[0]
    for (let i = 1; i < words.length; i++){
        if(words[i].length < compare.length){
            compare = words[i]
        }
    }
    return compare.length
}
// console.log(findShort(string))

//  The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(string) {
    let counter = 0
    let letters = ''
	for (let i = 0; i < string.length; i++){
        let upper= string[i].toUpperCase()
       let lower = string[i].repeat(counter)

        letters += `${upper}${lower}-`
       counter++
    }  
    letters = letters.slice(0,-1)
    return letters
}
// console.log(accum('sfgbdfhm'))


// Write a function that returns the string representation of all numbers from 1 to n based on the following rules:
//  - If it's a multiple of 3, represent it as "fizz".
//  - If it's a multiple of 5, represent it as "buzz".
//  - If it's a multiple of both 3 and 5, represent it as "fizzbuzz".
//  - If it's neither, just return the number itself.
//fizzBuzz(15) should equal '12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz'

function int(n){
    for (let i = 1; i < n+1; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz') 
        } else if (i % 3 === 0){
            console.log('fizz') 
        }else if(i % 5 === 0){
            console.log('buzz') 
        } else {
            console.log(i) 
        }
    }
}


// We are given two strings as inputs. Can you write a method isAnagram(str1, str2) that will return true or false depending on whether the strings are anagrams of each other?
// Here's the definition of an anagram: a word, phrase, or name formed by rearranging the letters of another: such as cinema, formed from iceman.

function anagram (str1, str2) {
    let result = false
    if(str1.length !== str2.length) {
        return false;
    }
    for(let i =0; i < str1.length; i++){
        if(str2.includes(str1[i])){
            result = true
        } else{
            return false
        }
    }
    return result
}
// console.log(anagram('cinema','iceman'))


// You are given a string that contains alphabetical characters (a - z, A - Z) and some other characters ($, !, etc.). 
// Write a function reverseOnlyAlphabetical(str) that reverses only the alphabetical values. 
// For example, ‘sea!$hells3’ returns ‘sll!$ehaes3’. 

function reverseOnlyAlphabetical(str){
    let strSplit = str.split('');
    let rev = []
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].match(/[a-z]/gi)){
            rev.unshift(strSplit[i])
        } 
    }
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].match(/[!$3]/gi)){
            rev.splice(i,0,strSplit[i])
        }
    }
    return rev
}

//TIME CONVERSION
function timeConversion(s) {
    let timeSplit = s.split(':')
    function add(a,b) {return a + b}
    let time = {
        hour: timeSplit[0],
        min: timeSplit[1],
        sec: timeSplit[2]
    }
    if(time.sec.match(/PM/) && time.hour === '12'){
        return `${time.hour}:${time.min}:${time.sec.replace(/PM/,'')}`
    } else if(time.sec.match(/AM/) && time.hour === '12'){
        return `00:${time.min}:${time.sec.replace(/AM/,'')}`
    } else if (time.sec.match(/PM/)){
        return `${add(parseInt(time.hour),12)}:${time.min}:${time.sec.replace(/PM/,'')}`
    } else {
        return `${time.hour}:${time.min}:${time.sec.replace(/AM/,'')}`
    }
}
// console.log(timeConversion('11:05:45AM'))

//ROUNDING STUDENTS GRADES 
function gradingStudents(grades) {
    let gradesSplit = grades
    let newGrades = [];
    function round5(x){return Math.ceil(x/5)*5;}

    for(let i = 0; i < gradesSplit.length; i++){
        if(parseInt(gradesSplit[i]) < 38){
            newGrades.push(parseInt(gradesSplit[i]))
        } else if(parseInt(gradesSplit[i]) + 1  === round5(parseInt(gradesSplit[i])) || parseInt(gradesSplit[i]) + 2 === round5(parseInt(gradesSplit[i]))) {
            newGrades.push(round5(parseInt(gradesSplit[i])))
        } else {
            newGrades.push(parseInt(gradesSplit[i]))
        }
    }
    return newGrades
}
// console.log(gradingStudents([73,67,38,33]))



/* The function accepts following parameters:
*  1. INTEGER s start of sam house 
*  2. INTEGER t end of sam house
*  3. INTEGER a apple tree location
*  4. INTEGER b orange tree location
*  5. INTEGER_ARRAY apples = m
*  6. INTEGER_ARRAY oranges = n
*/
//range is between s - t
//a [apples[i]] = ?
//new arr = [?,?,?]
//if those ? fall between (s - t) print

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleArr = [];//add total inside
    let orangeArr = [];

    for(let i = 0; i < apples.length; i++){
        if(a + apples[i] >= s && a + apples[i] <= t)
        appleArr.push(apples[i])
    }
    for(let i = 0; i < oranges.length; i++){
        if(b + oranges[i] >= s && b + oranges[i] <= t)
        orangeArr.push(oranges[i])
    }
}


//nested loop add then add by v2.. 
//if v1 pass v2 with out landing on same space print no
function kangaroo(x1, v1, x2, v2) {
    let kang1 = x1 + v1;
    let kang2 = x2 + v2;

    for (let i = kang1; i < Infinity;){
        for(let j = kang2; j < Infinity;){ 

            if(i === j){
                return "YES"    
            } else {
                i += v1 
                j += v2 

                if(i > j || v1 <= v2 && x1 < x2)
                return 'NO'
            }
        }
    }
}
// console.log(kangaroo(43, 2, 70, 2))
//0 2 5 3 => no    [even-even-odd-odd] // always ahead bc both x2/v2 are larger
//28 8 96 2 => no  [even-even-even-even]
//14 4 98 2 => yes [even-evev-even-even]
//43 5 49 3 => yes
//0 3 4 2 => yes   [even-odd-even-even]
//35 1 45 3 => no
//42 3 94 2 => yes
//43 2 70 2 =>no




function getTotalX(a, b) {
    let allFactors = []
    let low = Math.min(...b)
    function addBy(num, maxNum){// takes a number and add by that number/ push into array until it meets another num
        let heldNums = [num];
        let counter = num
        while (counter < maxNum){
            heldNums.push(counter += num)
        }
        return heldNums
    }

    for(let i = 0; i < a.length; i++){ // push all that are factors.. iterate thru both arr... push into set
        allFactors.push(addBy(a[i],low))   // =>[[3, 6, 9, 12,15, 18, 21, 24], [ 4, 8, 12, 16, 20, 24 ]]
    }

    let allFactorsFlat = allFactors.sort().flat() //used so that compare func can operate

    function factor(numFactor, otherNum) { // deterime factors
        if(numFactor % otherNum === 0){
            return otherNum
        }
    }

    let matchPushed = []
    function compare (arr) { //finds all factors of low
        let match = new Set();
        for(let i = 0; i < arr.length; i++){
            if(factor(low, arr[i]) ){
                match.add(arr[i]) 
            }
        }
        let x = Array.from(match)
        matchPushed = x
    }
    compare(allFactorsFlat)

    let solution2 = []
    function solution(arr1, arr2){// adds arr2
        let x = []
        let sumArrB = arr2.reduce((thisnNum, thatNum) => 
        thisnNum + thatNum,
        )

        for(let i = 0; i < arr1.length; i++){
            x.push(factor(sumArrB, arr1[i]))
        }
        solution2 = x.filter(Boolean)
    }
    solution(matchPushed,b)// filter this array if its < max of A and if it ! a factor of both

    if(a.length > 1){
        for(let i = 1; i < a.length; i++){
            if(numFactor % otherNum === 0){
                return otherNum
            }
        }
    } else {
        return solution2.length 
    }
}
// console.log(getTotalX([3,4],[24, 48]))

// //[3,4],[24 ,48] => 2 ....4,8,12,16,20,24
// // [2, 4],[16, 32, 96] => 3
// // [2 4][16 32 96] => 3
// // [2], [20 30 12] => 1
// //[3 4],[24 48] => 2



function breakingRecords(scores) {
    let highScore = scores[0];
    let highScoreCounter = 0;
    let lowScore = scores[0];
    let lowScoreCounter = 0;

    for(let i = 1; i < scores.length; i++){
        if(scores[i] > highScore) {
            highScore = scores[i];
            highScoreCounter++
        } else if(scores[i] < lowScore){
            lowScore = scores[i]
            lowScoreCounter++
        }
    }
    return [highScoreCounter , lowScoreCounter]
}
// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))


function birthday(s, d, m) {
    let counter = 0
    function add(nums){
        return nums.reduce(function(thisnum, thatnum){
            return thisnum + thatnum
        },0)
    }
    for(let i = 0; i < s.length; i++){
        let plus = i + m
        let newArr = s.slice(i,plus)
        let addition = add(newArr)
        if(i + m === s.length+1){
            break;
        } else {
            if(addition === d)
            counter++
        }
    }
    return counter
}
// console.log(birthday([4], 4, 1))


function divisibleSumPairs(n, k, ar) {
    let counter = 0 
    for(let i = 0; i < ar.length ; i++){
        for(let j= 1; j < ar.length; j++){

            let x = ar[i] + ar[j] / k;

            if(x % k === 0){
                counter++
            }
        }
    }
    return counter 

}
 console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1,2]))



//10101010  00001111  00000000  11111111 (OUTPUT)
// let x = [1,1,1,1,1,1,1,1 ,0,0,0,0,0,0,0,0 ,0,0,0,0,1,1,1,1 ,1,0,1,0,1,0,1,0] (INPUT)
let empty = []
let start = 0
let end = 8

while(start < x.length){
    empty.unshift(x.slice(start,end))

    start += 8
    end += 8
}

//  console.log(empty)

