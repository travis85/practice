
const fs = require ('fs');
const data = fs.readFileSync('animals.txt', 'utf-8')
let animalData = data.split('\n')

/*                                                                               
 * A monster has 2 parts: a head and body. The head and the body must            
 * be from different animals with the same number of legs.                                                                                                 
 * Write a function that takes as input a number of legs and returns             
 * an array of all monsters that can be made from animals with that              
 * number of legs. A monster with animal A head and animal B body is             
 * distinct from a monster with animal B head and animal A body.       
 * create_all_monsters
    *random_monster                                                                                    
 */
//return array of all that can be created 
//

class Animal{
    constructor(head, body, legs, sound) {
        this.head = head;
        this.body = body;
        this.legs = legs;
        this.sound = sound
    }
}

class Monster{
    constructor(head, body, numLegs, sound) {
        this.head = head;
        this.body = body;
        this.numLegs = numLegs;
        this.sound = sound
    }
}

let animals = []
animalData.forEach(animal => {
    const value = animal.split(',')
    animals.push(new Animal(value[0], value[0], value[2], value[3]) )
})

function makeAMonster(numOfLegs) {
    let allMonsters = []
    let possibleAnimals = []
    animals.map(animal => {
        if (Number(animal.legs) === numOfLegs) {
            possibleAnimals.push(animal)
        }
    })
    for (let i = 0; i < possibleAnimals.length; i++){
        for (let j = 0; j < possibleAnimals.length; j++){
            let sound = possibleAnimals[i].sound + possibleAnimals[j].sound
            allMonsters.push(new Monster(possibleAnimals[i].head, possibleAnimals[j].body, numOfLegs, sound))
        }
    }
    allMonsters.filter((monster) => monster.head !== monster.body)
    function random(min, max) {
        return Math.random() * (max+1 - min) + min;
    }
    return allMonsters.at(random(0, allMonsters.length))
}

console.log(makeAMonster(4))
