function createInfoBox(wrapperDiv)
{
    const infoDiv = document.createElement("div")
    const youPressed = document.createElement("span")
    youPressed.id = "youPressed"
    const keyString = document.createElement("span")
    keyString.id = "keyString"
    keyString.className = "green"
    youPressed.innerHTML = "Press any keyboard key"
    infoDiv.appendChild(youPressed)
    infoDiv.appendChild(keyString)
    infoDiv.className = "textDiv"

    const numberDiv = document.createElement("div")
    numberDiv.className = "numberDiv green"
    numberDiv.id = "numberDiv"
    numberDiv.style.display = "none"
    
    wrapperDiv.appendChild(infoDiv)
    wrapperDiv.appendChild(numberDiv)
}

function main()
{
    const divWrapper = document.getElementById("wrapper")
    createInfoBox(divWrapper)
    document.body.addEventListener('keydown', (e) => 
    {
        const youPressed = document.getElementById("youPressed")
        youPressed.innerHTML = "You pressed "
        const keyString = document.getElementById("keyString")
        keyString.innerHTML = e.key
        const numberDiv = document.getElementById("numberDiv")
        numberDiv.style.display = "block"
        numberDiv.innerHTML = e.keyCode
    })
}

main()