function setListStyle(ul)
{
    const listStyle = ul.style
    listStyle.listStyle = "none"
    listStyle.padding = 0
    listStyle.margin = 0
    
    for(let i=0; i<ul.children.length; i++)
    {
        ul.children[i].style.padding = "2px 0px 2px 0px"
    }
}

function setCenterDivStyle(div)
{
    div.style.fontFamily = "Helvetica"
    div.style.display = "flex"
    div.style.flexDirection = "row"
    div.style.justifyContent = "center"
}

function showChallenges(divName)
{
    const divWrapper = document.createElement("div")
    const challengesList = asabenehChallenges2020["challenges"]
    for(let i=0; i<challengesList.length; i++)
    {
        const newDivMainChallenge = document.createElement("div")

        // challenge name
        const challengeNameHTMLTag = document.createElement("a")
        challengeNameHTMLTag.href = challengesList[i].githubUrl
        challengeNameHTMLTag.innerHTML = challengesList[i].name
        const newDivChallengeName = document.createElement("div")
        newDivChallengeName.appendChild(challengeNameHTMLTag)
        newDivMainChallenge.appendChild(newDivChallengeName)

        // challenge topic
        const challengeTopicsDetailsHTMLTag = document.createElement("details")
        const challengeTopicSummaryHTMLTag = document.createElement("summary")
        challengeTopicSummaryHTMLTag.innerHTML = challengesList[i].topics[0]
        const challengeTopicsListHTMLTag = document.createElement("ul")
        for(let topic of challengesList[i].topics)
        {
            const newListItem = document.createElement("li")
            newListItem.innerHTML = topic
            challengeTopicsListHTMLTag.appendChild(newListItem)
        }
        challengeTopicsDetailsHTMLTag.appendChild(challengeTopicSummaryHTMLTag)
        challengeTopicsDetailsHTMLTag.appendChild(challengeTopicsListHTMLTag)
        const newDivChallengeTopics = document.createElement("div")
        newDivChallengeTopics.appendChild(challengeTopicsDetailsHTMLTag)
        newDivMainChallenge.appendChild(newDivChallengeTopics)

        //on click:
        const onClickFunction = (event) => {
            newDivMainChallenge.style.height = "auto"
        }
        challengeTopicsDetailsHTMLTag.onclick = onClickFunction
        
        // status
        const newDivChallengeStatus = document.createElement("div")
        newDivChallengeStatus.innerHTML = challengesList[i].status
        newDivMainChallenge.appendChild(newDivChallengeStatus)
        
        // append challenge to wrapper
        divWrapper.appendChild(newDivMainChallenge)

        // styles for the challenge divs
        newDivMainChallenge.style.display = "flex"
        newDivMainChallenge.style.height = "30px"
        newDivMainChallenge.style.justifyContent = "center"
        newDivMainChallenge.style.alignItems = "center"
        newDivMainChallenge.style.padding = "25px"
        newDivMainChallenge.style.fontFamily = "Calibri"
        newDivMainChallenge.style.fontSize = "15px"
        newDivMainChallenge.style.borderRadius = "5px"

        newDivChallengeName.style.flex = 1
        newDivChallengeTopics.style.flex = 1
        newDivChallengeStatus.style.flex = 1
        newDivChallengeStatus.style.textAlign = "right"

        switch(challengesList[i].status)
        {
            case "Done":
                newDivMainChallenge.style.backgroundColor = "rgb(66, 245, 117)"
                break
            case "Ongoing":
                newDivMainChallenge.style.backgroundColor = "rgb(245, 212, 66)"
                break
            case "Coming":
                newDivMainChallenge.style.backgroundColor = "rgb(245, 72, 66)"
                break
        }
    }

    // style the wrapper div
    divWrapper.style.display = "flex"
    divWrapper.style.flexDirection = "column"
    divWrapper.style.gap = "3px"

    const mainDiv = document.getElementById(divName)
    mainDiv.appendChild(divWrapper)
}

