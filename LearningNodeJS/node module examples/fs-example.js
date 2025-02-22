const fs = require('node:fs');

// sync - synchronous way to read a file
const fileContents = fs.readFileSync('./file.txt', 'utf-8')

console.log(fileContents)

const fileContentsAsync = fs.readFile('file.txt', 'utf-8', (error, data) => {
	// error = error occurred while reading the file
	// data = populated with the file contents
    if(error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

fs.writeFileSync('./greet.txt', 'Hello Friends')

async function writeFileAsync() {
    try {
        fs.writeFile('./greet.txt', ' Hello England', {flag : 'a'}, (err) => {
            if(err) {
                console.log(err)
            } else {
                console.log('File written')
            }
        })
    }
    catch(error)
    {
        console.log(error)
    }
}
