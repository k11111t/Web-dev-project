const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS'],
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
}

let copyPerson = Object.assign({}, person)

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

const values = Object.values(copyPerson)
console.log(values)

const entries = Object.entries(copyPerson)
console.log(entries)

console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('score'))