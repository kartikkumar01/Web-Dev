let user1 = {
    username : 'Kartik Kumar'
}

let user1Age = {
    age : 20
}

//user1Age inheriting user1

// user1Age.__proto__  = user1 //older syntax
//or
Object.setPrototypeOf(user1Age, user1) //modern syntax

let user1Stream = {
    stream : 'BCA',
    __proto__ : user1Age //user1Stream inherits user1Age
}

console.log(user1Stream.username)