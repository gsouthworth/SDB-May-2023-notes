/* 
    ? Variables
        - Containers that sore data in memory
        - Declaration
            - starts with let, var, or const
            - cannot start with a number or characters other than $ or _
        - Initialization
            - assignment of data value
            - if no value is assigned it's undefined by default
            - can be any value or data type
            - can be reassigned (except for const)
*/

// Variable Declaration 

let firstName;
console.log(firstName);

// Variable Initialization 

firstName = "Gavin"
console.log(firstName);

let lastName = "Southworth";

// a    b   c       d
let address = " 123 Main St, Salem, MA";
// a - keyword
// b - variable identifier 
// c - assignment operator
// d - value or initializer

const ssn = "000-00-0000";
console.log(ssn);

const arr = ["chicken", "ice cream", "cereal"];
arr[3] = "potato";
console.log(arr);

/* 
    ? Coding Practices for Variables
        - be concise (ex firstName instead of userFirstName)
        - be specific
        - utilize camelCase
*/

/* 
    Challenge

    Set a few variables:
    fName, lName, houseNumber, aptNumber (if applicable)
    street, city, state, post code

    Once done, concatenate or interpolate them together into new variable to create your address stamp

    Create a new variable that utilizes all of those variable values

    Console log it

    !SPICEY MODE - assign the value of state to be lowercase but when you console log your address stamp, utilize a method to make sure it's capitalized.
*/

let fName = "Gavin";
let lName = "Southworth";
let houseNumber = "221";
let aptNumber = "2-308";
let street = "S. Rome Ave";
let city = "Tampa";
let state = "fl";
let zipCode = "33606";

let stamp; // string interpolate here
