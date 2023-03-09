//level 1
//1
let firstName = "Viet Hung"
localStorage.setItem("first name", firstName)
let lastName = "Dang"
localStorage.setItem("last name", lastName)
let age = 22
localStorage.setItem("age", age)
let country = "Czech Republic"
localStorage.setItem("country", country)
let city = "Prague"
localStorage.setItem("city", city)

//level 2
//1
let student = 
{
    "first name" : "Joe",
    "last name" : "Biden",
    "age" : 80,
    "skills" : ["El presidente", "walking up the stairs", "form a sensible sentence"],
    "country" : "USA",
    "enrolled" : false
}

const JSONstudent = JSON.stringify(student)
localStorage.setItem("student", JSONstudent)

//level 3
//1
let personAccount = 
{
    firstName : "Christian",
    lastName : "Otole",
    incomes : new Set(),
    expenses : new Set(),
    totalIncome : function()
    {
        return Array.from(this.incomes).reduce( (prev, curr) => {
            return prev + Object.values(curr)[0]
        }, 0)
    },
    totalExpense : function()
    {
        return Array.from(this.expenses).reduce( (prev, curr) => {
            return prev + Object.values(curr)[0]
        }, 0)
    },
    accountInfo : function()
    {
        return `name: ${this.firstName} ${this.lastName}, income: ${this.totalIncome()}, expenses: ${this.totalExpense()}`
    },
    addIncome : function(description, newIncome)
    {
        let obj = new Object()
        obj[description] = newIncome
        this.incomes.add(obj)
    },
    addExpense : function(description, newExpense)
    {
        let obj = new Object()
        obj[description] = newExpense
        this.expenses.add(obj)
    },
    accountBalance : function()
    {
        return this.totalIncome() - this.totalExpense()
    },
    convertIncomesAndExpensesToArray : function()
    {
        this.incomes = [...this.incomes]
        this.expenses = [...this.expenses]
    },
    convertIncomesAndExpensesToSet : function()
    {
        this.incomes = new Set(this.incomes)
        this.expenses = new Set(this.expenses)
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

for(let i of incomes)
{
    let [description, value] = Object.entries(i)[0]
    personAccount.addIncome(description, value)
}

for(let i of expenses)
{
    let [description, value] = Object.entries(i)[0]
    personAccount.addExpense(description, value)
}

personAccount.convertIncomesAndExpensesToArray()

const JSONPersonAccount = JSON.stringify(personAccount, function(key, value) 
    {
        if (typeof value === 'function') return value.toString()
        return value
    })
console.log(JSONPersonAccount)
localStorage.setItem("personAccount", JSONPersonAccount)