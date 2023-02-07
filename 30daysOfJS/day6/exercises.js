const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Oman',
    'Laos',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'Finland',
    'The UK',
    'Saudi Arabia',
    'The Republic of Kongo'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//level 1
// 1
let arrayOfNumbers = []
for(let i=0; i <=10; i++)
{
    arrayOfNumbers.push(i)
}
console.log(arrayOfNumbers)
arrayOfNumbers = []

let i = 0;
while(i <= 10)
{
    arrayOfNumbers.push(i)
    i++
}
console.log(arrayOfNumbers)
arrayOfNumbers = []

i = 0
do
{
    arrayOfNumbers.push(i)
    i++
}
while(i <= 10)
console.log(arrayOfNumbers)
arrayOfNumbers = []


//2
for(let i = 10; i >= 0; i--)
{
    arrayOfNumbers.push(i)
}
console.log(arrayOfNumbers)
arrayOfNumbers = []

i = 10;
while(i >= 0)
{
    arrayOfNumbers.push(i)
    i--
}
console.log(arrayOfNumbers)
arrayOfNumbers = []

i = 10
do
{
    arrayOfNumbers.push(i)
    i--
}
while(i >= 0)
console.log(arrayOfNumbers)
arrayOfNumbers = []

//3
let N = 0
for(let i = 0; i <= N; i++)
{
    console.log(i)
}

//4
let pyramidHeight = 7
for(let i = 1; i <= pyramidHeight; i++)
{
    console.log('#'.repeat(i))
}

//5
let numOfIterationsMult = 10
for(let i = 0; i <= numOfIterationsMult; i++)
{
    console.log("%d x %d = %d", i, i, i * i)
}

//6
console.log("i\ti^2\ti^3")
for(let i = 0; i <= numOfIterationsMult; i++)
{
    console.log("%d\t%d\t%d", i, i**2, i**3)
}

//7
for(let i = 0; i <= 100; i++ )
{
    if( i % 2 == 0)
    {
        console.log(i)
    }
}

//8
for(let i = 0; i <= 100; i++ )
{
    if( i % 2 == 1)
    {
        console.log(i)
    }
}

//9
let arrayOfPrimes = [2, 3]
for(let i = 4; i <= 100; i++)
{
    let isPrime = true
    for(const prime of arrayOfPrimes)
    {
        if( i % prime == 0 )
        {
            isPrime = false
            break
        }
    }
    if(isPrime)
    {
        arrayOfPrimes.push(i)
    }
}
console.log(arrayOfPrimes)

//10
let sum = 0
for(let i=0; i<=100; i++)
{
    sum += i
}
console.log(sum)

//11
let evenSum = 0
let oddSum = 0
for(let i = 0; i <= 100; i++)
{
    i % 2 == 0 ? evenSum += i : oddSum += i
}
console.log("odd sum: %d; even sum: %d", oddSum, evenSum)

//12
console.log([evenSum, oddSum])

let arrayOfRandomNumbers = []
let numberOfRandomNumbers = 5
let max = 10 //max is exclusive
let min = 0

//13
for(let i = 0; i < 5; i++)
{
    let randomNum = parseInt(Math.random()* (max - min) + min)
    arrayOfRandomNumbers.push(randomNum)
}
console.log(arrayOfRandomNumbers)
arrayOfRandomNumbers = []

//14
let contingencyCounter = 0
while(arrayOfRandomNumbers.length < numberOfRandomNumbers && contingencyCounter < 100)
{
    let randomNum = parseInt(Math.random()* (max - min) + min)
    contingencyCounter++
    if(arrayOfRandomNumbers.includes(randomNum))
    {
        continue
    }
    else
    {
        arrayOfRandomNumbers.push(randomNum)
    }
}
console.log(arrayOfRandomNumbers)

//15
let smallAlphaCharMin = 97 //up to 122
let numberCharMin = 48 //up to 57
let randomId = ""
for(let i = 0; i < 6; i++)
{
    let chooseCharOrNum = parseInt(Math.random()* (max - min) + min)
    if(chooseCharOrNum % 2 == 0)
    {
        //choose a num
        randomId = randomId.concat(String.fromCharCode(Math.random()* 10 + numberCharMin))
    }
    else
    {
        //choose a char
        randomId = randomId.concat(String.fromCharCode(Math.random()* 26 + smallAlphaCharMin))
    }
}
console.log(randomId)


//level 2
//1 generate any number of characters random id
const letRandomIdLength = 10
smallAlphaCharMin = 97 //up to 122
numberCharMin = 48 //up to 57
randomId = ""
for(let i = 0; i < letRandomIdLength; i++)
{
    let chooseCharOrNum = parseInt(Math.random()* (max - min) + min)
    if(chooseCharOrNum % 2 == 0)
    {
        //choose a num
        randomId = randomId.concat(String.fromCharCode(Math.random()* 10 + numberCharMin))
    }
    else
    {
        //choose a char
        randomId = randomId.concat(String.fromCharCode(Math.random()* 26 + smallAlphaCharMin))
    }
}
console.log(randomId)

