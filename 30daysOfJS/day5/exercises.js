//level 1
let emptyArray = Array()

let arrayWithSixElements = Array('a', 'b', 'c','d','e','f')

let arrayLength = arrayWithSixElements.length

let firstItem =  arrayWithSixElements[0]
let lastItem = arrayWithSixElements[arrayLength-1]
let middleItem = arrayWithSixElements[parseInt(arrayLength/2)]
console.log(firstItem, middleItem, lastItem)

let mixedDataTypes = ["a", 1, true, null, '', [23, 24], { colour: 'green' }]
console.log(mixedDataTypes.length)

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

console.log(itCompanies)

console.log(itCompanies.length)

console.log(itCompanies[0], itCompanies[parseInt(itCompanies.length/2)], itCompanies[itCompanies.length-1])

itCompanies.forEach(element => {
    console.log(element.toUpperCase())
});

console.log(itCompanies.join(", "), "are big IT companies")

let company = "Facebook"
console.log(itCompanies.includes(company) ? company : `${company} is not found`)

let filteredCompanies = []
itCompanies.forEach(element => {
    let firstPositionOfO = element.indexOf('o')
    let lastPositionOfO = element.lastIndexOf('o')
    if( firstPositionOfO != -1 && lastPositionOfO != -1 && firstPositionOfO != lastPositionOfO)
    {
        filteredCompanies.push(element)
    }
});
console.log(filteredCompanies)

console.log(itCompanies.sort())

console.log(itCompanies.reverse())

console.log(itCompanies.slice(0, 3))

console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length))

console.log(itCompanies.slice(parseInt(itCompanies.length/2), parseInt(itCompanies.length/2) + 1))

console.log(itCompanies.shift()) //removes the first company

console.log(itCompanies.pop()) //removes the last company

console.log(itCompanies.splice(parseInt(itCompanies.length/2), 1)) //removes the middle company

console.log(itCompanies.splice()) //removes all companies

//LEVEL 2 - 1. Look at how to complete

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[.,]/g, '')
let splitArray = text.split(" ")
console.log(splitArray)
console.log(splitArray.length)

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")
console.log("Added Meat and Sugar:",shoppingCart)
shoppingCart = shoppingCart.join(",")
shoppingCart = shoppingCart.replace("Honey,", "")
shoppingCart = shoppingCart.split(",")
console.log("Removed Honey:", shoppingCart)
shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea"
console.log("Renamed Tea:", shoppingCart)

countries.includes("Ethiopia") ? console.log("ETHIOPIA") : countries.push("Ethioopia") 
console.log(countries)

webTechs.includes("Saas") ? console.log('Sass is a CSS preprocess') : webTechs.push("Saas")
console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAges = ages.sort()
const sortedAgesLength = sortedAges.length
const min = sortedAges[0]
console.log(min)
const max = sortedAges[sortedAgesLength-1]
console.log(max)
console.log(sortedAges[parseInt(sortedAgesLength/2)])
const meanAverage = sortedAges.reduce((a, b) => a + b, 0) / sortedAgesLength
console.log(meanAverage)
console.log(max - min)
console.log( Math.abs(min-meanAverage) - Math.abs(max-meanAverage) )

console.log(countries.slice(0, 10))

let middleCountryIndex = parseInt(countries.length/2)

if (countries.length % 2 == 0)
{
    console.log(countries[middleCountryIndex-1], countries[middleCountryIndex])
}
else
{
    console.log(countries[middleCountryIndex])
}

if (countries.length % 2 == 0)
{
    console.log(countries.slice(0, middleCountryIndex))
    console.log(countries.slice(middleCountryIndex, countries.length))
}
else
{
    console.log(countries.slice(0, middleCountryIndex+1))
    console.log(countries.slice(middleCountryIndex+1, countries.length))
}


