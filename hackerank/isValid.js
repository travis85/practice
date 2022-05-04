
function isValid(s) {
    const validObj = s.split('').reduce((prev, nxt) => { prev[nxt] = (prev[nxt] + 1) || 1; return prev;}, {})
    const values = Object.values(validObj)
    const heldNum = values[0]
    let count = 0
    let secoundCount = 0
    for(let i=0; i < values.length; i++){
        if( Math.abs(values[i]) - Math.abs(values[i+1]) === 1 ){
            count++
        } else {
            if(heldNum != values[i]){
                secoundCount++
            }
        }
    }

    if(count > 1 || secoundCount > 1){
        return 'NO'
    }
    return 'YES'

}
console.log(isValid('aabbcd'))//no
console.log(isValid('abcdefghhgfedecba'))//yes
console.log(isValid('abbac'))//yes
console.log(isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'))//yes






    // for(let i =1; i < values.length; i++){
    //     if(values[0] === values[i]){
    //         count++
    //     } else {
    //         if(Math.abs(values[0]) - Math.abs(values[i]) === 1){
    //             count += 2
               
    //         }
    //     }
    // }

    // if(count === values.length || values.length === 1 ){
    //     return 'YES'
    // } else {
    //     if(count + 1 === values.length-1){
    //         return 'YES'
    //     }
    // }
    // return 'NO'
