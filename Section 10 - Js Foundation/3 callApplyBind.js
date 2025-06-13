// call, apply and bind -> these methods are used on functions to control the context of (this) & pass arguments

let user = {
    username : 'Kartik Kumar'
}

function getUsername(greet){
    console.log(`${greet}, ${this.username}`)
}

// getUsername.call(user, 'Hi') //takes arguments as comma separated values
// getUsername.apply(user, ['Hi']) //takes arguments as array
getUsername.bind(user, 'Hi')()

//call & apply me function call hota hai
// bind me sirf bind hota hai call khud karna padta hai