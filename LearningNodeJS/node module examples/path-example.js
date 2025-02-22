const path = require('node:path') // prefix is optional

// basename
path.basename(__filename) //returns index.js
path.basename(__dirname) //returns 'node module examples'

// extention name
path.extname(__filename) //returns .js
path.extname(__dirname) //returns ''

// parses the path into an object
console.log(path.parse(__filename))
//returns:
// {
// 	root: '/',
// 	dir: '/Users/kitda/Documents/GitHub/LearningNode/node modules example',
// 	base: 'index.js'
// 	ext: '.js',
// 	name: 'index'
// }

// formats the path object into a string
console.log(path.format(path.parse(__filename)))

// isAbsolute - returns a boolean
path.isAbsolute(__filename) // returns true
path.isAbsolute('./data.json') // returns false

// join - joins strings into one path
path.join('folder1', 'folder2', 'index.html') 
// returns: folder1/folder2/index.html
path.join('/folder1', 'folder2', 'index.html') 
// returns: /folder1/folder2/index.html
path.join('/folder1', 'folder2', '../index.html') 
// returns: /folder1/index.html

//resolve - resolves path into absolute path
path.resolve('folder1', 'folder2', 'index.html') 
// returns: /Users/kitda/Documents/GitHub/LearningNode/node modules example/folder1/folder2/index.html
path.resolve('/folder1', 'folder2', 'index.html') 
// returns: /folder1/folder2/index.html - using / specifies current dir
path.resolve('/folder1', '/folder2', 'index.html') 
// returns: /folder2/index.html - it will ignore the first forward slash
path.resolve('/folder1', '/folder2', '../index.html') 
// returns: /index.html
