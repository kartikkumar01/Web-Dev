/* ek baar spiral me notes bhi dekh lene hai */
//Function Constructor - It is a function (template) that is used to create multiple objects/instances using new and this keyword.

//this(jis) -> It refers to the current context or the object which has called the function.


//new -> The new keyword is used to create a new object/instance from a constructor function 
//It does 4 things when used with constructor function:
//1) Creates an empty object {}
//2) Call the function & Sets (this) of constructor function to point to that object{}
//3) Attach the prototype with that newly created object/instance
//3) automatically returns the object/instance


function User(name, age){
    this.name = name
    this.age = age
}
User.prototype.getName = function(){
    console.log(this.name)
}
User.prototype.getAge = function(){
    console.log(this.age)
}
let user1 = new User('Kartik', 20)
console.log(user1)