function showHeader(divName)
{
    //main div
    const divHeader = document.createElement("div")

    //row 1
    const title = document.createElement("div")
    title.innerHTML = asabenehChallenges2020["challengeTitle"] + " in "
    const divYear = document.createElement("div")
    divYear.innerHTML = "2023"
    divYear.id = "year"
    const changeYearColor = () => 
    {   
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const divYear = document.getElementById("year")
        const date = new Date()
        divYear.innerHTML = date.getFullYear()
        divYear.style.color = `rgb(${red}, ${green}, ${blue})`
    }
    setInterval(changeYearColor, 1000)
    const row1 = document.createElement("div")
    row1.appendChild(title)
    row1.appendChild(divYear)
    divHeader.appendChild(row1)

    //row 2
    const subTitle = document.createElement("a")
    subTitle.href = asabenehChallenges2020["challenges"]
                        .filter((e) => e.name.includes('30 Days Of JavaScript'))
                        [0]["githubUrl"]
    const row2 = document.createElement("div")
    subTitle.innerHTML = asabenehChallenges2020["challengeSubtitle"]
    row2.appendChild(subTitle)
    divHeader.appendChild(row2)

    //row 3
    const changeDateColour = () => 
    {
        const date = new Date()
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDay()
        const year = date.getFullYear()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const divDate = document.getElementById("date")
        divDate.style.backgroundColor = `rgb(${red},${green},${blue})`
        divDate.innerHTML = month + " " + day + ", " + year + " " + hours + ":" + minutes + ":" + seconds
    }
    setInterval(changeDateColour, 1000)
    const row3 = document.createElement("div")
    const divDate = document.createElement("div")
    divDate.id = "date"
    row3.appendChild(divDate)
    divHeader.appendChild(row3)

    // styles - row1
    setCenterDivStyle(row1)
    row1.style.padding = "10px"

    title.style.fontSize = "30px"
    title.style.fontWeight = "bold"
    title.style.marginTop = "auto"

    divYear.style.fontSize = "70px"
    divYear.style.marginTop = "auto"
    divYear.style.paddingLeft = "10px"
    
    //styles - row2
    setCenterDivStyle(row2)
    row2.style.padding= "5px"
    row2.style.fontSize = "20px"

    //styles - row3
    setCenterDivStyle(row3)
    row3.style.padding = "10px"
    row3.style.fontSize = "20px"
    row3.style.margin = "5px"

    divDate.style.padding = "10px"


    // append everything at the end
    const mainDiv = document.getElementById(divName)
    mainDiv.appendChild(divHeader)
}

function createElementFromString(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

function showAuthor(divName)
{
    const authorInfo = asabenehChallenges2020["author"]
    const divAuthorMain = document.createElement("div")

    //row1
    const row1 = document.createElement("div")
    row1.innerHTML = authorInfo["firstName"] + " " + authorInfo["lastName"] 
    divAuthorMain.appendChild(row1)

    //row2
    const row2 = document.createElement("div")
    const socialInfo = authorInfo["socialLinks"]
    for(let i=0; i<socialInfo.length; i++)
    {
        if(socialInfo[i]["fontawesomeIcon"] === '') continue

        const url = socialInfo[i]["url"]
        const icon = createElementFromString(socialInfo[i]["fontawesomeIcon"])
        icon.onclick = () => 
        {
            window.location.href = url
        }
        row2.appendChild(icon) 
    }
    divAuthorMain.appendChild(row2)

    //row3
    const row3 = document.createElement("div")
    row3.innerHTML = authorInfo["bio"]
    divAuthorMain.appendChild(row3)

    //row4 - contains 3 divs
    const row4 = document.createElement("div")

    //col1 - titles
    const col1 = document.createElement("div")
    const listHeaderTitle = document.createElement("div")
    listHeaderTitle.innerHTML = "Titles"
    col1.appendChild(listHeaderTitle)

    const ul1 = document.createElement("ul")
    for(let i=0; i<authorInfo["titles"].length; i++)
    {
        const li = document.createElement("li")
        li.innerHTML = authorInfo["titles"][i][0] + authorInfo["titles"][i][1]
        ul1.appendChild(li)
    }
    col1.appendChild(ul1)

    //col2 - skills
    const col2 = document.createElement("div")
    const listHeaderSkills = document.createElement("div")
    listHeaderSkills.innerHTML = "Skills"
    col2.appendChild(listHeaderSkills)

    const ul2 = document.createElement("ul")
    for(let i=0; i<authorInfo["skills"].length; i++)
    {
        const li = document.createElement("li")
        li.innerHTML = '\u2705' + authorInfo["skills"][i]
        ul2.appendChild(li)
    }
    col2.appendChild(ul2)


    //col3 - qualifications
    const col3 = document.createElement("div")
    const listHeaderQualifications = document.createElement("div")
    listHeaderQualifications.innerHTML = "Qualifications"
    col3.appendChild(listHeaderQualifications)

    const ul3 = document.createElement("ul")
    for(let i=0; i<authorInfo["qualifications"].length; i++)
    {
        const li = document.createElement("li")
        const qualificationString = authorInfo["qualifications"][i] 
        li.innerHTML = (qualificationString.includes("Ongoing")) ? '\uD83D\uDCD6' + qualificationString: '\uD83C\uDF93' + qualificationString
        ul3.appendChild(li)
    }
    col3.appendChild(ul3)

    row4.appendChild(col1)
    row4.appendChild(col2)
    row4.appendChild(col3)
    divAuthorMain.appendChild(row4)

    // styles
    // style - row1
    setCenterDivStyle(row1)
    row1.style.fontSize = "30px"
    row1.style.margin = "20px"
    row1.style.fontWeight = "bold"

    // style - row2
    setCenterDivStyle(row2)
    row2.style.fontSize = "30px"
    row2.style.margin = "5px"
    Array.from(row2.children).forEach( element =>
        {
            element.style.padding = "0px 5px 0px 5px" 
        })

    // style - row3
    setCenterDivStyle(row3)
    row3.style.textAlign = "center"
    row3.style.margin = "40px 0px 40px 0px"

    // style - row4
    setCenterDivStyle(row4)
    listHeaderTitle.style.fontSize = "20px"
    listHeaderTitle.style.fontWeight = "bold"
    setListStyle(ul1)
    listHeaderSkills.style.fontSize = "20px"
    listHeaderSkills.style.fontWeight = "bold"
    setListStyle(ul2)
    listHeaderQualifications.style.fontSize = "20px"
    listHeaderQualifications.style.fontWeight = "bold"
    setListStyle(ul3)
    
    row4.style.display = "flex"
    row4.style.justifyContent = "space-between"

    // append everythign at the end
    const mainDiv = document.getElementById(divName)
    mainDiv.appendChild(divAuthorMain)
}

function showKeywords(divName)
{
    const divKeywordsMain = document.createElement("div")
    const keywords = asabenehChallenges2020["keywords"]

    const divKeywordTitle = document.createElement("div")
    divKeywordTitle.innerHTML = "Keywords"
    divKeywordsMain.appendChild(divKeywordTitle)

    const divKeywordsBubbles = document.createElement("div")
    for(let i=0; i<keywords.length; i++)
    {
        //generate random colour 
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const color = `rgb(${red}, ${green}, ${blue})`

        const keyWordBubble = document.createElement("div")
        keyWordBubble.innerHTML = "# " + keywords[i]
        divKeywordsBubbles.appendChild(keyWordBubble)
    }
    divKeywordsMain.appendChild(divKeywordsBubbles)

    //styles
    setCenterDivStyle(divKeywordsMain)
    divKeywordsMain.style.display = "block"
    divKeywordsMain.style.margin = "30px 0px 30px 0px"
    divKeywordsMain.style.height = "auto"

    divKeywordTitle.style.fontSize = "20px"
    divKeywordTitle.style.fontWeight = "bold"

    setCenterDivStyle(divKeywordsBubbles)
    divKeywordsBubbles.style.display = "flex"
    divKeywordsBubbles.style.flexWrap = "wrap"
    divKeywordsBubbles.style.justifyContent = "space-evenly"
    divKeywordsBubbles.style.width = "90%"
    divKeywordsBubbles.style.margin = "10px"
    Array.from(divKeywordsBubbles.children).forEach( e => 
        {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            e.style.width = "auto"
            e.style.height = "20px"
            e.style.backgroundColor = `rgb(${red},${green},${blue})`
            e.style.borderRadius = "20px"
            e.style.whiteSpace = "nowrap"
            e.style.fontStyle = "italic"
            e.style.margin = "2px 5px 2px 5px"
            e.style.padding = "5px 10px 5px 10px"

        })

    // append everythign at the end
    const mainDiv = document.getElementById(divName)
    mainDiv.appendChild(divKeywordsMain)
}


showHeader("wrapper")
showChallenges("wrapper")
showAuthor("wrapper")
showKeywords("wrapper")