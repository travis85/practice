




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
        if(strSplit[i].match(/[^A-Za-z]/gi)){
            rev.splice(i,0,strSplit[i])
        }
    }
    return rev.join('')
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


//10101010  00001111  00000000  11111111 (OUTPUT)
let x = [1,1,1,1,1,1,1,1 ,0,0,0,0,0,0,0,0 ,0,0,0,0,1,1,1,1 ,1,0,1,0,1,0,1,0] 
let empty = []
let start = 0
let end = 8

while(start < x.length){
    empty.unshift(x.slice(start,end))

    start += 8
    end += 8
}

//  console.log(empty)

/**
* Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .
Example
* n = 6, k = 3 ar = [1, 3, 2, 6, 1, 2] => 5
 */
function divisibleSumPairs(n, k, ar) {
    let counter = 0 
    let empty =[]
    for(let i = 0; i < ar.length; i++){
        for(let j= i+1; j < ar.length; j++){
            let z = (ar[i] + ar[j]) % k;
            if (j === ar.length){
                break;
            } else {
                if (z === 0 && i != j){
                empty.push(z)
                counter++
                console.log(counter,ar[i],ar[j])
                }
            }
     
        }
    }
    return empty.length

}

//  console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]))
// n = 6, k = 3 ar = [1, 3, 2, 6, 1, 2] => 5
//2 2 [8,10]

function reverseOnlyAlphabetical(str){
    let strSplit = str.split('');
    let rev = []

    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].match(/[a-z]/gi)){
            rev.unshift(strSplit[i])
        } 
    }
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].match(/[^A-Za-z]/gi)){
            rev.splice(i,0,strSplit[i])
        }
    }
    return rev.join('')
}
// console.log(reverseOnlyAlphabetical('sea!$hells3'));

// You are given a string, write a method that will return True if that string is a palindrome and False if it is not. 
// A palindrome is defined as “a word, phrase, or sequence that reads the same backward as forward”.
// Assume that we will not have input strings that contain special characters or spaces.
// For example, ‘racecar’ should return True

//reverse 
function isPal(str){
    let rever = [];
    for(let i =0; i < str.length; i++){
        rever.unshift(str[i])
    }
    let x = rever.join('')
    if(x === str){
        return true
    } else{
        return false
    }
}
// console.log(isPal('thisisnotapalindrome'))
// console.log(isPal('racecar'));

// You're given a string of random alphanumerical characters with a length between 0 and 1000. 
// Write a method to return the first character in the string that does not repeat itself later on. 
// For example, 'oh my god dude where is my car' should return 'g'
function firstNonRepeat(str) {
    let strSplit = str.split('') 
    let unique ={}
    for(const letter of strSplit){
        if (unique[letter]){
            unique[letter] += 1;
        } else {
            unique[letter] = 1
        }
    }    

    solution = ''
    for(letter in unique){
        if(unique[letter] === 1){
            solution += letter;
            break;
        }
    }
    return solution
}
// console.log(firstNonRepeat('oh my god dude where is my car'))

/**
 *Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. 
 *If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 *EXAMPLE: [1,1,2,2,3]
 *There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.
*/
function migratoryBirds(arr) {
    let birdTypes = arr
    let countedTypes ={};
    for(const bird of birdTypes){
        if(countedTypes[bird]){
            countedTypes[bird] += 1;
        } else {
            countedTypes[bird] = 1
        }
    }
    let vals = Object.values(countedTypes)
    let highestVal = Math.max(...vals) 
    let most = [];

    
    for(num in countedTypes){
        if(countedTypes[num] === highestVal){
            most.push(num)
        }
    }
    return most[0]

}
// console.log(migratoryBirds([1, 4, 4, 4 ,5 ,3]))


//Russan julian -to- gregorian 
function dayOfProgrammer(year) {
    let nonLeap = 256 - 243 //13
    let leap = 256 - 244//12
    let JulianCal = year % 4 === 0
    let GregorianCal = year % 400 === 0 || year % 4 === 0 && year % 100 !== 0

    if(year <=1917 && JulianCal === true){
        return `${leap}.09.${year}`;
    } else if(year <= 1917 && JulianCal === false){
        return `${nonLeap}.09.${year}`;
    } else if(year >= 1919 && GregorianCal === true){
        return `${leap}.09.${year}`;
    } else if(year >= 1919 && GregorianCal === false) {
        return `${nonLeap}.09.${year}`;
    } else {
        return `${nonLeap + 13}.09.${year}`;
    }
}
//console.log(dayOfProgrammer(1918))


