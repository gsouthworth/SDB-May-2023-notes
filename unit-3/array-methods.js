/* 
    ? Array Methods
    * methods are functions that live inside of an object prototype
    * denoted by the . at the end of an object
    * ex: someVariable.toLowerCase()
*/

let educationTeam = [
    ["Paul Niemczyk", "Rob VanArsdall", "Eric Winebrenner"],
    ["Alex Perry", "Henry Dufour", "Mary Reagan"],
    ["Lulu Browne", "Julie Assur"]
]

/* 
    ? .push()
    * adds an element to the end of an array
    * returns new length of an array
*/

let pushReturn = educationTeam.push(["Benny Boas", "Kate Sweeney"])
console.log("Value", educationTeam, "Return of .push()", pushReturn)

/* 
    ? .pop()
    * removes last array element & returns it
    * also known as yeet() :)
*/

let lastElement = educationTeam.pop()
console.log("Value", educationTeam, "Return of .pop()", lastElement)

/* 
    .unshift()
    * adds an element to the beginning of an array
    * returns new length of an array
*/

let unshiftReturn = educationTeam.unshift("Aaron Blais")
console.log("Value", educationTeam, "Return of .unshift()", unshiftReturn)

/* 
    .shift()
    * removes the first element from an array
    * returns the removed value
*/

let shiftReturn = educationTeam.shift()
console.log("Value", educationTeam, "Return of .shift()", shiftReturn)

/* 
    .includes()
    * checks whether an array contains a value
    * returns true or false
*/

let languages = ["English", "German", "Spanish", "Polish", "French"]

console.log(languages.includes("French"))

// ? Advanced Array Methods

let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachusetts",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Delaware",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesota",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]

for (state of states) {
    console.log(state)
}

/* 
    ? .forEach()
    * fires a callback fx on each element of your array
    * callback has three parameters:
        * value - the iterable
        * index - of the iterable
        * array - original array .forEach was called upon
    * does NOT return anything unless specified
*/

states.forEach((state, index, array) => {
    // console.log(`State: ${state} - Index: ${index}`)
    console.log(array[index])
})

/* 
    ? .filter()
    * creates a new array based on a filter function
    * only the filtered items can be added to an array
    * cannot have (if/else) where else also gets added
    * filter RETURNS values
*/

let statesC = states.filter(state => {
    if (state[0] == "C") {
        return state
    } else {
        return "boo"
    }
})

console.log(statesC)


let longestWord = arr => {
    let longest = ""
    arr.forEach (i => {
        i.length > longest.length ? longest = i : null
    })
    return longest
}

console.log(longestWord(states));

// let longestWord = arr => {
//     let longest = [""];
//     arr.forEach(i => {
//       if (i.length === longest[0].length) {
//         longest.push(i);
//       } else if (i.length > longest[0].length) {
//         longest = [i];
//       }
//     });
//     return longest;
//   };
  
//   console.log(longestWord(states));

let grades = [56, 78, 96, 41, 7, 22, 15, 10, 89, 60]

// let statesC = states.filter(state => {
//     if (state[0] == "C") {
//         return state})
    
/* 
    ! .filter() Challenge
    * utilize a filter method to filter out grades under 60
*/

let passingGrade = grades.filter(grade => {
    if (grade >= 60) {
        return grade
    }
})

console.log(passingGrade)

/* 
    ! .map() Challenge
    * utilize map to raise grade by 15 points for everyone
    * those above 90 should not get any points
*/

let curvedgrades = grades.map(grade => {
    if (grade < 85) {
        return grade + 15
    } else {
        return grade
    }
})

    console.log(curvedgrades)

let updateGrade = grades.map(grade => grade < 90 ? grade + 15 : grade)
console.log(updateGrade)