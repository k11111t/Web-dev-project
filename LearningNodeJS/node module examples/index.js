const PizzaShop = require('./events-extended')
const DrinkMachine = require('./events-extended-2')

const pizzaShop = new PizzaShop()
const drinkMachine = new DrinkMachine()

// we attach event listeners like in the EventEmitter class
// we can wrap this in a custom function if we want
pizzaShop.on('order', (size, topping) => {
    console.log(`Order received: size: ${size} topping: ${topping}`)
    drinkMachine.serverDrink(size)
})

pizzaShop.order('large', 'toppings')
pizzaShop.displayOrderNumber()