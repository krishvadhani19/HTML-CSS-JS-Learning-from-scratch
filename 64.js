const fs = require('fs');
let text = fs.readFileSync("1.txt", 'utf-8')
console.log('the content of the file is: ')
console.log(text)

text = text.replace('yourself', 'myself')
console.log(text)

console.log('Creating a new file')
fs.writeFileSync('krish.txt', text)