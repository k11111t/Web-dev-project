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