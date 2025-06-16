// Lexical Scoping - A function can access the variables declared in its parent function scope

//Closure - A function returning a function which carry the lexical scope of its parent funtion with it

function outer(){
    let hola = 'shola'
    return function inner(){
        console.log(hola)
    }
}

let inner = outer()
inner()