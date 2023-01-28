//level 1
let yourAge
// = parseFloat(prompt("Enter your age:"))
if(yourAge >= 18)
{
    console.log('You are old enough to drive')
}
else
{
    console.log(`You are left with ${18-yourAge} years to drive.`)
}

let myAge = 22
if(yourAge > myAge)
{
    console.log(`You are ${yourAge - myAge} older than me.`)
}
else
{
    console.log(`You are ${myAge - yourAge} younger than me.`)
}

let a = 4
let b = 3
if(a > b)
{
    console.log('a is greater than b')
}
else
{
    console.log('a is less than b')
}
a > b
    ? console.log('a is greater than b')
    : console.log('a is less than b')

let number
// = parseFloat(prompt("Enter a number:"))
number % 2 == 0
    ? console.log(`${number} is an even number.`) 
    : console.log(`${number} is an odd number`)

//level 2
let score
// = parseFloat(prompt("Enter score:"))
let mark = "F"
if(score >= 80) mark = "A" 
else if(score >= 70) mark = "B"
else if(score >= 60) mark = "C"
else if(score >= 50) mark = "D"
else mark = "F"
console.log(mark)

let month
// = prompt("Enter month:")
let season = "Autumn"
switch(month)
{
    case "September":
    case "October":
    case "November": 
        season = "Autumn"
    break
    case "December":
    case "January":
    case "February": 
        season = "Winter"
    break
    case "March":
    case "April":
    case "May": 
        season = "Spring"
    break
    case "June":
    case "July":
    case "August": 
        season = "Summer"
    break
    default:
        season = "Wrong value"
}
console.log(season)

let day
// = prompt("What is the day today?").toLowerCase()
switch(day)
{
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(`${day.charAt(0).toUpperCase().concat(day.substring(1, day.length))} is a working day.`)
    break
    case "saturday":
    case "sunday":
        console.log(`${day.charAt(0).toUpperCase().concat(day.substring(1, day.length))} is a weekend.`)
    break
    default:
        console.log(`${day} is an invalid input`)  
}

//level 3
month
= prompt("Enter a month:").toLowerCase()
let date = new Date(2100, 10, 10, 10, 10, 10, 10 )
let year = date.getFullYear()
switch(month)
{
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month.charAt(0).toUpperCase().concat(month.substring(1, month.length))} has 31 days.`)
    break
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month.charAt(0).toUpperCase().concat(month.substring(1, month.length))} has 30 days.`)
    break
    case "february":
        console.log(`February has ${ ((year%4==0 && year%100!=0) || (year%4==0 && year%400==0)) ? 29 : 28 } days.`)
    break
    default:
        console.log(`${month} is an invalid input.`)    
}