//if correct return bonAppetit
//else print how much he owes anna
function bonAppetit(bill, k, b) {
    bill.splice(k,1)
    
    let reduc = bill.reduce((a , b) =>  a + b, 0) / 2
     
    if(reduc === b){
        console.log("Bon Appetit") 
    }  else{
        let bOwes = b - reduc
        console.log(bOwes)
    }    

}

// console.log(bonAppetit( [3, 10, 2, 9],1, 12))


//find the number of pairs of socks
function sockMerchant(n, ar) {
    let counterArr = {}
    ar.forEach((num =>{
        if(num in counterArr){
            counterArr[num] += 1
        } else {
            counterArr[num] = 1
        }
    }))
    let pairs = []
    for(let num in counterArr){
        let even = counterArr[num] % 2 === 0
        let divided = counterArr[num] / 2
        if(even === true){
            pairs.push(divided)
        } else {
            pairs.push(Math.floor(divided))
        }
    }
    return pairs.reduce((a,b) =>  a + b, 0)
}
// console.log(sockMerchant(9 ,[10, 20, 20, 10, 10, 30, 50, 10, 20]))


//return the least pages will need to turn starting from the front or back
function pageCount(n, p) {
    let even = n % 2 === 0
    let startBack = n - p;
    let startFront = p - 1;
    let counter = 0;
    let countUp = 0;
    let countDown = n;

    if(startFront < startBack){
        while(p >= countUp){
            countUp += 2
            counter++
        }
        return counter-1
    } else if(even === true && n === p + 1){
        return 1
    } else {
        while(countDown >= p){
            countDown += -2
            counter++
        }
        return counter-1
    }
}
// console.log(pageCount(7, 4))
//37455,29835 => 3810
//6 4 => 1
//6 , 2 => 1
//5, 4 => 0
//7, 4 => 1
//6,5 =>1

//count how many vallys transversed
//count whenever number went from negative to zero
//map
function countingValleys(steps, path) {
    let counter = 0
    let vallyTransversed = 0;
    for(let i = 0; i < path.length; i++){
        if(path[i] === 'U'){
            counter++

        } else {
            path[i] === 'D'
            counter--
        }
        if(counter === -1 && path[i+1] === 'U'){
            vallyTransversed++

        }
    }
    return vallyTransversed
}
//  console.log(countingValleys(8,'UDDDUDUU'))



let cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
// Output: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]

/**
 * 
 * @param {string} domain 
 * @returns {object} 
 */
function getSplit(domain) {
    let spl = domain.split(' ')
    let num = spl[0]
    let spl1 = spl[1].split('.')
    spl1 = spl1.reverse()
    let obj = []
    for(let i = 0; i < spl1.length; i++){
    
       [obj[spl1.slice(0,i+1).reverse().join('.')] = parseInt(num)]
    }
    return obj
}

let domSplit = []//[{ google: 900, mail: 900, com: 900 },{ yahoo: 50, com: 50 },.....]
for(let i = 0; i < cpdomains.length; i++){
    let domArr =  getSplit(cpdomains[i]);
    let k = Object.keys(domArr)
    let v = Object.values(domArr)
    for(let j = 0; j < k.length; j++){
        if(k[j] in domSplit){
            domSplit[k[j]] += v[j]
        } else{
            domSplit[k[j]] = v[j]
        }
    }
}
// console.log(domSplit);

//https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function getMoneySpent(keyboards, drives, b) {
    let add = ((a,b) => a+b)
    let highest = []

    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            let added = add(keyboards[i],drives[j])
            if(added <= b){
                highest.push(added)        
            } 
        }
    }
    if(highest.length === 0){
        return -1
    } else {
        return Math.max(...highest)
    }

}
// console.log(getMoneySpent([3 ,1], [5,2 ,8], 10))



/**
 * 
 * @param {string} magazine 
 * @param {string} note 
 * All words in note MUST match Case sensitive
 */
//
function checkMagazine(magazine, note) {

    function wordCount(arr){
        let obj = {};
        for(word in arr){
            if(word in obj){
                obj[word] += 1;

            }else {
                obj[word] = 1
            }
        }
        return obj
    }

    let magCount = wordCount(magazine)
    let noteCount = wordCount(note)

    for(word in noteCount){
        let val = magCount[word]
        if(word in magCount && noteCount[word] <= val){
            continue
        } else{
            return 'No'
        }
    }

    return 'Yes'
}
//  console.log(checkMagazine([ 'two', 'times', 'three', 'is', 'not', 'four'],[ 'two' ,'times' ,'two' ,'is' ,'four' ]))

