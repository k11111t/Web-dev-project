function generateGridOfCountries(containerName)
{
    const controlNum = 100
    const mainDiv = document.getElementById(containerName)
    mainDiv.style.display = "grid"
    mainDiv.style.gridTemplateColumns = "repeat(6, 0fr)"
    mainDiv.style.gap = "3px"
    mainDiv.style.alignItems = "center"
    mainDiv.style.justifyContent = "center"

    for(let i=0; i<countries.length; i++)
    {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = countries[i].toUpperCase()

        newDiv.style.width = "100px"
        newDiv.style.height = "100px"

        newDiv.style.display = "flex"
        newDiv.style.justifyContent = "center"
        newDiv.style.alignItems = "center"
        newDiv.style.textAlign = "center"

        newDiv.style.color = "black"
        newDiv.style.fontSize = "12px"
        newDiv.style.fontFamily = "Calibri"
        newDiv.style.fontWeight = "bold"

        newDiv.style.borderStyle = "solid"
        newDiv.style.borderColor = "rgb(211, 211, 211)"
        newDiv.style.borderWidth = "1px"

        mainDiv.appendChild(newDiv)
    }
}

generateGridOfCountries("countries-grid")