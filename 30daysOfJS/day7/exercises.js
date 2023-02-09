// level 1
//1
function fullName1()
{
return "Viet Hung Dang"
}
console.log(fullName1())

//2
function fullName(firstName, lastName)
{
return `${firstName} ${lastName}`
}
console.log(fullName('Kit', 'Dang'))

//3
function addNumbers(p1, p2)
{
return p1 + p2
}
console.log(addNumbers(1, 2))

//4
function areaOfRectangle(length, width)
{
    return length * width
}
console.log(areaOfRectangle(2,3))

//5
function perimeterOfRectangle(length, width)
{
    return 2 * (length + width)
}
console.log(perimeterOfRectangle(3, 4))

//6
function volumeOfRectPrism(length, width, height)
{
    return length * width * height
}
console.log(volumeOfRectPrism(3,4,5))

//7
function areaOfCircle(radius)
{
    return Math.PI * radius**2
}
console.log(areaOfCircle(3))

//8
function circumOfCircle(radius)
{
    return 2 * Math.PI * radius
}
console.log(circumOfCircle(3))

//9
function density(mass, volume)
{
    return mass / volume
}
console.log(density(10, 3))

//10
const speed = (d_distance, d_time) =>
{
    return d_distance / d_time
}
console.log(speed(10, 4))

//11
const weight = (mass) =>
{
    const gravity = 9.8 
    return mass * gravity
}
console.log(weight(62))

//12
function convertCelsiusToFahrenheit(oC)
{
    return (oC * 9/5) + 32
}
console.log(convertCelsiusToFahrenheit(0))

//13
function BMI(weight, height)
{
    let bmi = weight / (height**2)
    if(bmi < 18.5) return "underweight"
    if(bmi < 24.9) return "normal weight"
    if(bmi < 29.9) return "overweight"
    if(bmi > 30) return "obese"
}
console.log(BMI(62, 1.70))

//14
function checkSeason(month)
{
    let season = "Default"
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
    return season
}
console.log(checkSeason("March"))

//15
function findMax()
{
    let max = arguments[0]
    for(let i=1; i<arguments.length; i++)
    {
        if(max < arguments[i])
        {
            max = arguments[i]
        }
    }
    return max
}
console.log(findMax(0, 1, 9, 3, 4))

//level 2

//1 ax + by + c = 0
function solveLinEquation(a, b, c, x)
{
    if (b == 0)
    {
        return undefined
    }
    let y = (-a*x-c)/b
    return y
}

