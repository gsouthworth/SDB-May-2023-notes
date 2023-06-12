/* 
    ? Classes
    * templates or blueprints for creating objects
    * they encapsulate data with code
    * JS is a prototype-based language with access to OOP principles
    * Classes are considered special functions. They can be defined as:
        * class declarations
        * class expressions
*/

// ? Class Declaration

class Teacher {
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name
        this.subject = subject
        this.tenure = tenure
        this.isPolyglot = isPolyglot
    }
}

// ? Create a new instance of a Teacher class
let paul = new Teacher("Paul", "SD", 3, true)
console.log(paul)
console.log(typeof paul) // returns object
console.log(paul instanceof Teacher) // returns true
console.log(paul instanceof Object) // returns true
console.log(Teacher instanceof Object) // returns true

// Can use limited object methods on the instance
console.log(Object.keys(paul), Object.values(paul))

//-------------------------------------------------------------

//? Class Expression

let House = class {
    constructor(address, bedroom, bathroom) {
        this.address = address
        this.bedroom = bedroom
        this.bathroom = bathroom
    }
}

let $1007OrangeSt = new House("1007 Orange St", 3, 2)
console.log($1007OrangeSt)