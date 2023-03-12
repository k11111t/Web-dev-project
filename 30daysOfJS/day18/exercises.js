const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//level 1
//1
const printCountries = false

fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    console.log(data)
    if(printCountries)
    {
        data.forEach(element => {
            console.log(element.name)
            console.log(element.capital)
            console.log(element.languages)
            console.log(element.population)
            console.log(element.area) 
            console.log("")
        })
    }
})
.catch(reason => console.error(reason))

//level 2
//1
let catNames = []

fetch(catsAPI)
.then(response => response.json())
.then(data => {
    console.log(data)
    data.forEach(element => {
        catNames.push(element.name)
    })
})
.then(() => console.log(catNames))
.catch(reason => console.error(reason))

//level 3
//1
fetch(catsAPI)
.then(response => response.json())
.then(data => {
    let sum = 0
    let numberOfCats = 0
    data.forEach(element => {
        let weightString = element.weight.metric
        const numberPattern = /[0-9]+/g
        const matched = weightString.match(numberPattern)
        const averagePerCat = parseFloat(matched[1]) - parseFloat(matched[0])
        sum += averagePerCat
        numberOfCats++
    })
    return sum / numberOfCats
})
.then( sum => {
    console.log("Average cat weight: ", sum)
})
.catch(reason => console.error(reason))

//2
fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    let topN = 10

    let mapOfCountryArea = data.sort((a,b) => {
        if(a.area < b.area) return 1
        if(a.area > b.area) return -1
        return 0
    })
    .slice(0, topN)
    .map(element => {
        return ({[element.name] : element.area})
    })

    return mapOfCountryArea
})
.then( topTen => console.log(topTen))
.catch(reason => console.error(reason))

//3
fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    let uniqueLanguages = new Set()

    data.forEach(element => {
        element.languages.forEach(language => {
            uniqueLanguages.add(language.name)  
        })
    })

    return uniqueLanguages
})
.then(languages => console.log(languages))
.catch(reason => console.error(reason))