//Q- What is the difference between the normal function and a constructor function, when both can return a object?

//A- So the main difference is that we can attach shared methods via .prototype in case of functional constructor, so every instance can access them without duplicating code.

//1) Normal function
// function createUser(name) {
//     return {
//         name,
//         greet: function () {
//             console.log("Hi " + this.name);
//         }
//     };
// }

// const u1 = createUser("A");
// const u2 = createUser("B");

// console.log(u1.greet === u2.greet); // ❌ false — each has its own copy

//2) Constructor function
// function User(name) {
//     this.name = name;
// }

// User.prototype.greet = function () {
//     console.log("Hi " + this.name);
// };

// const u1 = new User("A");
// const u2 = new User("B");

// console.log(u1.greet === u2.greet); // ✅ true — shared via prototype




