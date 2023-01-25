//strings are immutalbe
let word = "string"
word[0] = "9" //expression does not change the string, beccause strings are immutable
console.log(word)

// arrays 
let arr = [1, 2, 3]
arr[0] = 0
console.log(arr)

//objects
let obj1 = {
    atr1: "N",
    atr2: 2,
    atr3: 'jingle'
}

let obj2 = {
    atr1: "N",
    atr2: 2,
    atr3: 'jingle'
}

let obj3 = obj1

console.log("comparing 2 objects by value: ", obj1 == obj2)
console.log("comparing 2 objects by reference: ", obj1 == obj3)

// Math Object - provides methods to work with numbers
/*
    different functions in Math:
    - Math.round(num)
    - Math.ceil(num)
    - Math.min(num1, num2, num3, ...)
    - Math.max(num1, num2, num3, ...)
    - Math.random() - generates a number between 0 to 0.9999
    - Math.abs(num)
    - Math.sqrt(num)
    - Math.pow(num1, num2)
    - Math.log(num)
    - Math.sin(num)
    - Math.cos(num)
    - Math.LN2
    - Math.LN10
    - Math.PI
    - Math.E
*/


// String concatenation
// using + is and old way - error prone
const firstName = "Viet Hung"
const lastName = "Dang"
let fullName = firstName + " " + lastName

console.log(fullName);

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically