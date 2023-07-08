const TOP_N = 10


function setNumberOfCountries()
{
    const numOfCountries = countries_data.length
    const subtitle = document.getElementById("subtitle")
    subtitle.innerHTML = numOfCountries
}

function setGraphTitle(option)
{
    const graphTitle = document.getElementById("graph-title")
    switch(option)
    {
        case "population":
            graphTitle.innerHTML = "10 Most populated countries in the world"
            break
        case "languages":
            graphTitle.innerHTML = "10 Most spoken languages in the world"
            break
    }
}

function countMostPopulatedCountries()
{
    const worldPopulation = countries_data.reduce( (acc, cur) => { return acc + cur.population}, 0)

    return [ {"World" : worldPopulation}, ...countries_data.sort( (a,b) => {
        if(a.population > b.population) return -1
        if(a.population < b.population) return 1
        return 0
    }).map( (country_data) => {
        const population = country_data.population
        const countryName = country_data.name
        return ({[countryName]: population})
    })]
}

function countMostSpokenLanguages()
{
    let countofLanguages = new Map()
    countries_data.forEach( (country_data) => {
        country_data.languages.forEach( (language) => {
            if(!countofLanguages.has(language))
            {
                countofLanguages.set(language, 1)
            }
            else
            {
                countofLanguages.set(language, countofLanguages.get(language) + 1)
            }
        })
    })

    const uniqueLanguages = countofLanguages.size

    return  [{"Total languages" : uniqueLanguages}, ...[...countofLanguages.entries()]
            .sort( (a,b) => {
                if(a[1] > b[1]) return -1
                if(a[1] < b[1]) return 1
                return 0
            }).map( element => {
                return ({[element[0]]: element[1]})
            })]
}

function createChart(top10)
{
    const wrapperDiv = document.getElementById("graphs")
    wrapperDiv.innerHTML = ""
    const progressTable = document.createElement("div")
    progressTable.className = "table"
    
    for(let i = 0; i < top10.length; i++ )
    {
        const rowDiv = document.createElement("div")
        rowDiv.style.display = "flex"
        rowDiv.style.flexDirection = "row"
        
        //col 1
        const col1Div = document.createElement("div")
        col1Div.className = "column1"
        const countryName = Object.entries(top10[i])[0][0]
        col1Div.innerHTML = countryName

        //col 2
        const col2Div = document.createElement("div")
        col2Div.className = "column2"
        const countryPopulation = Object.entries(top10[i])[0][1]
        const width = countryPopulation * 100 / Object.entries(top10[0])[0][1]
        const progressBar = createProgressBar(width)
        col2Div.appendChild(progressBar)

        // col 3
        const col3Div = document.createElement("div")
        col3Div.className = "column3"
        col3Div.innerHTML = countryPopulation.toLocaleString()


        rowDiv.appendChild(col1Div)
        rowDiv.appendChild(col2Div)
        rowDiv.appendChild(col3Div)
        progressTable.appendChild(rowDiv)
    }

    wrapperDiv.appendChild(progressTable)
}

function createProgressBar(width)
{
    const progressBar = document.createElement("div")
    progressBar.className = "progress-bar"
    const progress = document.createElement("div")
    progress.className = "progress"
    progress.style.width = `${width}%`

    progressBar.appendChild(progress)
    return progressBar
}

function populationOnClick()
{   
    const button = document.getElementById("population-button")
    button.onclick = (e) => {
        createChart(countMostPopulatedCountries().slice(0, TOP_N))
        setGraphTitle("population")
    }
    
}   

function languageOnClick()
{
    const button = document.getElementById("languages-button")
    button.onclick = (e) => {
        createChart(countMostSpokenLanguages().slice(0, TOP_N))
        setGraphTitle("languages")
    }
}

function main()
{
    
    setNumberOfCountries()
    setGraphTitle("population")

    createChart(countMostPopulatedCountries().slice(0, TOP_N))

    populationOnClick()
    languageOnClick()
}

main()
