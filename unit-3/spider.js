/* 
    ! Avengers Challenge
    * create a class called Avengers
    * use properties of name, superpower, age, isDead, and keyMovie
    * create a class instance with those properties
    * create a method that logs the name and key movie together
    ! Spicey Mode
    * create a method that takes the name of the superhero
    * check it against two arrays, teamCap and teamStark
    * return which team the superhero was on as part of Civil War
    HINT: Stark: Iron Man, Tony Stark, Spider Man, Rhodes, Black Widow, Black Panther, Vision
    Captain: Captain America, Steve Rogers, Falcon, Bucky, Hawkeye, Wanda, Ant Man
*/

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name
        this.superpower = superpower
        this.age = age
        this.isDead = isDead
        this.keyMovie = keyMovie
    }

    characterGreeting() {
        return `Did you know that ${this.name} was the main character in ${this.keyMovie}`
    }

    whichTeam() {
        let teamCap = ["Captain America", "Hawkeye"]
        let teamStark = ["Iron Man", "Spider Man"]

        if (teamCap.includes(this.name)) {
            return `${this.name} is team Captain`
        } else if (teamStark.includes(this.name)) {
            return `${this.name} is Team Stark`
        } else {
            return `${this.name} is not in either of the teams`
        }
    }
}

let spiderMan = new Avengers("Spider Man", "Spider", "28", true, "Spider-Man")
let cptAmerica = new Avengers("Steve Rogers")

console.log(spiderMan.characterGreeting(), spiderMan.whichTeam())


// return teamCap.includes(this.name)
// ? `${this.name} is Team Captain`
// : teamStark.includes(this.name)
// ? `${this.name} is Team Stark`
// : `${this.name} is not in either of the teams`