//Prototype - Prototype is an object associated with function constructors. Any properties or methods added to the constructor’s prototype are shared by all instances created using that constructor via the new keyword.

function Person(name) {
    this.name = name
}

Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
};

const p1 = new Person("Kartik");
const p2 = new Person("Riya");

p1.sayHello(); // Hello, my name is Kartik
p2.sayHello(); // Hello, my name is Riya

console.log(p1.sayHello === p2.sayHello); // method is same as it is shared among instances

//Person.prototype is the prototype object.
//sayHello is a method added to the prototype.
//All instances (p1, p2) share the same sayHello function, saving memory.
//If you add methods to the constructor directly (this.method = ...), each instance gets its own copy, which is less efficient.

