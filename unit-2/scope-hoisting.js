/* 
    ? Scope
        * Used to determine how information in different blocks of code can be accessed.

    ? Five types of scope:
        * global/window
        * block
        * function
        * module
        * lexical
*/

/* 
    ? Global Scope
        * outermost scope
        * window object when in client
        * js file when in node
        * accessible from every other scope
*/

let globalScopeVar = "This is a global scope variable"

function x () {
    console.log(globalScopeVar)
}

x()

//_---------------------------------------

/* 
    ? Function Scope
        * accessible only inside of the function
*/

function scope() {
    let y = "this is a finction scope variable"
}
scope()
// console.log(y) -> says y is not defined

//---------------------------------------------

/* 
    ? Block Scope
        * can be anywhere there are { }
*/

if (true) {
    let bsv = "this is a block scope variable"
    console.log(bsv)
}

//----------------------------------

/* 
    ? Lexical Scope
        * Varibales are accessible by their nested position
        * inner fx scope can access outer fx scope
*/

function outerFx() {
    let ofxv = "outer scope variable"

    function innerFx() {
        let ifxv = "inner socpe varibale"
        console.log(ofxv)
        return ifxv
    }
    return innerFx()
}

console.log(outerFx())

//----------------------------------

/* 
    ? Module Scope 
        * encapsulates objects nested inside of other modules or files
        * allows the in other files
*/

// Imports exports from a file and assigns to a variable
const states = require("./states")
console.log(states)

//-------------------------------------

/* 
    ? Hoisting
        * JS' parsing engine reads top to bottom, left to right
        * JS' interpreter runs the code twice
            * first, it looks for fx decelerations and VARiables  and hoists them
            * it allocated memory space to those declarations
            * this it executes the code line by line
*/

// console.log(myName) // reference error 
let myName = "Gavin Southworth"
console.log(myName)

//------------------------

// ? Function Declarations ARE hoisted

displayName("Paul")
function displayName(str) {
    console.log(`Hello ${str}`)
}
displayName("John")

//------------------------------

// ? Function Expressions ARE NOT hoisted

// capitalize("melissa") // ReferenceError
let capitalize = function(str) {
    console.log(str.toUpperCase())
}
capitalize("melissa")

function run() {
    var foo = "foo"
    let bar = "bar"
    console.log(foo, bar)
    {
        var moo = "moo"
        let baz = "baz"
        console.log(moo, baz)
    }
    // console.log(baz) // ReferenceError: scope to block
    console.log(moo) // Works: scoped to immediate function
}

run()

// global
{
    // block
    {
        // block
        var something = "This is something"
    }
}
console.log(something)
