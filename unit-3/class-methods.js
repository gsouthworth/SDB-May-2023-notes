/* 
    ? Class Methods
    * method is a function that lives inside of a class
    * can be used on any class instance
*/

class Car {
    constructor(make, model, year, transmission) {
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
    }

    greetDriver(driver) {
        return `Hello ${driver}, your ${this.make} is awesome!`
    }
}

let maserati = new Car("Maserati", "GranTurismo", 2015, "auto")
console.log(maserati.greetDriver("Paul"))
let porsche = new Car("Porsche", "911", 2023, "PDK")
console.log(porsche.greetDriver("Jonathan"))

/* 
    ? Inheritance
    * extends a parent class with a child class
*/

class CarForSale extends Car {
    constructor(make, model, year, transmission, mileage, price) {
        // allows access to properties and methods of a parent class
        super(make, model, year, transmission)
        this.mileage = mileage
        this.price = price
    }

    isCPO(currentYear) {
        return currentYear - this.year >= 6
            ? `Your ${this.model} is out of warranty`
            : `Your warranty is still active`
    }
}

let bmw = new CarForSale("BMW", "M3", 2008, "manual", 27000, 50000)
console.log(bmw instanceof Car)
console.log(bmw.greetDriver("Aaron"))
console.log(bmw.isCPO(2023))


/* 
    ! Callback function review
    * is a fx that is called by another function
    * called within a parameter
    * generally occurs when something happens
*/

function callBackFx() {
    return `This is a callback function`
}

function start(x) {
    return x
}

console.log(start(callBackFx()))

// const process = require("process")

// process.stdin.once("data", input => console.log("Example of callback function as anonymous arrow"))

// process.stdin.once("data", function(input) {
//     console.log("Example of a callback fx declaration")
// })

// function callback(input) {
//     console.log("example of callback fx  declaration from outside parameter window")
// }
// process.stdin.once("data", callback)

/* 
    ? Factory Functions
    * functions that accept data and return new instance of a class
*/

class Circle {
    constructor(radius) {
        typeof radius === "number"
            ? this.radius = radius
            : new Error("Radius must be a number")
    }

    circumference() {
        return (2 * Math.PI * this.radius).toFixed(2)
    }

    area() {
        return (this.radius ** 2 * Math.PI).toFixed(2)
    }
}

let myCircle = new Circle(7)
console.log(myCircle.circumference(), myCircle.area())

function circleFromDiameter(diameter) {
    return new Circle(diameter / 2)
}

let newCircle = circleFromDiameter(25)
console.log(newCircle, newCircle.circumference())

/* 
    ? Static Factory Methods
    * do not require instantiation with "new" operator
    * create an instance of our class through its method
*/

class CircleStaticFactoryFx {
    // class' method calls itself and returns new instance
    static createCircleUsingDiameter(diameter) {
        return new CircleStaticFactoryFx(diameter / 2)
    }
    constructor(radius) {
        typeof radius == "number"
            ? this.radius = radius
            : new Error("Radius must be a number")
    }
}

let diaCircle = CircleStaticFactoryFx.createCircleUsingDiameter(20)
console.log(diaCircle)

class Human {
    static generateHuman(name) {
        return new Human(name)
    }

    constructor(name) {
        this.name = name
    }
}

let aaron = Human.generateHuman("Aaron")
console.log(aaron)

