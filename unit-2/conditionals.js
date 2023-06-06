/* 
    ? Conditionals and Logic Gates
        - Conditional statements check if an expression is truthy
        - The expression must always resolve to true
        - If it's truthy, code block executes 
        - If an expression is falsey, code block does not run
*/

/* 
    ? if statements
        - Checks if expression is true and executes code
*/

let lightSwitch = "on";

if (lightSwitch == "on") {
    console.log("the light is on!")
};

/* 
    ? else if statement
        - allows us to add additional expressions to check for
        - executed when prior condition has not been satisfied.
*/

let grade = 82;

if (grade > 98) {
    console.log("you got an A")
} else if (grade > 80) {
    console.log("you got a B")
}

/* 
    ? Else statement
        - if all else fails, execute this code
*/

if (lightSwitch) {
    console.log("the light is on");
} else if (!lightSwitch) {
    console.log("the light is off");
};

// "!" checks to see if the statement is false. 

/* 
    ? Syntax 

    if (conditionIsTrue) {
        execute this code block
    } else if (conditionIsTrue) {
        execute this code block
    } else (conditionIsTrue) {
        execute this code block
    };
*/

/* 
    ? Logical Operators NOT AND OR
        - OR operator ||
            - true if one of the conditions is true
            - ex: I will be happy if I do laundry or clean the house
        - AND operator &&
            - Will onl ybe true if both conditions are met
            - ex: I will be happy only if laundry AND clean
        - NOT operator (!)
            - opposite of the logical expression
            - flips it
            - ex: true becomes false false becomes true
*/

let laundry = true;
let cleaning = true;

if(laundry && cleaning) {
    console.log("I got all of my chores done!")
} 

if (laundry || cleaning) {
    console.log ("I got one of my tasks done")
}

// NOT example

if (!laundry) {
	console.log("The laundry is not done");
}

if (laundry != true) {
	console.log("!= or !==");
	console.log("The laundry is not done");
}

/* 
    ? ternaries
        - A quick way of creating if/else conditional
        - commonly used to check a flag
        - they work on expressions (they do not return values)
*/

let ignition = true;

if (ignition) {
    console.log("the car is on")
} else {
    console.log("car is off")
}

ignition ? console.log("car is on") : console.log("car is off");

/* 
    ? Ternary Syntax

    conditional ? code block if true : code block if false
*/

/* 
    ? Ternary Challenge

    * Use the age from earlier to check if:
    * You're under 18 you're still a teenager
    * If you're over 18 you can travel but cannot drink
    * If you're over 21 you can drink alcohol
*/

let name = 'Darth VaDeR'

name.toLowerCase() == 'darth vader' ? console.log("Noooooo! That's impossible!")
    : name.toLowerCase() == 'lex luthor' ? console.log("Be gone, you villian!!")
    : name.toLowerCase() = 'luke skywalker' ? console.log("Hello Luke Skywalker")
    : console.log(`Hello ${name}, Have we met before`)