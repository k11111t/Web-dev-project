const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia', 'India', 'Indonesia', 'Vietnam', 'Phillipines', 'Taiwan', 'China']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//level 1
// //3
// countries.forEach(element => {
//     console.log(element)
// });

// //4
// names.forEach(element => {
//     console.log(element)
// })

// //5
// numbers.forEach(element => {
//     console.log(element)
// })

//6
const countriesUpperCase = countries.map(element => element.toUpperCase())
console.log(countriesUpperCase)

//7
const countriesLengths = countries.map(element => element.length )
console.log(countriesLengths)

//8
const numbersSquare = numbers.map(element => element**2)
console.log(numbersSquare)

//9
const namesUpperCase = names.map(element => element.toUpperCase())
console.log(namesUpperCase)

//10
// const productPrices = products.map(({product, price}) => ({[product] : price}))
// ??? wtf - ask someone abt this
const productPrices = products.map(element => 
    ({[element.product] : element.price})
)
//OR
// const productPrices = products.map(element => {
//     return ({[element.product] : element.price})
// })
console.log(productPrices)

//11
const countriesNoLand = countriesUpperCase.filter(element => !element.includes("LAND"))
console.log(countriesNoLand)

//12
const countriesNoSixChars = countries.filter(element => element.length != 6)
console.log(countriesNoSixChars)

//13
const countriesMoreThanSixChars = countries.filter(element => element.length >= 6)
console.log(countriesMoreThanSixChars)

//14
const countriesNotStartingWithE = countries.filter(element => element.charAt(0) != 'E')
console.log(countriesNotStartingWithE)

//15
const productsWithPrices = products.filter(element => {
    return !isNaN(parseFloat(element.price))
})
console.log(productsWithPrices)

//16
//returns only string items
function getStringList(array)
{
    return  array.filter(element => typeof element === 'string')
}

//17
const sum = numbers.reduce( (n_0, n_1 ) => n_0 + n_1 )
console.log(sum)

//18
const concatenateAllCountries =  countries.reduce((n_0, n_1) => n_0.concat(n_1))
console.log(concatenateAllCountries)

//20
const someNamesLongerThan7 = names.some(element => element.length > 7)
console.log(someNamesLongerThan7)

//21
const allCountriesContainLand = countriesUpperCase.every(element => element.includes("LAND"))
console.log(allCountriesContainLand)

//23
const firstCountryWith6Chars = countries.find(element => element.length == 6)
console.log(firstCountryWith6Chars)

//24
const firstPositionOfCountryWith6Chars =  countries.findIndex(element => element.length == 6)
console.log(firstPositionOfCountryWith6Chars)

//25
const NorwayIndex = countries.findIndex(element => element == "Norway")
console.log(NorwayIndex)

//26
const RussiaIndex = countries.findIndex(element => element == "Russia")
console.log(RussiaIndex)

//level 2

//1
const totalProductPrice = products.map(element => element.price).filter(element => !isNaN(parseFloat(element))).reduce((n_0, n_1) => n_0 + n_1)
console.log(totalProductPrice)

//2
const sumOfProductPrices = products.reduce((sum, next, currentIndex) => {
    let next_ = parseFloat(next.price)
    if(currentIndex == 1)
    {
        let first_ = parseFloat(sum.price)
        isNaN(first_) ? sum = 0 : sum = first_
    }
    if(!isNaN(next_))
    {
        return sum + next_      
    }
    else
    {
        return sum
    }
})
console.log(sumOfProductPrices)

//3
function categorizeCountries(countries, commonFactor)
{
    return countries.filter(element => element.includes(commonFactor))
}
console.log(categorizeCountries(countries, 'a'))

//4
// this was hard wtf - used mr ChatGPT
function numberOfStartingLettersInCountries(countries)
{   
    // return countries.map((element) => {
    //     return element.charAt(0)
    // }).map((element) => {
    //     return ({[element] : 1})
    // })
    let objectCount = countries.map(element => 
        element.charAt(0)
        ).reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {})
    
    return  Object.entries(objectCount).map(([key, value]) => ({ [key] : value}))
}
console.log(numberOfStartingLettersInCountries(countries))

//5
function getFirstTenCountries(countries)
{
    return countries.filter((element, index, array) => {
        return index < 10
    })
}
console.log(getFirstTenCountries(countries))

//6
function getLastTenCountries(countries)
{
    return countries.filter((element, index, array) => {
        return index < array.length && index > array.length-11
    })
}
console.log(getLastTenCountries(countries))

//7
//disgusting code!
function mostUsedStartLetter(countries)
{
    return Object.keys((numberOfStartingLettersInCountries(countries).sort((a, b) => {
        if(Object.values(a)[0] > Object.values(b)[0])
        {
            return -1
        }
        if(Object.values(a)[0] < Object.values(b)[0])
        {
            return 1
        }
        return 0
    })[0]))[0]
}
console.log(mostUsedStartLetter(countries))

//level 3

//1 - sort by name
const countriesSortedByName = (countries_data) => countries_data.sort( (a, b) => {
    if(a.name < b.name) return -1
    else if (a.name > b.name) return 1
    return 0
})
console.log(countriesSortedByName(JSON.parse(JSON.stringify(countries_data))))

