class Person {
	saySomething() {
    console.log('I am a person class')
  }
}

class Student extends Person {
	saySomething() {
    console.log('I am a child of the person class')
  }
}

const p = new Person()
const s = new Student()

console.log(p.saySomething())
console.log(s.saySomething())