/* 
    ? Objects
        * Containers for values in JS Object Notation format (JSON)
        * exists as a string
        * Denoted by { }
        * not indexable
        * comma separated key-value pairs || properties: values
        * has properties and methods
            * .property (ex. .length)
            * .method() (ex. .toUpperCase())
        * has .this keyword
*/

//? Object Literal Creation

let obj = {}
console.log(obj) 
console.log(typeof obj)

let student = new Object({
    // property: value,
    // key, values,
    name: "Melissa",
    age: 24,
    isTeacher: true,
    cohort: "sdb-may-23"
})

console.log(student)

let bentley = {
    species: "dog",
    color: "cow",
    spayedNeutered: true,
    breed: "olde english bulldog",
    weight: 78,
    favoriteActivity: ["farting", "fetching", "sleeping"]
}

// Displays in table
//console.table(bentley)


//? Accessing properties and values

// Accessing using dot notation
console.log(bentley.weight)

// Access using keys
console.log(bentley["species"])

// Viewing objects keys and values
console.log(Object.keys(bentley))
    // returns array of object keys
console.log(Object.values(bentley))
    // returns array of object values


    /* 
    ! Challenge
    * How would you iterate over Bentley's favorite activity?
    * HINT: you can use forEach
*/

bentley.favoriteActivity.forEach(act => console.log(act))

//? Adding properties and values 

let car = {
    make: "BMW",
    model: "M5",
    mileage: 27344
}

car.chassis = "F10"
console.log(car)
car["transmission"] = "DCT"
console.log(car)

//? Modifying properties and values
car.mileage = 38945
console.log(car)

//? Other way of modification
/* 
    1. Reassign property
    2. assign new value to new property
    3. delete old property
*/

car["make"] = car["manufacturer"]
console.log(car)
car.manufacturer = "BMW"
delete car.make
console.log(car)


/* 
    * Makeshift example of a database and an incoming object
    * Matching passwords between db and incoming object
*/

let incoming = {
    username: "gsouthworth",
    password: "testPassword"
}

let db = [
    {username: "gsouthworth", password: "testPassword"},
    {username: "thisName", password: "testPassword34"},
    {username: "thatName", password: "test34Password"},
]

let login = (request) => {
    // 1. Find the user looping over our db, and if found, store in a variable
    let foundUser = db.filter(u => u.username === request.username)
    // 2. Does user exist? (are we getting [ {} ] or [ ])
    if (foundUser.length === 0) {
        // code if [ ]
        console.log("User not found")
    } else {
        // code if [ {} ]
        foundUser[0].password === request.password
        ? console.log("User logged in")
        : console.log("Incorrect password")
    }
}

login(incoming)


let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Flying"},
                { episode: 3, episodeName: "Tahani Al-Jamil"},
                { episode: 4, episodeName: "Jason Mendoza"},
                { episode: 5, episodeName: "Category 55 Emergency"},
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great"},
                { episode: 2, episodeName: "Dance Dance Resolution"},
                { episode: 3, episodeName: "Team Cockroach"},
                { episode: 4, episodeName: "Existential Crisis"},
                { episode: 5, episodeName: "The Trolley Problem"},
            ]
        }
    },
    isAvailable: true
}

/* 
    ! Challenge
    * console log the "Pilot"
    * add a season 3
    * season 3 will be an object with properties of numberOfEpisodes & episodeInfo
    * episodeInfo will be an array of 2 objects
    * two objects will have properties of episode * episodeName
    * fabricate their values
    * assign property called totalSeasons to the netflix object with a value of what total seasons are
*/

console.log(netflix.seasonInfo.season1.episodeInfo[0].episodeName)

netflix.seasonInfo.season3 = { 
    numberOfEpisodes: 2,
            episodeInfo: [
                { episode: 1, episodeName: "s3e1"},
                { episode: 2, episodeName: "s3e2"}
            ]
}
console.log(netflix.seasonInfo)

netflix.seasonInfo.totalSeasons = Object.keys(netflix.seasonInfo).length
console.log(netflix.seasonInfo)