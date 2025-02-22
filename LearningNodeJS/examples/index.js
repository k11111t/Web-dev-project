const add = require('./add.js')
console.log('hello')

const sum = add(11,5)
console.log(sum)

// IIFE - immediately invoke function expression
// the scope is wrapped in a function
require('./scope1.js')
require('./scope2.js')

// module caching - the value will be John
const student = require('./student')
console.log(student.name)
student.setName('John')
console.log(student.name)
const student1 = require('./student')
console.log(student1.name)

const data = require('../data/data.json') // we can omit .json
console.log(data)