const eightEmptyValues = Array(["a", "b"])
console.log(eightEmptyValues)

let numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.splice(1, 3, 7, 8, 9, 10))  // -> [2, 3, 4] returns the items that were removed
console.log(numbers) // [1, 7, 8, 9, 10, 5, 6]

const arrayOfArray =  [[1, 2, 3], [4, 5, 6]]
console.log(arrayOfArray[0]) // [1, 2, 3]