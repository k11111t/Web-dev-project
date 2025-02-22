// events module returns a class
const EventEmitter = require('node:events')

const emitter = new EventEmitter()

// attach an event listener - we are not executing the code until the events occurs
emitter.on('order-pizza', (size, topping) => {
    console.log(`Order received, pizza size: ${size}, topping: ${topping}`)
})

// we can have multiple event listeners 
emitter.on('order-pizza', (size, topping) => {
    if(size === 'large')
        console.log(`Serving extra drink`)
})

emitter.emit('order-pizza', 'large', 'mushroom')