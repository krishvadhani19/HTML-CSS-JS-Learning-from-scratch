let i = 0
for (i = 0; i < 3; i++) {
    console.log(i)
}

let friends = ['rohan', 'viraj', 'krish', 'aayush']

// 1
// for (i = 0; i < friends.length; i++) {
//     console.log(friends[i])
// }

// 2
// friends.forEach(function f(element) {
//     console.log(element)
// })


// 3
// for (element of friends) {
//     console.log('Heyy There ' + element)
// }

let employee = {
    name: 'krish',
    salary: 10000,
    hobby: 'workout',
}

// use this loop to iterate over objects in JS
for (key in employee) {
    console.log(`The ${key} in employee is ${employee[key]}`)
}

// while loops in JS
let x = 0
    // while (x < 4) {
    //     console.log(`${x} is less than 4`);
    //     x++;
    // }

// do while loop
let y = 0
do {
    console.log(`${y} is less than 4`);
    y++;
}
while (y < 4)