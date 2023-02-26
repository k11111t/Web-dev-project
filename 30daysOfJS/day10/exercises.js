//level 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


//1
let emptySet = new Set()
console.log(emptySet)

//2
let setOf10 = new Set()
for(let i=0; i<11; i++)
{   
    setOf10.add(i)
}
console.log(setOf10)

//3
let setA = new Set(a)
setA.delete(4)
console.log(setA)

//4
let setB = new Set(b)
setB.clear()
console.log(setB)

//5
let arrayOfString = ["a","b","c","d","e"]
let setOfStrings = new Set(arrayOfString)
console.log(setOfStrings)

//6
let countryMap = new Map()
for(let country of countries)
{
    countryMap.set(country, country.length)
}
console.log(countryMap)

//level 2
//1
let union = [...a, ...b]
console.log("union", union)
let unionSet = new Set(union)
console.log(unionSet)

//2
let bSet = new Set(b)
let intersection = a.filter( element => {
    return bSet.has(element)
})
let intersectionSet = new Set(intersection)
console.log(intersectionSet)

//3
let difference = a.filter( element => {
    return !bSet.has(element)
})
let differenceSet = new Set(difference)
console.log(differenceSet)


//level 3
//1
function countLanguages(countries_data)
{
    let setOfLanguages = new Set()
    for(let country_data of countries_data)
    {
        country_data.languages.forEach(element => {
            setOfLanguages.add(element)
        })
    }
    return setOfLanguages.size
}
console.log(countLanguages(countries_data))

//2
function mostSpokenLanguages(countries_data, topN)
{
    let mapOfLanguages = new Map()
    for(let country_data of countries_data)
    {
        country_data.languages.forEach(element => {
            if(!mapOfLanguages.has(element))
            {
                mapOfLanguages.set(element, 1)
            }
            else
            {
                mapOfLanguages.set(element, mapOfLanguages.get(element) + 1)
            }
        })
    }
    
    return [...mapOfLanguages.entries()].sort((a,b) => {
        if(a[1] > b[1]) return -1
        if(a[1] < b[1]) return 1
        return 0
    }).filter((element, index, arr) => {
        return index < topN
    }).map( element => {
        return ({[element[0]]: element[1]})
    })
}
console.log(mostSpokenLanguages(countries_data, 3))
