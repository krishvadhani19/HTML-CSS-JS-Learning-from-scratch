console.log('Hello World')

let name = 'krish'
let name1 = 'krish1'
let name2 = 'krish2'
let name3 = 'krish3'
let name4 = 'krish4'
let name5 = 'krish5'
console.log('Krish is a good boy')
let greettext = 'Good Morning'

greet(name4, greettext)
let x = greet(name3)

// output is undefined cause there is no return value
console.log(x)

function greet(name, greettext = 'Hello Morning') {
    console.log(greettext + ' ' + name)
    console.log(name + ' is a good boy')
}

x1 = sum(1, 2, 3);
console.log('The sum is: ' + x1)

function sum(a, b, c) {
    d = a + b + c;
    console.log('number returned')
    return d;
}