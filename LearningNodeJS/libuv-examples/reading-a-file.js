const fs = require('node:fs')

console.log('first')
fs.readFile('./file.txt', 'utf-8', (error, data) => {
    console.log('file contents: ', data)
})
console.log('last')