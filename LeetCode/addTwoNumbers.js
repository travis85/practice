//reverse then join
//add two together 
//take total reverse then split
// var addTwoNumbers = function(l1, l2) {
//     l1 = l1.reverse().join('')
//     l2 = l2.reverse().join('')
//     const total = parseInt(l1) + parseInt(l2)
//     let solution =  total.toString().split('').reverse()

//     return solution.map(num => parseInt(num))
// };
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))

/*
Suppose we're given a few arrays, like [1, 4], [2, 5], [7, 10], [12, 16],
 representing time intervals. The elements within the arrays represent a start time and end time of a meeting. 
 So an array "time range" of [1, 4] would mean that the event starts at 1-o'clock and ends at 4-o'clock.

Now, what if we wanted to merge any overlapping meetings? If one meeting runs into the time of another, 
we'll want to combine them into one. As such, [1, 4] and [2, 5], who overlap between 4 o'clock and 5 o'clock, would be combined into [1, 5].

For the above example of [1, 4], [2, 5], [7, 10], [12, 16], we would want to return [1, 5], [7, 10], [12, 16]. Can you write a method that will do this?
*/


//nested 
//if either num fall in middle take the lesser and the highest of the two


