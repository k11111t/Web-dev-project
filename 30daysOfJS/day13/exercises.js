//level 1
//1
console.table(countries)

//2
console.table(countries_data[0])

//3
console.group("g1")
console.log("Kit")
console.log("Dang")
console.groupEnd("g1")

//level 2
//1
console.assert(10 > 2 * 10, "the statement is false")

//2
console.warn("be warned, the storm is coming!")

//3
console.error("error not a number")

//level 3
//1
const numOfIterations = 100
let arr = Array(numOfIterations)
console.time("while loop")
let i = 0
while(i < numOfIterations)
{
    i++
}
console.timeEnd("while loop")

console.time("for of loop")
for(let i of arr)
{
   
}
console.timeEnd("for of loop")

console.time("forEach loop")
arr.forEach( e => {
    
})
console.timeEnd("forEach loop")