//2 ax^2 + bx + c = 0
function solveQuadratic(a ,b, c)
{   
    if( a == undefined || b == undefined || c == undefined )
    {
        return {}
    }
    let determinant = b**2 - 4*a*c
    if(determinant < 0)
    {
        return {}
    }
    if(determinant == 0)
    {
        return -b/(2*a)
    }
    let x1 = (-b + Math.sqrt(determinant))/(2*a)
    let x2 = (-b - Math.sqrt(determinant))/(2*a)

    return {x1, x2}
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//3 
function printArray( arr )
{
    arr.forEach(element => {
        console.log( element )    
    });
}
let arr = ["a", "b", "c"]
printArray(arr)

//4 
function showDateTime()
{
    let date = new Date()
    let day = date.getDay() > 9 ? date.getDay() : "0".concat(date.getDay())
    let month = date.getMonth() + 1 > 9 ? date.getMonth : "0".concat(date.getMonth())
    let hours = date.getHours() > 9 ? date.getHours() : "0".concat(date.getHours())
    let minutes = date.getMinutes() > 9 ? date.getMinutes() : "0".concat(date.getMinutes())

    console.log( "%s/%s/%s %s:%s", day, month, date.getFullYear(), hours, minutes )
}
showDateTime()

//5
function swapValues(x, y)
{
    let z = x
    var x = y
    var y = z
    return {x, y}
}
let x = 1
let y = 2
console.log(swapValues(x, y))

//6
function reverseArray(arr)
{
    let reversedArr = []
    for(let i = arr.length-1; i >=0; i--)
    {
        reversedArr.push(arr[i])
    }
    return reversedArr
}
let arr1 = [1, 2, 3, 4]
console.log(reverseArray(arr1))

//7
function capitalizeArray(arr)
{
    let capArr = []
    arr.forEach(element =>{
        capArr.push(element.toUpperCase())
    })
    return capArr
}
console.log(capitalizeArray(arr))

//8
function addItem(arr, item)
{
    arr.push(item)
    return arr
}
console.log(addItem(arr, "d"))

//9
function removeItem(arr, index)
{
    let headArr = arr.slice(0, index)
    let tailArr = arr.slice(index+1, arr.length)
    return headArr.concat(tailArr)
}
console.log(removeItem(arr, 2))

//10
function sumOfNumbers(number)
{
    if(number % 2 == 0) return (1 + number) * Math.ceil((number-1)/2)
    return (number) * Math.ceil(number/2)
}
console.log(sumOfNumbers(7))

//11
function sumOfOdds(number)
{
    let sum = 0
    for(let i = 1; i <= number; i++)
    {
        if( i%2 == 1)
        {
            sum += i
        }
    }
    return sum
}
console.log(sumOfOdds(5))

//12
function sumOfEven(number)
{
    let sum = 0
    for(let i = 1; i <= number; i++)
    {
        if( i%2 == 0)
        {
            sum += i
        }
    }
    return sum
}
console.log(sumOfEven(5))

//13
function evensAndOdds(number)
{
    let odds = 0
    number = number.toString()
    for(let i=0; i<number.length; i++)
    {
        if(parseInt(number[i]) % 2 == 1)
        {
            odds++
        }
    }

    console.log("odds:", odds)
    console.log("evens:", number.length-odds)
}
evensAndOdds(1112300)


//14
function sum()
{
    let sum = 0
    for(let i=0; i < arguments.length; i++)
    {
        sum += arguments[i]
    }
    return sum
}
console.log(sum(1,2,3,4,5))

//15
function randomUserIp()
{
    let firstOctet = parseInt(Math.random()*999)
    let secondOctet = parseInt(Math.random()*99)
    let thirdOctet = parseInt(Math.random()*99)
    let fourthOctet = parseInt(Math.random()*99)
    return firstOctet.toString().concat(".").concat(secondOctet).concat(".").concat(thirdOctet).concat(".").concat(fourthOctet)
}
console.log(randomUserIp())

//16
function randomMacAddress()
{
    let smallAlphaCharMin = 97 //up to 122
    const macAddressLength = 12
    let macAddress = ""
    for(let i=0; i<macAddressLength; i++)
    {
        let randNum = parseInt(Math.random()*16)
        if(randNum > 9)
        {
            randNum = String.fromCharCode(randNum + smallAlphaCharMin - 10)
        }
        randNum = randNum.toString()
        macAddress = macAddress.concat(randNum)
        if(i % 2 == 1 && i != macAddressLength-1)
        {
            macAddress = macAddress.concat(".")
        }
    }
    return macAddress
}
console.log(randomMacAddress())

//17
function randomHexaNumberGenerator()
{
    let hexNum = ""
    const smallAlphaCharMin = 97
    const hexNumLen = 6
    for(let i=0; i<hexNumLen; i++)
    {
        let randNum = parseInt(Math.random()*16)
        if(randNum > 9)
        {
            randNum = String.fromCharCode(randNum + smallAlphaCharMin - 10)
        }
        randNum = randNum.toString()
        hexNum = hexNum.concat(randNum)
    }
    return "#".concat(hexNum)
}
console.log(randomHexaNumberGenerator())

//18
function userIdGenerator()
{
    const userIdLength = 7
    let userId = ""
    const smallAlphaCharMin = 97
    const bigAlphaCharMin = 65
    const numberCharMin = 48
    const randomRange = 10 + 26 + 26

    for(let i=0; i<userIdLength; i++)
    {
        let randomNum = parseInt(Math.random()*randomRange)

        //small alphabetical char
        if(randomNum > 9 && randomNum < randomRange-26)
        {
            userId = userId.concat(String.fromCharCode(randomNum + smallAlphaCharMin - 10))
        }
        //big alphachar
        else if(randomNum >= randomRange-26)
        {
            userId = userId.concat(String.fromCharCode(randomNum + bigAlphaCharMin - 36))
        }
        else
        {
            userId = userId.concat(randomNum)
        }
    }
    return userId
}
console.log(userIdGenerator())