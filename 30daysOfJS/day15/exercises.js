//level 1
//1
class Animal {
    constructor(name, age, color, legs)
    {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    getAnimalSound()
    {
        console.log("I am Malenia, Blade of Miquela")
    }
}

//level1
//2
//level2
//1
class Cat extends Animal {
    getAnimalSound()
    {
        console.log("Meow")
    }
}

class Dog extends Animal {
    getAnimalSound()
    {
        console.log("Woof")
    }
}

//level 3
//1

class Statistics {
    ages = []
    constructor(ages)
    {
        this.ages = ages
    }

    count = function()
    {
        return this.ages.length
    }

    sum = function()
    {
        return this.ages.reduce((prev, curr) => {
            return prev + curr
        }, 0)
    }

    min = function()
    {
        return this.ages.reduce((prev, curr) => {
            if(prev < curr)
                return prev
            if(prev > curr)
                return curr
            return prev
        });
    }

    max = function()
    {
        return this.ages.reduce((prev, curr) => {
            if(prev < curr)
                return curr
            if(prev > curr)
                return prev
            return prev
        });
    }

    range = function()
    {
        return this.max() - this.min()
    }

    mean = function()
    {
        return this.sum() / this.count()
    }

    median = function()
    {
        return this.ages.sort((a,b) => {
            if (a < b) return -1
            if (a > b) return 1
            return 0
        })[parseInt(this.count()/2)]
    }

    mode = function()
    {
        let countringArray = []
        for(let el of Object.entries(this.ages.reduce((acc, element) => {
            acc[element] = (acc[element] || 0) + 1
            return acc
        }, {})))
        {
            countringArray.push({["mode"]:el[0], ["count"]:el[1]})
        }

        return countringArray.sort((a,b) => {
            if(a["count"] < b["count"]) return 1
            if(a["count"] > b["count"]) return -1
            return 0
        })[0]
    }

    variance = function()
    {
        let variance = 0
        this.ages.forEach(element => {
            variance += (this.mean() - element)**2
        });
        return variance / (this.count())
    }

    std = function()
    {
        return Math.sqrt(this.variance())
    }

    freqDist = function(){
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

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let stat = new Statistics(ages)
console.log(stat.freqDist())

class PersonAccount
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = new Set()
        this.expenses = new Set()
    }
    totalIncome = function()
    {
        return Array.from(this.incomes).reduce( (prev, curr) => {
            return prev + Object.values(curr)[0]
        }, 0)
    }
    totalExpense = function()
    {
        return Array.from(this.expenses).reduce( (prev, curr) => {
            return prev + Object.values(curr)[0]
        }, 0)
    }
    accountInfo = function()
    {
        return `name: ${this.firstName} ${this.lastName}, income: ${this.totalIncome()}, expenses: ${this.totalExpense()}`
    }
    addIncome(description, newIncome)
    {
        let obj = new Object()
        obj[description] = newIncome
        this.incomes.add(obj)
    }
    addExpense = function(description, newExpense)
    {
        let obj = new Object()
        obj[description] = newExpense
        this.expenses.add(obj)
    }
    accountBalance = function()
    {
        return this.totalIncome() - this.totalExpense()
    }
}

let incomes = new Set([
    {"Cloud services": 5000},
    {"Eshop":500},
    {"Selling power":200}
])

let expenses = new Set([
    {"Company events expenses": 100},
    {"Manufacturing costs": 2000}
])

let user = new PersonAccount("Kit", "Dang")

for(let i of incomes)
{
    let [description, value] = Object.entries(i)[0]
    user.addIncome(description, value)
}
console.table(user.incomes)

for(let i of expenses)
{
    let [description, value] = Object.entries(i)[0]
    user.addExpense(description, value)
}

console.log(user.accountInfo())

