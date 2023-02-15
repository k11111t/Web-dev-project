// //level 1
// //1
// let dog = {}

// //2
// console.log(dog)

// //3
// dog['name'] = "Kaikai"
// dog['legs'] = 4
// dog['color'] = "red"
// dog['age'] = 3
// dog['bark'] = function(){
//   return "woof woof"  
// }

// //4
// console.log(dog.name)
// console.log(dog.legs)
// console.log(dog.color)
// console.log(dog.age)
// console.log(dog.bark())

// //5
// dog['breed'] = "Chihuahua"
// dog['getDogInfo'] = function(){
//     // return [this.name, this.legs, this.color, this.color, this.age, this.breed]
//     return Object.entries(this)
// }
// console.log(dog.getDogInfo())

// //level 2
// //1
// let max = users[Object.keys(users)[0]].skills.length
// let maxKey = Object.keys(users)[0]
// Object.keys(users).forEach(element => {
//     if(max < users[element].skills.length)
//     {
//         max = users[element].skills.length
//         maxKey = element
//     }    
// });
// console.log(maxKey)

// //2
// let loggedIn = 0
// let greaterThan50 = 0
// Object.keys(users).forEach(element => {
//     if(users[element].isLoggedIn == true)
//     {
//         loggedIn++
//     }
//     if(users[element].points >= 50)
//     {
//         greaterThan50++
//     }
// });
// console.log("logged in:", loggedIn)
// console.log("greater than or equal to 50:", greaterThan50)

// //3
// let MERNdevelopers = []
// Object.keys(users).forEach(element => {
//     if(users[element].skills.includes('MongoDB', 'Express', 'React', 'Node'))
//     {
//         MERNdevelopers.push(element)
//     }
// });
// console.log(MERNdevelopers)

// //4
// let copyUsers = Object.assign({}, users)
// let meObject = {
//         email: 'kit@kit.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 23,
//         isLoggedIn: false,
//         points: 20
// }
// copyUsers['Kit'] = meObject
// console.log(copyUsers)

// //5
// console.log(Object.keys(copyUsers))

// //6
// console.log(Object.values(copyUsers))

// //7 - there is no counties object

// //level 3
// //1
// let personalAccount = {
//     firstName: "Joe",
//     lastName: "Biden",
//     incomes: {
//         "Cloud services": 5000,
//         "Eshop":500,
//         "Selling power":200
//     },
//     expenses: {
//         "Company events expenses": 100,
//         "Manufacturing costs": 2000
//     },
//     totalIncome: function(){
//         let sum = 0
//         Object.keys(this.incomes).forEach( element => {
//             sum += this.incomes[element]
//         })
//         return sum
//     },
//     totalExpense: function(){
//         let sum = 0
//         Object.keys(this.expenses).forEach( element => {
//             sum += this.expenses[element]
//         })
//         return sum
//     },
//     accountInfo: function(){
//         return `${this.firstName} ${this.lastName}; income: ${this.totalIncome()}; expenses: ${this.totalExpense()}`
//     },
//     addIncome: function(description, amount){
//         if(this.income.hasOwnProperty(description)) return false
//         this.income[description] = amount
//         return true
//     },
//     addExpense: function(description, amount){
//         if(this.expenses.hasOwnProperty(description)) return false
//         this.expenses[description] = amount
//         return true
//     },
//     accountBalance: function(){
//         return this.totalIncome() - this.totalExpense()
//     }
// }
// console.log(personalAccount.accountInfo())
// console.log(personalAccount.addExpense("Electronics", 1000))
// console.log(personalAccount.accountBalance())

//2
let users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//2
function signUp(username)
{
    for(let i=0; i<users.length; i++)
    {
        if(users[i].username == username)
        {
            return "User already exists"
        }
    }

    let dateObj = new Date();

    let hours = dateObj.getUTCHours();
    let minutes = dateObj.getUTCMinutes();
    let day = dateObj.getUTCDate();
    let month = dateObj.getUTCMonth() + 1; 
    let year = dateObj.getUTCFullYear();

    let date = day + "/" + month + "/" + year + " "  + (hours > 12  && hours != 0? Math.abs(hours - 12) : hours) + ":" + minutes + " " + (hours > 12 && hours != 0 ? "PM" : "AM");
 
    users.push({
        _id: username.concat(parseInt(Math.random()*100)),
        username: username,
        email: 'default@info.com',
        password: '1234',
        createdAt: date,
        isLoggedIn: false
    })
    return "Success"
}

function signIn(username)
{
    for(let i=0; i<users.length; i++)
    {
        if(users[i].username != username)
        {
            continue
        }
        let password = prompt("please enter password")
        if(users[i].password != password)
        {
            return "Wrong password"
        }
        return "Logged in"
    }

    return "User not found"
}

let user = 'Kit'
console.log(signUp(user))
console.log(users)
console.log(signIn('Jack'))

//3
function rateProduct(productId, username, rating)
{
    let found = false
    products.forEach(element => {
        console.log(element["_id"])
        if(element["_id"] == productId)
        {
            element.ratings.push({ 'userId': username, 'rate': rating })
            found = true
            return
        }
    })
    return found ? "Added a review" : "Product not found"
}

function averageRating(productId)
{
    let average = -1 
    products.forEach(element => {
        if(element._id == productId)
        {
            let sum = 0
            for(let i=0; i<element.ratings.length; i++)
            {
                sum += element.ratings[i].rate
            }
            average = sum/element.ratings.length
        }
    })

    return (average == -1) ? "Product not found" : average
}

let productId = 'eedfcf'
console.log(rateProduct(productId, user, 1.5))
console.log(averageRating(productId))

//4
function likeProduct(productId, username)
{
    products.forEach(element => {
        if(element._id == productId)
        {
            let usernameIndex = element.likes.indexOf(username)
            let likes = element.likes
            if(usernameIndex == -1)
            {
                likes.push(username)
            }
            else
            {
                likes = likes.slice(0, usernameIndex).concat(likes.slice(usernameIndex+1, likes.length))
                element.likes = likes
            }
        }
    })
}
likeProduct('aegfal', 'fg12cy')
console.log(products)