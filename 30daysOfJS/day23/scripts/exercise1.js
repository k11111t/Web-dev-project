function createTableOfNumbers(containerName, controlNum)
{
    let mainDiv

    const elements = document.getElementsByClassName("numberTableDiv")
    if(elements.length > 0)
    {
        mainDiv = elements[0]
        mainDiv.innerHTML = ""
    }
    else
    {
        mainDiv = document.createElement("div")
        mainDiv.className = "numberTableDiv"
    }

    for(let i=0; i<controlNum; i++)
    {
        const num = i 
        const newDiv = document.createElement("div")
        newDiv.innerHTML = num

        newDiv.className = "numberCellDiv"

        //even
        if( num % 2 == 0 && num != 2)
        {
            newDiv.style.backgroundColor = "green"
        }
        //odd
        else
        {
            newDiv.style.backgroundColor = "orange"

            if(isPrime(parseInt(num)))
            {
                newDiv.style.backgroundColor = "red"
            }
        }

        mainDiv.appendChild(newDiv)     
    }

    containerName.appendChild(mainDiv)
}

function isPrime(n) {
    //sieveOfEratosthenes
    // Create an array of boolean values, indicating whether the number at index 'i' is prime
    let primes = new Array(n + 1).fill(true);
  
    primes[0] = primes[1] = false; // 0 and 1 are not prime
  
    // Mark multiples of each prime as non-prime
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (primes[i]) {
        for (let j = i * i; j <= n; j += i) {
          primes[j] = false;
        }
      }
    }
    return primes[n];
  }


function createInput(wrapperDiv)
{
    const inputElement = document.createElement("input")
    inputElement.id = "generateNumbersInput"
    inputElement.className = "input"
    inputElement.placeholder = "Generate more numbers"

    const buttonElement = document.createElement("button")
    buttonElement.id = "generateNumbersButton"
    buttonElement.className = "button"
    buttonElement.innerHTML = "Generate numbers"

    const row2 = document.createElement("div")
    row2.style.display = "flex"
    row2.style.flexDirection = "row"

    const row1 = document.createElement("div")
    row1.className = "errorMessage"
    row1.id = "errorMessage"

    const divElementMain = document.createElement("div")
    divElementMain.style.display = "flex"
    divElementMain.style.flexDirection = "column"


    row2.appendChild(inputElement)
    row2.appendChild(buttonElement)
    divElementMain.appendChild(row1)
    divElementMain.appendChild(row2)
    wrapperDiv.appendChild(divElementMain)
}

function eventGenerateTableOfNumbers()
{ 
    // check if input is valid
    const inputElement = document.getElementById("generateNumbersInput")
    const errorMessage = document.getElementById("errorMessage")
    const inputValue = inputElement.value
    if(!/^\d+$/.test(inputValue))
    {
        errorMessage.innerHTML = "Invalid input"
        return
    }
    
    errorMessage.innerHTML = ""

    // create table
    const wrapperElements = document.getElementsByClassName("wrapper")
    createTableOfNumbers(wrapperElements[0], parseInt(inputValue))
}

function main()
{
    const wrapperElements = document.getElementsByClassName("wrapper")
    
    //create input field
    createInput(wrapperElements[0])

    // bind the click of button to generate the table
    const buttonElement = document.getElementById("generateNumbersButton")
    const inputElement = document.getElementById("generateNumbersInput")
    buttonElement.addEventListener("click", eventGenerateTableOfNumbers)
    inputElement.addEventListener("keydown", (e) => {
        if(e.key === "Enter") eventGenerateTableOfNumbers()
    } )
}

main()