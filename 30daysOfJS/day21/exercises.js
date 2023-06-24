//level 1

//1
const p = document.querySelector('p')
console.log(p)

//2
const p1 = document.getElementById('first-title')
const p2 = document.getElementById('second-title')
const p3 = document.getElementById('third-title')
const p4 = document.getElementById('fourth-title')
console.log(p1, p2, p3, p4)

//3
const nodeList = document.querySelectorAll('p')
console.log(nodeList)

//4
nodeList.forEach( e => {
    console.log(e.innerText)
})

//5
p4.innerText = "Fourth Paragraph"

//6
nodeList.forEach( e => {
    e.setAttribute("class", "paragraph")
    e.setAttribute("id", "id")
})

//level 2

//1
p1.style.backgroundColor = "red"
p2.style.backgroundColor = "yellow"
p3.style.backgroundColor = "green"
p4.style.backgroundColor = "blue"

//2
for(let i=0; i < nodeList.length; i++)
{
    if(i % 2) nodeList[i].style.color = "green"
    else nodeList[i].style.color = "red"

}

//3
nodeList.forEach( e => {
    e.innerHTML = "POG"
    e.id = "ideal"
    e.className = "classy"
})