//1 - sort by capital
const countriesSortedByCapital = (countries_data) => countries_data.sort( (a, b) => {
    if(a.capital < b.capital) return -1
    else if (a.capital > b.capital) return 1
    return 0
})
console.log(countriesSortedByCapital(JSON.parse(JSON.stringify(countries_data))))

//1 - sort by population
const countriesSortedByPopulation = (countries_data) => countries_data.sort( (a, b) => {
    if(a.population < b.population) return 1
    else if (a.population > b.population) return -1
    return 0
})
console.log(countriesSortedByPopulation(JSON.parse(JSON.stringify(countries_data))))

//2 - 10 most spoken languages
function mostSpokenLanguages(countries, topN)
{
    let countCountriesByLanguage = new Object ()
    countries.forEach(element => {
        element.languages.forEach( language => {
            countCountriesByLanguage[language] = (countCountriesByLanguage[language] || 0) + 1;
        })
    })

    let arrayCountriesByLanguage = Object.entries(countCountriesByLanguage).map(([key, value]) => ({ [key] : value}))
    arrayCountriesByLanguage = arrayCountriesByLanguage.sort((a, b) => {
        if(Object.values(a)[0] > Object.values(b)[0]) return -1
        if(Object.values(a)[0] < Object.values(b)[0]) return 1
        return 0
    })

    return arrayCountriesByLanguage.filter((element, index, array) => {
        return index < topN
    }).map(element => {
        return ({["country"] : Object.keys(element)[0], ["count"] : element[Object.keys(element)[0]] })
    })
}
console.log(mostSpokenLanguages(countries_data, 3))

//3 - 10 most populated countries
function mostPopulatedCountries(countries, topN)
{
    return countriesSortedByPopulation(countries).filter((element, index, array) => {
        return index < topN
    }).map(element => {
        return ({["country"] : element.name, ["population"] : element.population})
    })
}
console.log(mostPopulatedCountries(countries_data, 10))

//4
/*
    console.log('Count:', statistics.count()) // 25
    console.log('Sum: ', statistics.sum()) // 744
    console.log('Min: ', statistics.min()) // 24
    console.log('Max: ', statistics.max()) // 38
    console.log('Range: ', statistics.range() // 14
    console.log('Mean: ', statistics.mean()) // 30
    console.log('Median: ',statistics.median()) // 29
    console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
    console.log('Variance: ',statistics.var()) // 17.5
    console.log('Standard Deviation: ', statistics.std()) // 4.2
    console.log('Variance: ',statistics.var()) // 17.5
    console.log('Frequency Distribution: ',statistics.freqDist()) 
        // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/

let statistics = {
    ages: [],
    count: function(){
        return this.ages.length
    },
    sum: function(){
        return this.ages.reduce((prev, curr) => {
            return prev + curr
        }, 0)
    },
    min: function(){
        return this.ages.sort((a,b) => {
            if(a < b) return -1
            if(a > b) return 1
            return 0
        })[0]
    },
    max: function(){
        return this.ages.sort((a,b) => {
            if(a < b) return 1
            if(a > b) return -1
            return 0
        })[0]
    },
    range: function(){
        return this.max() - this.min()
    },
    mean: function(){
        return this.ages.reduce((a,b) => {
            return a + b
        }, 0)/(this.count())
    },
    median: function(){
        return this.ages.sort((a,b) => {
            if(a < b) return 1
            if(a > b) return -1
            return 0
        })[parseInt(this.ages.length/2)]
    },
    mode: function(){
        let map = new Object
        this.ages.map(element => {
            map[element] = (map[element] || 0) + 1
        })

        let countOfNumber = Object.entries(map).map(([key, value]) => ({ [key] : value}))
        return [countOfNumber.sort((a,b) => {
            if(Object.values(a)[0] < Object.values(b)[0]) return 1
            if(Object.values(a)[0] > Object.values(b)[0]) return -1
            return 0
        })[0]].map(element => {
            return ({["mode"] : parseInt(Object.keys(element)[0]), ["count"] : Object.values(element)[0]})
        })[0]
    },
    variance: function(){
        return (this.ages.reduce((acc,curr) => {
            return acc + (parseInt(curr) - this.mean())**2
        }, 0))/(this.count() - 1)
    },
    std: function(){
        return Math.sqrt(this.variance())
    },
    freqDist: function(){
        let map = new Object
        this.ages.map(element => {
            map[element] = (map[element] || 0) + 1
        })

        let countOfNumbers = Object.entries(map).map(([key, value]) => ({ [key] : value}))
        let coeficient = 100.0/countOfNumbers.reduce((acc, curr) => {
            return acc + Object.values(curr)[0]
        }, 0)
        
        return countOfNumbers.sort((a,b) => {
            if(Object.values(a)[0] < Object.values(b)[0]) return 1
            if(Object.values(a)[0] > Object.values(b)[0]) return -1
            return 0
        }).map(element => {
            return [Object.values(element)[0] * coeficient, Object.keys(element)[0]]
        })
    }
}

statistics.ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
console.log(statistics.count())
console.log(statistics.sum())
console.log(statistics.min())
console.log(statistics.max())
console.log(statistics.range())
console.log(statistics.mean())
console.log(statistics.median())
console.log(statistics.mode())
console.log(statistics.variance())
console.log(statistics.std())
console.log(statistics.freqDist())