/**
 * 
 * @param {int} x represent the position of cat A
 * @param {int} y represent the position of cat B
 * @param {int} z represent the position of mouse 
 * see which cat reaches the mouse 1st if they both reach at same time return mouse
 */
function catAndMouse(x, y, z) {
    let subtract = ((a,b) => Math.abs(a - b));

    if(subtract(x,z) < subtract(y,z)){
        return ('Cat A')
    } else if (subtract(x,z) > subtract(y,z)){
        return ('Cat B')
    } else {
        return ('Mouse C')
    }
}
// console.log(catAndMouse(1,2,3))

// Given two strings, one named sub and the other str, determine if sub is a subsequence of str.
// A subsequence is a substring, but the letters don't have to be adjacent. It is formed from the
// base string by deleting some or none of the characters without affecting the relative positions 
// of the other letters.
// For example, "hen" is a subsequence of "chicken" by removing "c", "i", "c", "k"

function isSubsequence(base, sub) {
    let bSplit = base.split('')
    let subSplit = sub.split('')

    let match = []
    let matchIndex = 0
    for(let i = 0; i < subSplit.length; i++){
        for(let j = 0; j < bSplit.length; j++){
            if(subSplit[i] === bSplit[j] && bSplit.indexOf(bSplit[j]) > matchIndex){
                matchIndex = j
                match.push(bSplit[j])
            }
        }
    }


    if(match.join('') === sub){

        return true
    } else{
        return false
    }


}
// console.log(isSubsequence('chicken', 'hen')); // return true
// console.log(isSubsequence('chart', 'rat')); //return false




/**
 * return the magic square that has the least total of numbers change to make square
 * @param {array[]} s 
 * @returns int
 */
function formingMagicSquare(s) {
    let arrFlat = s.flat()
    let subtract = ((a,b) =>  Math.abs(a - b))
    let allMagic = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ]
 
    let mostMagic = 100
    for(let i = 0; i < allMagic.length+1; i++){
        let total = 0
        if( i === allMagic.length){
            return mostMagic 
        } 
        for(let j = 0; j < allMagic.length+1; j++){

            total += subtract(arrFlat[j],allMagic[i][j])

            if(j === allMagic.length){

                if(mostMagic > total){
                    mostMagic = total
                }
                
            } 
        }

    }
}
// console.log(formingMagicSquare([[4, 8, 2],[4, 5, 7],[6, 1, 6]]))


/**
 * 
 * @param {int[]} a 
 * @returns int of representing the longest subrarr i can make with the given arr
 */
function pickingNumbers(a) {
    let sorted = a.sort();
    let subtract = ((a,b) =>  Math.abs(a - b));
    let longest = 0;
    console.log(sorted); 
    let i = 0;
    let j = 1;
    

    while( i < sorted.length && j < sorted.length){
        if(subtract(a[i],a[j]) > 1){
            i = j
        } else{
            if(subtract(j,i) > longest){
                longest = subtract(j,i)
            }
        }
        j++    
    }
    return longest+1;
}
// console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))
//4 6 5 3 3 1 =>3
//1 2 2 3 1 2 =>5

function climbingLeaderboard(ranked, player) {
    let scoreRanks = []//returning all ranks
    let noDups  = [...new Set(ranked)]
    

    function remove(array, element) {
        const index = array.indexOf(element);
        array.splice(index, 1);
    }   

    function ifThere(arr, val) {
        return arr.some(arrVal => val === arrVal);
    } 

    let i = 0 
    while( i < player.length){
        if(ifThere(noDups, player[i]) === true){
            let found = noDups.find(num => num === player[i])
            let index = noDups.findIndex(num => num === found)
            scoreRanks.push(index)
            remove(noDups,player[i])

        } else {
            noDups.push(player[i])
            noDups.sort((a,b) => b - a)
            scoreRanks.push(noDups.indexOf(player[i]))
            remove(noDups,player[i])
        }//account for all her scores in 1st place
        i++
        if(i === player.length-1){
            break
        }
    } 
    return scoreRanks.map(num => num + 1)

}


// console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]))
// console.log(climbingLeaderboard([100 ,100, 50, 40, 40, 20, 10], [5 ,25 ,50 ,120]))



function splitnum(string) {//organizingContainers
    let z = []
    let x = string.split('')
    x.forEach(num => {
        z.push(parseInt(num))
    })
    return z
}