//2 random hex number
let randomHexNumber = "#"
const randomHexNumberLength = 6
for(let i = 0; i < randomHexNumberLength; i++)
{
    let randomNum = parseInt(Math.random()* 16)
    if( randomNum > 9 )
    {
        randomHexNumber = randomHexNumber.concat(String.fromCharCode(randomNum + smallAlphaCharMin - 9))
    }
    else
    {
        randomHexNumber = randomHexNumber.concat(randomNum.toString())
    } 
}
console.log(randomHexNumber)

//3 random RGB colour
let rgbArray = [0,0,0]
for(let i = 0; i < rgbArray.length; i++)
{
    rgbArray[i] = parseInt(Math.random()* 255)
}
console.log(`rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`)

//4, 5
let capitalisedCountries = []
let countriesLengths = []
for(let country of countries)
{
    capitalisedCountries.push(country.toUpperCase())
    countriesLengths.push(country.length)
}
console.log(capitalisedCountries)
console.log(countriesLengths)

//6
let countriesInfo = []
for(let i = 0; i < countries.length; i++)
{
    countriesInfo.push([countries[i], capitalisedCountries[i].slice(0,3), countriesLengths[i] ])
}
console.log(countriesInfo)

//7 check if any country contains "land"
let landCountries = []
for(let country of countries)
{
    if(country.includes("land"))
    {
        landCountries.push(country)
    }
}
console.log(landCountries.length > 0 ? landCountries : 'All these countries are without land')

//8
let countriesEndingWithIa = []
for(let country of countries)
{
    let lastIndexPosition = country.lastIndexOf("ia")
    if( lastIndexPosition != -1 && country.length - "ia".length == lastIndexPosition)
    {
        countriesEndingWithIa.push(country)
    }
}
console.log(countriesEndingWithIa.length > 0 ? countriesEndingWithIa : 'These are countries ends without ia')

//9
max = countriesLengths[0]
let countryMaxIndex = 0
for(let i=1; i<countriesLengths.length; i++)
{
    if(max < countriesLengths[i])
    {
        max = countriesLengths[i]
        countryMaxIndex = i
    }
}
console.log("country containing the biggest number of characters ", countries[countryMaxIndex])

//10
let fiveCharsCountries = []
for(let i=0; i<countriesLengths.length; i++)
{
    if( countriesLengths[i] == 5)
    {
        fiveCharsCountries.push(countries[i])
    }
}
console.log(fiveCharsCountries)

//11
max = webTechs[0].length
let maxIndex = 0
for(let i=1; i<webTechs.length; i++)
{
    if(max < webTechs[i].length)
    {
        max = webTechs[i].length
        maxIndex = i
    }
}
console.log(webTechs[maxIndex])

//12
let webTechsInfoArray = []
for(let i = 0; i < webTechs.length; i++)
{
    webTechsInfoArray.push([webTechs[i], webTechs[i].length])
}
console.log(webTechsInfoArray)

//13
let acronym = ""
for(let mern of mernStack)
{
    acronym = acronym.concat(mern.charAt(0))
}
console.log(acronym)

//14
for(let i=0; i<webTechs.length; i++)
{
    console.log(webTechs[i])
}

//15
let fruits = ['banana', 'orange', 'mango', 'lemon']
for(let i=0; i < parseInt(fruits.length/2); i++)
{
    let tempSwapVar = fruits[i]
    fruits[i] = fruits[fruits.length-(i+1)]
    fruits[fruits.length-(i+1)] = tempSwapVar
}
console.log(fruits)

//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for(let fs of fullStack)
{
    for(let webTech of fs)
    {
        console.log(webTech)
    }
}

//level 3

//1
let countriesCopy = []
//this method avoid mutation of the original array
countriesCopy = countries.join(",")
countriesCopy = countriesCopy.split(",")
console.log(countriesCopy)

//2
let sortedCountries = []
//also avoids mutation of the original array
countries.forEach(
    (a) => sortedCountries.push(a)
)
sortedCountries = sortedCountries.sort()
console.log("sorted:", sortedCountries)

//3
let sortedWebTechs = webTechs.join(",")
sortedWebTechs = sortedWebTechs.split(",")
sortedWebTechs = sortedWebTechs.sort()
console.log(sortedWebTechs)

let sortedMernStack = mernStack.join(",")
sortedMernStack = sortedMernStack.split(",")
sortedMernStack = sortedMernStack.sort()
console.log(sortedMernStack)

//4
console.log(landCountries)

//5
console.log(countries[countryMaxIndex])

//6 - same as 4

//7
let fourCharCountries = []
countries.forEach(
    (a) => {
        if(a.length == 4)
        {
            fourCharCountries.push(a)
        }
    }
)
console.log(fourCharCountries)

//8
let twoWordCountries = []
countries.forEach(
    (a) => {
        if(a.split(" ").length >= 2)
        {
            twoWordCountries.push(a)
        }
    }
)
console.log(twoWordCountries)

//9
let reverseCountries = []
reverseCountries = countries.reverse()
reverseCountries = reverseCountries.map( (a) => a.toUpperCase())
console.log(reverseCountries)