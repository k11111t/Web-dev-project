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