function organizingContainers(container) {

    let container1 = []
    let container2 = []
    let container3 = []

    container.forEach( num =>{
        container1.push(num[0])
        container2.push(num[1])
        container3.push(num.splice(2))
    })

    function checkIfBothEvenOrOdd(num1,num2){
        if(num1 % 2 === 0 && num2 % 2 === 0){
            return true
        } else if(num1 % 2 !== 0 && num2 % 2 !== 0){
            return true
        }
    }

    function arrFiltered(arr){
        let newArr = []
        arr.forEach((num)=>{
            if(Number.isInteger(num) === true){
                newArr.push(num)
            } 
        })
        return newArr
    }
    let x = arrFiltered(container3.flat())

    let containFlat1 = container1.flat().reduce((a,b ) => a + b, 0)
    let containFlat2 = container2.flat().reduce((a,b) => a + b, 0)
    let containFlat3 = x.reduce((a,b) => a + b, 0)
    // console.log(containFlat1,containFlat2,containFlat3)
    if(containFlat3 > 0){
        if(checkIfBothEvenOrOdd(containFlat1,containFlat2) === true && containFlat3 % 2 === 0){
            return "Possible"
        } else {
            return "Impossible"
        }
    } else {
        if(checkIfBothEvenOrOdd(containFlat1,containFlat2 ) === true && containFlat1 !== 0 || containFlat2 !== 0){
            return "Possible"
        } else {
            return "Impossible"
        }

    }

     
}

// console.log(organizingContainers([splitnum('997612619'), splitnum('934920795'),splitnum('998879231'), splitnum('999926463')])) //pos
// console.log(organizingContainers([splitnum('960369681'), splitnum('997828120'),splitnum('999792735'), splitnum('979622676')]))//impos

// //  console.log(organizingContainers([splitnum('999336263 '), splitnum('998799923')]))
// //  console.log(organizingContainers([splitnum('998799923 '), splitnum('999763019')]))




/**
 * 
 * @param {speacial characters} string 
 * @returns if the string of special chars are matched equally and inthe correct order
 */
function checkSymbol2(string) {
    if(string.length % 2 !=0 || string.length <=0) {
        return false
    }
    const halfway_idx = string.length / 2;

    opposite_symbols = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    let i=0;
    let j=string.length - 1;
    while( i < halfway_idx) {
        if( opposite_symbols[string[i]] != string[j]) {
            return false
        }
        i += 1
        j -= 1
    }
    return true
}
// console.log(checkSymbol2("{[}]"))
//  console.log(checkSymbol2("[[}}"))


/**
 * 
 * @param {*} words 
 * @param {*} chars 
 * @returns 
 */
var countCharacters = function(words, chars) {
    function getCharCount(string) {
        let count = {}
        for(let char of string){
            if(char in count){
                count[char] += 1
            } else {
                count[char] = 1
            }
        }
        return count
    }
    
    function canFormWord(word, characterCount){
    
        let wordCount = getCharCount(word)
        let wordKeys = Object.keys(wordCount)
        
        for(let wordletter of wordKeys){
            let letterCount = wordCount[wordletter]
            let charCount = characterCount[wordletter]
    
            if(charCount === undefined){
                return false
            }
            else if(letterCount > charCount){
                return false
            } 
        }
        return true
    }
    
    let validWords = []
    let characterCount = getCharCount(chars)

    for(let word of words){
        
        if(canFormWord(word,characterCount) === true){
            validWords.push(word)
        }      
    }    
    let total = 0
    validWords.forEach(word => {
        total += word.length
    })
    return total
}

/**
 * 
 * @param {array Int} arr1 
 * @param {array int} arr2 
 * subtracts index[0]'s .. then substacts index[1]
 * @returns returns the sum of both 
 */
function ManhattenDistance(arr1,arr2){
    let botharr = [arr1,arr2]
    let axisY = []
    let axisX = []
    let i = 0
    botharr.forEach((axis) => {
        axisX.push(axis[0])
        axisY.push(axis[1])
    })
    let y = axisY.reduce((b,a) => Math.abs(a - b, 0))
    let x = axisX.reduce((b,a) => Math.abs(a-b,0))
    
    return Math.abs(y + x)

}
// console.log(ManhattenDistance([2,5],[3,1]))


/**
 * 
 * @param {imt} num 
 * @returns a string with dollar sign and 2 decimals ponits
 */
function numFloat(num){
    return '$' + Number.parseFloat(num).toFixed(2);      
}


