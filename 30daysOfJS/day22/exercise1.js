

function createTableOfNumbers(containerName)
{
    const controlNum = 100
    const mainDiv = document.getElementById(containerName)
    mainDiv.style.display = "grid"
    mainDiv.style.gridTemplateColumns = "repeat(6, 0fr)"
    mainDiv.style.gap = "3px"
    mainDiv.style.alignItems = "center"
    mainDiv.style.justifyContent = "center"

    for(let i=0; i<controlNum; i++)
    {
        const num = i 
        const newDiv = document.createElement("div")
        newDiv.innerHTML = num

        newDiv.style.width = "100px"
        newDiv.style.height = "50px"
        newDiv.style.display = "flex"
        newDiv.style.justifyContent = "center"
        newDiv.style.alignItems = "center"
        newDiv.style.color = "white"
        newDiv.style.fontSize = "30px"
        newDiv.style.fontFamily = "Calibri"

        if( num % 2 == 0 && num != 2)
        {
            newDiv.style.backgroundColor = "green"
        }
        else
        {
            if(isPrime(parseInt(num)))
            {
                newDiv.style.backgroundColor = "red"
            }
            else
            {
                newDiv.style.backgroundColor = "orange"
            }
        }

        mainDiv.appendChild(newDiv)     
    }
}

function isPrime(num)
{
    if(num == 2 || num == 3) return true
    if(num < 2) return false
    let arrayOfPrimes = []
    for(let i = 2; i < Math.ceil(Math.sqrt(num)); i++)
    {
        let isCurrentIPrime = true
        for(const prime of arrayOfPrimes)
        {
            if( i % prime == 0 )
            {
                isCurrentIPrime = false
                break
            }
        }
        if(isCurrentIPrime)
        {
            arrayOfPrimes.push(i)
            if(num%i == 0)
            {
                return false
            }
        }
    }
    return true
}

createTableOfNumbers("wrapper")