/* 
    ? Functions
    * a block of reusable code; it can:
    * take in arguments thru its paramters (doors to inside fx)
    * perform an action
    * and return a result

    ? There are two types of functions:
    * function declaration
        * hoisted
    * function expression
        * not hoisted
    
    ? Functions
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming thru the paramter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    Syntax:

    function identifier(parameter, parameter, ...) {
        function code block
        return statement
    }

*/

// Function definition
function sayHello() {
	return "Hello May Cohort";
}

// Function invocation (calling)
let catchVariableForFunction = sayHello();
console.log(catchVariableForFunction);

function sayGoodbye() {
	console.log("Goodbye");
}

sayGoodbye();

let goodbyeCatch = sayGoodbye();

console.log(goodbyeCatch);

function greetStudent(student) {
	return `Hello, ${student}`;
}

console.log(greetStudent("Dante"));
console.log(greetStudent("Tiffania"));
console.log(greetStudent("Andy"));

// Take a string and return an array

function strToArr(str) {
	let arr = [];
	for (i of str) {
		arr.push(i);
	}
	return arr;
}

let paul = strToArr("paul niemczyk");
console.log(paul);
let cyrus = strToArr("cyrus fullam");
console.log(cyrus);

/* 
    ? Function Expression
    * utilizes a variable as a placeholder

    Syntax:

    let identifier = function(params) {
        code block
        return statement
    }

*/

let nameAge = function (name, age) {
	return `Your name is ${name} and you're ${age} years old.`;
};

console.log(nameAge("Melissa", 28));

/* 
    ? Challenge
    * Create a function that will give you a result of a quadratic formula based on all of the necessary factors
    * Check if the data type is Number. If not, return, "please use whole numbers only"
    * Please return the result but also the value of the top and bottom separately
    
    -b+-sqrt(b**2 -4ac)/2a
*/

function quadraticFormula(a, b, c) {
	let sqrtResult = Math.sqrt(b ** 2 - 4 * a * c);
	if (isNaN(sqrtResult)) {
		return "Please make sure you use whole numbers which result in a positive discriminant";
	} else {
		let addResult = ((-b + sqrtResult) / 2) * a;
		let subResult = ((-b - sqrtResult) / 2) * a;
		return `The solution is ${addResult} and ${subResult}`;
	}
}

let qResult = quadraticFormula(1, -11, 24);
console.log(qResult, typeof qResult);

/* 
    ? Pythagoream Theorem Challenge
    * right triangle has three sides
    * the longest side c is calculated by taking the sum of:
    * a**2 and b**2
    * the formula is as follows c = sqrt(a**2 + b**2)
    * Create a function expression that takes two triangles sides
    * return the hypotenuse (c side)
    * hint: Math object has a .sqrt() method
    ! 37 ish

*/

let pythagoreamTheorem = function (a, b) {
	// let sideSquared = a ** 2 + b ** 2;
	// let hypotenuse = Math.sqrt(sideSquared);
	// return `The hypotenuse is ${hypotenuse}`;
	return Math.sqrt(a ** 2 + b ** 2);
};

console.log(pythagoreamTheorem(5, 7));

/* 
    ? Arrow Functions
    * introduced in ES6
    * concise way of writing functions
    * part of fx expression family
    * do not bind to .this or super (more on that in classes)
*/

/* 
    ? Concise Body Arrow Function
    * can have one or one parameter only
    * Code block must not have {}
    * return statement must be implicit
*/

let greetEveryone = () => "hello Everyone"

let greetDoctor = drName => `Hello Dr. ${drName}`

console.log(greetDoctor("Dante"))


// ? Block Body Arrow Function

let concatenateString = (str1, str2) => {
    if (typeof str1 == "string" && typeof str2 == "string") {
        return str1 + str2
    } else {
        return `You can only pass string values as arguments`
    }
}

console.log(concatenateString(227, "Niemczyk"));


// ? Immediately Invoked Function Expressions (IIFE)

(function() {
    console.log("I'm an IIFE")
})()

// FizzBuzz Challenge!
/*
    Create a function that takes a parameters called start and stop.
    Loop over numbers from start to stop
    If the number is divisible by 3, print "Fizz"
    If the number is divisible by 5, print "Buzz"
    If the number is divisible by 3 and 5, print "Fizz Buzz"
    If the number is not divisible, print the number only
    Invoke your function to make sure it works.
*/

// Reverse Words in a String

/* 
    Write a function that takes a string as input and returns the same string with the order of words reversed.

    For example, if the input string is "Hello World!", the function should return "!World Hello".

    Your task is to implement the reverseWords function and test it with different inputs.
*/
