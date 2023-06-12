class Cake {
    constructor(flavor, icing, decoration) {
        this.flavor = flavor
        this.icing = icing
        this.decoration = decoration
        this.size = 12
    }

    describe() {
        if (this.decoration == undefined) {
            return `Looks like i do not have all the ingredients needed :(`
        } else {
            return `It is a ${this.flavor} cake, with ${this.icing} frosting, and ${this.decoration}` 
        }
    }

    eat(slice) {
        this.size = this.size - slice
        return `we have ${this.size} slices of ${this.flavor} left.`
    }
}

let chocolateCake = new Cake('caramel', 'sprinkles');
let vanillaCake = new Cake('vanilal', 'buttervream', 'candy roses');
let redVelvet = new Cake('red velvet', 'vanilla', 'candy hearts')


console.log(chocolateCake.describe())
console.log(vanillaCake.describe())
console.log(redVelvet.describe())
console.log('---------- eat----------')
console.log(chocolateCake.eat(5))

// Create the eat method that accepts the slice parameter. Print to the console a description that utilizes flavor and slice. Invoke eat beneath the invocations of describe.

if (this.decoration == undefined) {
    return `Looks like i do not have all the ingredients needed :(`
} else if (this.flavor == undefined) {
    return `Looks like i do not have all the ingredients needed :(`
} else if (this.icing == undefined) {
    return `Looks like i do not have all the ingredients needed :(`
} else {
    return `It is a ${this.flavor} cake, with ${this.icing} frosting, and ${this.decoration}` 
}