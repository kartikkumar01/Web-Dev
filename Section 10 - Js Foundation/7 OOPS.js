//Classes in JS

//Concept of classes is just a syntactical sugar after ES6(2015), Behind the scenes functional constructor, prototype, prototypal inheritance is used

//OOPS- class, extend, super, static(means instance can't access property or method), constructor

class Animal{
    //ye to same hi hai jese functional constructor banta tha
    constructor(name){
        this.name = name
    }

    //ye ese hai jese prototype me functions add karte the
    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

//ye extend vese hi hai jese (__proto__) se inherit karte the
class Dog extends Animal{
    constructor(name, breed){
        super(name) //It should be called first
        this.breed = breed
    }

    description(){
        console.log(`${this.name} is ${this.breed}`)
    }
}

let sheru = new Dog('Sheru', 'Pitbull')
console.log(sheru)
sheru.speak()
sheru.description()


class Cow extends Animal{
    constructor(name, milkQuantity){
        super(name)
        this.milkQuantity = milkQuantity
    }

    description(){
        console.log(`${this.name} gives ${this.milkQuantity} litres milk a day`)
    }

    //yaha pe instance/object is method ko acess nahi kar sakta
    static changeColor(context){
        console.log(`${context.name} color has changed!`)
    }
}

let dhenu = new Cow('Dhenu', 4)
dhenu.speak()
// dhenu.changeColor() // It will throw error 
Cow.changeColor(dhenu)
let renu = new Cow('Renu', 4)
Cow.changeColor(renu)