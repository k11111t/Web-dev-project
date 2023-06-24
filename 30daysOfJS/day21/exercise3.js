//Callback

function yearBlinking() {
    const element = document.getElementById("year")
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    element.style.color = "rgb(" + red + ", " + green + ", " + blue + ")"
    // console.log(red, green, blue)
}

function dateBlinking() {
    const element = document.getElementById("date")
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    element.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"

    const date = new Date()
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDay()
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    element.innerHTML = month + " " + day + ", " + year + " " + hours + ":" + minutes + ":" + seconds
}

function colorChallenges() {
    const listItems = document.querySelectorAll("li")
    listItems.forEach( element => {
        const listItemText = element.innerHTML
        let regExDone = new RegExp('Done', 'gi')
        let regExComing = new RegExp('Coming', 'gi')
        let regExOngoing = new RegExp('Ongoing', 'gi')
        if(regExDone.test(listItemText)) element.style.backgroundColor = "green"
        if(regExComing.test(listItemText)) element.style.backgroundColor = "red"
        if(regExOngoing.test(listItemText)) element.style.backgroundColor = "yellow"
    })
}

setInterval(yearBlinking, 1000)
setInterval(dateBlinking, 1000)
colorChallenges()