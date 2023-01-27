// level 1
let firstName = "Viet Hung", lastName = "Dang" , country = "UK", city = "Manchester", age = 22, isMarried = false, year = 2022
console.log( typeof(firstName), typeof(lastName), typeof(country), typeof(city), typeof(age), typeof(isMarried), typeof(year))

console.log(10 =='10')

console.log(parseInt('9.8') == 10) //parseInt rounds down!!

console.log( 1 == 1.0 )
console.log(1 == 2)

//skipped 5 - to the last one
console.log("python".length != "jargon".length)

///skipped 6
console.log("dragon".search("on") >= 0 && "python".search("on") >= 0)

let date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())

//level 2
let base
// = parseFloat(prompt("enter base:"))
let height
// = parseFloat(prompt("enter height:"))
let area = 0.5 * base * height
console.log("The area of the triangle is ", area)

let a
// = parseFloat(prompt("enter side a:"))
let b 
// = parseFloat(prompt("enter side b:"))
let c
// = parseFloat(prompt("enter side c:"))
let perimiter = a + b + c
console.log("The perimeter of the triangle is ", perimiter)

let _length 
// = parseFloat(prompt("enter length:"))
let _width
// = parseFloat(prompt("enter width:"))
area = _length * _width
let perimeter = 2 * (_length + _width)
console.log("area of a rectangle is ", area)
console.log("perimiter of a rectangle is ", perimeter)

let radius 
// = parseFloat(prompt("enter radius:"))
area = Math.PI * radius**2
let circumference = 2 * Math.PI * radius
console.log("area of a circle is ", area)
console.log("circumference of a circle is ", circumference)

let x
// = parseFloat(prompt("enter x: "))
let y = 2 * x - 2
let slope = y / x
let x_intercept = 1     //when y is 0
let y_intercept = -2    //when x is 0
console.log("slope of a function 2*x-2 is ", slope)
console.log("x intercept is at ", `[${x_intercept}, 0]`)
console.log("y intercept is at ", `[0, ${y_intercept}]`)

let [x1, y1] = [2, 2]
let [x2, y2] = [6, 10]
let slope_2 = (y2-y1)/(x2-x1)
console.log(`slope between [${x1}, ${y1}] and [${x2}, ${y2}] is `, slope_2)

console.log(slope > slope_2 ? "slope 1 is bigger" : slope == slope_2 ? "slopes are equal" : "slope 2 is bigger" )

x
// = parseFloat(prompt("enter x"))
y = x**2 + 6 * x + 9    // (x + 3)^2
console.log("y is ", y)

let hours
// = parseFloat(prompt("Enter hours:"))
let ratePerHour
// = parseFloat(prompt("Enter rate per hour:"))
let weeklyEarning
= hours * ratePerHour
console.log("weekly earnings are ", weeklyEarning)

let _name
// = prompt("Enter name: "); console.log(_name.length > 7 ? "name is long" : "name is short")

console.log(firstName.length > lastName.length ? 
    `Your first name, ${firstName} is longer than your family name, ${lastName}`: 
    `Your first name, ${firstName} is shorter than your family name, ${lastName}`)

let myAge = 22
let yourAge = 20
console.log(myAge > yourAge ? `I am ${myAge - yourAge} years older than you` : `I am ${myAge - yourAge} years younger than you`)

let usersDoB
// = parseFloat(prompt("Enter birth year:"))
console.log(date.getFullYear() - usersDoB >= 18 ? 
    `You are ${date.getFullYear() - usersDoB}. You are old enough to drive` : 
    `You are ${date.getFullYear() - usersDoB}. You will be allowed to drive in ${18 - date.getFullYear() + usersDoB} years`)

let yearsLived
// = parseFloat(prompt("Enter number of years you live:"))
console.log(`You lived ${yearsLived * 365 * 24 * 60 * 60} seconds`)

date = new Date(2000, 10, 10, 10, 10, 10, 10)

console.log(
`${date.getFullYear()}-\
${date.getMonth() < 9 ? "0".concat(parseInt(date.getMonth()) + 1) : date.getMonth() + 1 }-\
${date.getDate() < 10 ? "0".concat(parseInt(date.getDate())) : date.getDate()} \
${date.getHours() < 10 ? "0".concat(parseInt(date.getHours())) : date.getHours()}:\
${date.getMinutes() < 10 ? "0".concat(parseInt(date.getMinutes())) : date.getMinutes()}`)

console.log(
`${date.getDate() < 10 ? "0".concat(parseInt(date.getDate())) : date.getDate()}-\
${date.getMonth() < 9 ? "0".concat(parseInt(date.getMonth()) + 1) : date.getMonth() + 1 }-\
${date.getFullYear()} \
${date.getHours() < 10 ? "0".concat(parseInt(date.getHours())) : date.getHours()}:\
${date.getMinutes() < 10 ? "0".concat(parseInt(date.getMinutes())) : date.getMinutes()}`)

console.log(
`${date.getDate() < 10 ? "0".concat(parseInt(date.getDate())) : date.getDate()}/\
${date.getMonth() < 9 ? "0".concat(parseInt(date.getMonth()) + 1) : date.getMonth() + 1 }/\
${date.getFullYear()} \
${date.getHours() < 10 ? "0".concat(parseInt(date.getHours())) : date.getHours()}:\
${date.getMinutes() < 10 ? "0".concat(parseInt(date.getMinutes())) : date.getMinutes()}`)

//level 3
console.log(
`${date.getFullYear()}-\
${date.getMonth() < 9 ? "0".concat(parseInt(date.getMonth()) + 1) : date.getMonth() + 1 }-\
${date.getDate() < 10 ? "0".concat(parseInt(date.getDate())) : date.getDate()} \
${date.getHours() < 10 ? "0".concat(parseInt(date.getHours())) : date.getHours()}:\
${date.getMinutes() < 10 ? "0".concat(parseInt(date.getMinutes())) : date.getMinutes()}`)