/* 
    ? JavaScript

    Founded in 1996 by Brandon Eich
    * client-side language (runs in the browser)
    * interpreted language, not compiled
    * first-class-function - functions are treated like any other variables
    * functional language
    * object-oriented language
    * prototype-based
    * imperative
    * ECMAScript - organization setting language standards
*/

/* 
    ? Comments
    * blocks of code that are not being interpreted
    * denoted by // for single-line
    * denoted by /* for multi-line
    * comments are read but not executed
    * helps students with note taking
    * helps devs to document their code
*/

/* 
    ? Console object
    * gives access to the browser or node's debugging console
    * allows developers to view output from their programs
*/

2 + 2;
console.log(2 + 2);

/* 
    ? Data Types
    Primitive
        * string
        * number
        * boolean
        * null
        * undefined
        * Not a Number (NaN)
    Reference
        * array
        * object
        * set
*/

/* 
    ? Numbers
    * any integer or decimal
*/

console.log(25);
console.log(3.14);
console.log(typeof 1776);

/* 
    ? Strings
    * primitive data type representing characters (text)
    * Enclosed by ' ', " ", ` `.
    * Strings are immutable (unable to be modified)
    * Are indexed
*/

console.log("This is text")
console.log('This is also text')
console.log(`Text using interpolation backticks`)

// String Index:
console.log("Germany"[0]) // returns G

/* 
    ? String Properties & Methods
    .length
        - Give us length of string
    .slice()
        - Returns section of a string (optional params)
    .toUpperCase()
        - Returns new string with all characters uppercase
    .toLowerCase()
        - Returns new string with all characters lowercase
*/

console.log("thisistotestlengthmethod".length);
console.log("Gavin Southworth".slice(6));

//---------------------------------------------------------
/* 
    ? Booleans:
        - Binary Value 
        - Enter true (on) or false (off)
        -examples of falsey values:
            - false
            - 0 
            - undefined
            - null
            - NaN
            - "" (empty string)
*/

/* 
    ? Null & Undefined
        - Both are falsey values
        - null = nothing
        - undefined = default value
*/

/* 
    ? Operators
        - addition (+)
        - subtract (-)
        - divide (/)
        - multiply (*)
        - exponents (**)
        - dot (.)
        - modulo (%)
        - assignment (=)
        - comparison (==)
        - strict comparison (===)
*/

// Assignment Operator (=)

    let teacher = "Paul";

// Comparison Operator (==)

    console.log("paul" == "Paul"); // returns false 

// Strict Comparison (===)

    console.log(2 == "2") // returns true
    console.log(2 === "2") // returns false

/* 
    ? Type Coercion 
        - JS is a weakly-typed programming language
        - doesn't require type definition
        - comparison operator preforms type coercion before resolving expression
        - we can usee strict equality to avoid type coercion
*/

console.log(2 + "2");
/* 
    1. in order to satisfy the following expression
    2. js coerces number data type into string data type
    3. two strings are concatenated
*/
console.log(typeof (2 + "2"));

// ! know what type coercion is but DON'T USE IT!

/* 
    ? Modulo (%)
    * check for the remainder of long division
*/

console.log(12 % 3);
console.log(12 % 5);

/* 
    ? Expressions
    * unprocessed values grouped using the ( )
    * evaluated to be truthy or falsey
    * expressions evaluate
*/

console.log(Boolean(2 == 2));
console.log(Boolean("Paul" == "paul"));

/* 
    ? Statements 
        - keyword
        - expression 
        - code block
        - Statements evaluate and execute code block when invoked

        Ex:
            if (true) {
                run this code
            }
*/




