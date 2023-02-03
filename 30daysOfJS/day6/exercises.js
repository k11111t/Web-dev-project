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
