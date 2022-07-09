function checkMagazine(magazine, note) {

    let noteObj = note.reduce((prev, nxt) => { prev[nxt] = (prev[nxt] + 1) || 1; return prev;}, {});

    for(let i = 0; i < magazine.length; i++){
        if(!magazine[i] in noteObj){
            console.log('No')
            return
        } else {
            noteObj[magazine[i]] -= 1
        }
    }

    for(let count in noteObj){
        if(noteObj[count] > 0){
            console.log('No')
            return
        }
    }     
    console.log('Yes')

}
// console.log(checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'],['two' ,'times', 'two', 'is', 'four']))
console.log(checkMagazine(['pgo', 'clm', 'w', 'lxkvg' ,'mwz' ,'elo' ,'bg' ,'elo' ,'lxkvg' ,'elo' ,'apgo', 'apgo' ,'w' ,'elo', 'bg'],['elo' ,'lxkvg' ,'bg' ,'mwz' ,'clm', 'w']))
// apgo clm w lxkvg mwz elo bg elo lxkvg elo apgo apgo w elo bg
// elo lxkvg bg mwz clm w

 
// function checkMagazine(magazine, note) {
//     let noteSplit = note.split(' ');
//     let magSplit = magazine.split(' ');
//     let counter = 0;

//     for(let i =0; i < magSplit.length; i++){
//         if(note.includes(magSplit[i]))
//         counter++
//     }
//     if(counter === noteSplit.length){
//         console.log('Yes') 
//     } else {
//         console.log('NO') 
//     }
// }
