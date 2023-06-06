/* 
    ? Arrays
        * List-like object
        * prototype has methods to preform traversal and mutation operations
            * denoted by [ ]
            * hold multiple data types 
            * content can be accessed byt heir index
*/

let arr = []

console.log(arr); // creates empty array literal
console.log(Boolean(arr)) // ! Empty array returns true
console.log(Boolean("")) // empty string returns false

// ? How would you check if an array is empty?

//! Wrong
!arr ? console.log("Empty") : console.log("has contents")

// ? right
arr.length == 0 ? console.log("empty") : console.log("has stuff")


// Creating an array using Array constructor
let charcuterie = new Array("cheese", "prosciutto", "crackers")
console.log(charcuterie)


let carMake = ["BMW", "Porsche", "Maserati", "Pagani"]
console.log(carMake) // displays all content of an array
console.log(carMake[2]) // displays value of an index


// Assign
carMake[4] = "Ferrari"
console.log(carMake)

// Dynamic re-assign
carMake[carMake.length - 1] = "Audi"
console.log(carMake)

// Dynamic Append
carMake[carMake.length] = "Bugatti"
console.log(carMake)

// Reassign values
carMake[0] = "Alpina"
console.log(carMake)

// Assigning values to a different variable
let maserati = carMake[2]
console.log(maserati)

// Nesting
carMake[carMake.length] = ["Toyota", "Honda","Acura"]
console.log(carMake)

//? How to access nested array?
console.log(carMake[6][0])


//? Arrays can have many different data 

let manyDataTypes = [
    "string",
    [1, 5, 6, true],
    false,
    undefined,
    null,
    NaN,
    "some other string",
    maserati
]
console.log(manyDataTypes)

//? Data Type
console.log(typeof manyDataTypes)

//? Checking if data type is an array
console.log(manyDataTypes instanceof Array)

/*
    ! Challenge
    * create a variable names mayCohort
    * include your MySpace Top 8
    * Nest an array with instructor's name and TA's names
    * Access one person's name and reassign to their nickname
    * Access Paul's name and reassign to Pablo
    ! Spicey mode
    * create a function called yeet()
        * it takes an array
        * it removes the last entry
        * and returns a new array
        * wrap it in a new variable
*/

let mayCohort = ["Gavin", "Melissa", "Jonathan", "Collin", "Aaron", "Kyle", "Cyrus", "Austin"]

mayCohort[mayCohort.length] = ["Paul", "Henry", "Alex"]

mayCohort[mayCohort[3] = "collin's nickname"]
console.log(mayCohort)

mayCohort[8][0] = "Pablo"
console.log(mayCohort)


let funcArr = ["cat", "dog", "bird"]

function yeet() {
    let newFuncArr = funcArr.slice(funcArr.length - 1)
    return newFuncArr
}

console.log(yeet())