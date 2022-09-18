/**
 * Write a function to validate if a string of user input is a name on a VIP names list.
 *  The function should take two arguments: a string of user input and an array of VIP names.
 *  It should return a boolean true if the name is in the VIP list and false if it isn’t.
However, we want to be flexible about how we check the name. In particular:
We want the check to be case-insensitive, for example if a user enters “jane doe” and the VIP list contains “Jane Doe”, that’s still a match.
We want to ignore honorifics — if the first word in the user input ends in a period, it is an honorific
 (like “Mr.”, “Mrs.”, or “Dr.”) and not part of their actual name, so we can ignore it when checking against the VIP names list.
  For example, if a user enters “Dr. Jane Doe” and the VIP list contains “Jane Doe”, that’s still a match.
If a name in the VIP list contains a middle name, we want to accept either the full first name + middle name 
+ last name, or accept just the first name + last name (leaving out the middle name).
For example if a user enters “Jane Doe” and the VIP list contains “Jane Anne Doe”, that’s still a match. However,
 if a user enters “Jane Emma Doe” and the VIP list contains “Jane Anne Doe”, that’s not a match.
1:57
Prohibited strings
 */

function vipList(name, arr) {
    name = name.toLowerCase()

    if (name.startsWith('mr.')) {
        name = name.slice(3).toLowerCase().trim()
    } else if (name.startsWith('mrs.')) {
        name = name.slice(4).toLowerCase().trim()
    } else if (name.startsWith('dr.')) {
        name = name.slice(3).toLowerCase().trim()
    }
   
    let first_name = name.split(' ').shift()
    let last_name = name.split(' ').pop()
    
    for (let i = 0; i < arr.length; i++){
        let current_name = arr[i].toLowerCase()
        if (current_name.startsWith(first_name) && current_name.endsWith(last_name)) {
            
            if (current_name.split(' ').length === 3 && name.split(' ').length === 3) {
                let current_middle_name = current_name.split(' ')[1]
                let middle_name = name.split(' ')[1]
                
                if (current_middle_name === middle_name) {
                    return true
                } else if (middle_name === undefined) {
                    return true
                }
                return false
            }
            return true
        }
    }
    return false
 
}
// console.log(vipList('Dr. jane hafd Doe', ['john this doe', 'Jane haf Doe']))

var vip_List = ["Jane Doe", "John Doe", "Dorothy Anne Fletcher"]
console.log(vipList('jane Doe', vip_List))
console.log(vipList('Dr. jane Z. Doe', vip_List))
console.log(vipList('dorothy fletcher', vip_List))
console.log(vipList('dorothy anne fletcher', vip_List))
console.log(vipList('dr. dorothy anne fletcher', vip_List))

/**
 * Prohibited strings
Write a function that takes two arguments: a list of prohibited strings and a username,
 and returns a boolean of whether or not the username contains any of the prohibited strings.
Some important details:
The list of prohibited words will provide words in some casing, and we want to be case-insensitive in our checks.
 For example, if “darn” is a prohibited word, “darn”, “DARN” and “DaRn” are all prohibited.
Sometimes people like to make usernames that substitute numbers for letters, to try to get around a prohibited word list.
 We also want to make those substitutions prohibited. The specific letter substitutions we need to check are:
A becomes 4
E becomes 3
I becomes 1
O becomes 0
For example, if “darn” is a prohibited word, “d4rn” is also a prohibited word. If “darn” and “heck” are prohibited words, 
the username “d4rn_y0u_t0_h3ck” contains prohibited words.
*/

function prohibitedStrings(arr, userName) {
    const substitutions = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0'
    }
    
    for (let letter in substitutions ){
        if (userName.includes(substitutions[letter])) {
            userName = userName.replace(substitutions[letter], letter)
        }
    }

    for (let i = 0; i < arr.length; i++){

        if (userName.toLowerCase().startsWith(arr[i].toLowerCase()) || userName.toLowerCase().endsWith(arr[i].toLowerCase())) {
            return true
        }
    }
    return false
    

}
// console.log(prohibitedStrings(['darn', 'heck', 'hell'], 'd4rn_y0u_t0_h3ck'))