// Let's say you're given an array of stock prices, with each element being an
// integer that represents a price in dollars.
// For example: [ 10, 7, 6, 2, 9, 4 ]
// Day 1 - $10, Day 2 - $7, Day 3 $6... 
// Optimal price - $7 (Buy at $2, Sell at $9)
// Each index of the array represents a single day, and the the element at that 
// index is the stock price for that given day.
// Given the ability to only buy once and sell once, our goal is to maximize the 
// amount of profit (selling price - purchase price) that we can attain and return
// that value. Note the only caveat is that that we cannot sell a stock before we buy it.

// [9, 8, 6, 5, 3] should return 0
// [15, 5, 2, 0, 5, 8, 7, 4, 2, 10, 1] should return 10

function stockPrices(arr){
    let buy = arr[0]
    let sell = 0

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < buy){
            buy = arr[i]
        } else {
            if(arr[i] > arr[i+1]  ){
                sell = arr[i]  
            }
        }

    }
    
    profit = sell - buy
    if(profit > 0){
        return sell - buy
    }
    return 0
}
// console.log(stockPrices([ 10, 7, 6, 2, 9, 4 ]))
// console.log(stockPrices([9, 8, 6, 5, 3]))
// console.log(stockPrices([15, 5, 2, 0, 5, 8, 7, 4, 2, 10, 1]))

function equalizeArray(arr) {

    let obj = {}

    for(let num of arr){
        if(num in obj){
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    }
    let values = Object.values(obj)
    let most = Math.max(...values)
    return  arr.length - most

}
// console.log(equalizeArray([3,3,4,5,4,4,1,4]))

function queensAttack(n, k, r_q, c_q, obstacles) {
    let counter = 0

    let i = r_q
    let j = c_q
    let o = 0
    let queensPosition = [i,j]

    while (i < n || j < n){
        if(queensPosition === obstacles[o] ){
            break
        } else {
            i++
            j++
            o++
            counter++
        }
        if(queensPosition === obstacles[o] ){
            break
        } else {
            i--
            j--
            o++
            counter++
        }
        if(queensPosition === obstacles[o] || i < n+1){
            break
        } else{
            i++
            o++
            counter++
        }
        if(queensPosition === obstacles[o] || i > 0){
            break
        } else {
            i-- 
            o++
            counter++

        }
        if(queensPosition === obstacles[o] || j < n+1){
            break
        } else {
            j++
            o++
            counter++

        }
        if(queensPosition === obstacles[o] || j > 0){
            break
        } else {
            j-- 
            o++
            counter++

        }


    }
    // console.log(counter)

}
// console.log(queensAttack(5,3,4,3,[[5, 5], [4, 2], [2, 3]]))

function longestString(arr){
    let longest = arr[0]
    for(let i = 1; i< arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i]
        }
    }
    return longest

}
// console.log(longestString([]))




function mostOften(string){
    let newString = string.toUpperCase()
    let obj = {}
    for(let char of newString){
        if(char in obj){
            obj[char] += 1;

        }else{
            obj[char] = 1;

        }
    }

    return Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
}
// console.log(mostOften("ijbphCOWOAJNVQNVOHQEFBIUPWDVNVO"))



function anagram(str1, str2){
    if(str1.length != str2.length){
        return false
    }
    let str1Obj = {}
    let str2Obj = {}

    for(let charac of str1){
        if(charac in str1Obj){
            str1Obj[charac] += 1;
        } else {
            str1Obj[charac] = 1;
        }
    }
    for(let charac of str2){
        if(charac in str2Obj){
            str2Obj[charac] += 1;
        } else {
            str2Obj[charac] = 1;
        }
    }

    for(let letter in str1Obj){
        if(str1Obj[letter] != str2Obj[letter]){
            return false
        }   
    }
    return true
}
// console.log(anagram('abba','baab'))


//log_hit func
//git_hits
//called evertime
//time stamp
let hits = []

function logHit(){
    pruneHits()
    hits.push(new Date().getTime())

}

//last 5 min
function getHits(){
    pruneHits()
    let currentTime = new Date().getTime()
    let fiveMin = new Date()
    fiveMin.setMilliseconds(300000)
    let fiveMinAgo = currentTime - fiveMin

    hits.forEach(hit =>{
        let counter = 0
        if(hit <= fiveMinAgo){
            counter++
        }
    })
    return counter
}

function pruneHits(){
    let newHits = []
    let currentTime = new Date().getTime()
    let fiveMin = new Date()
    fiveMin.setMilliseconds(300000)
    let fiveMinAgo = currentTime - fiveMin

    hits.forEach(hit => {
        if(hit <= fiveMinAgo){
            newHits.push(hit)
        }
    })
   hits = newHits 
}
