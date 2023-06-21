/* 
        ? URL or URI
        * Uniform Resource Location (Identifier)
        * Address allowing us to access web resources
        
        * DNS (domain name) server resolves the url string into IP address
        
        * http:// || https:// --> protocol type
        * www.google.com --> domain
            * can have subdomains (ex: email.google.com)
            * .com; .de; .pl; .co.uk <-- top level domains
            * domain == IP address (once resolved by DNS) + port == socket
        * Port :80 for HTTP or :443 for HTTPS
        * Path
            * Location and structure of content within a resource
        * Query Parameters
            * map to key-value pairs within an object
            * begin with ?
            * separated by &
            * property assigned to value (ex: ?name=Paul&age=24)
            * usually does not contain " "
        * Anchors (#)
            * id's allowing us to access specific part of a document
            * ex: #footer will take you to an element with that specific id attribute value
*/

/* 
    ? Accessing URL Query Parameters
    * URLSearchParams interface reads and sanitizes the url
    * we use .get() methods to extrapolate properties
*/

let urlQueryParams = window.location.search
console.log(urlQueryParams)

let params = new URLSearchParams(urlQueryParams)
console.log(params)

// ? Get query param values
let firstName = params.get("firstName")
let lastName = params.get("lastName")

// ? Set query parm values
// params.set("firstName", "Cyrus")
// params.set("lastName", "Fullam")

// console.log(params)

let btn = document.getElementsByTagName("button")[0]
btn.addEventListener("click", e => {
    e.preventDefault()
    console.log(e)
    let newUlr = new URLSearchParams()
    newUlr.set("firstName", e.target.form[0].value)
    console.log(newUlr)
    window.location.search = newUlr
})

/* 
    ? Application Programming Interface (API)
    * a way for client to communicate with the server
    * allows for HTTP request and response lifecycle
    * part of RESTful architecture
    * REST - representational state transfer
    * stateless; cacheable; and layered system allowing req-res lifecycle using:
        * CRUD: create, read, update, and delete
        * HTTP methods: POST, GET, PUT, DELETE
        * HTTP request packet sent from client:
            * headers
            * body
            * query parameters
        * HTTP response sent from the server:
            * headers
            * payload
            * status code
*/

/* 
    ? Fetch API
    * is an asynchronous function
    * we don't know how long req-res lifecycle will be
    
    ? Process
    * fetch() your resource and return a promise
    * use .then resolver to catch fetch's return and assign to a prameter
    * the parameter is part of Response interface
    * the body of our response is inacceesible -- part of ReadableStream
    * utilize Response interface's .json() method to read the stream
    * .json() returns a promise
    * resolve the promise with one more .then() resolver
    * catch the return in a parameter and do whatever with it

*/
console.log("-------------------------------------------------")
let spaceXurl = "xhttps://api.spacexdata.com/v3/capsules/past"

// ? Fetch using resolvers

// fetch(spaceXurl)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .then(() => console.log("Code after an error"))


// ? Fetch using asynchornous functions

async function getData() {
    try {
        let response = await fetch(spaceXurl)
        let data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

// getData()

// ? JavaScript Object Notation (JSON) --> object in a string format

let myObj = {
    name: "Amanda",
    age: 21,
    occupation: "dev"
}

// ? Stringifying an object to send it
let jsonString = JSON.stringify(myObj)
console.log("type", typeof jsonString, jsonString)
console.log(jsonString.name)

// ? Parsing an object to traverse it
let responseObject = JSON.parse(jsonString)
console.log(responseObject)

/* 
    ! Fetch Challenge
    * utilize resolvers or async fx to fetch all digimons
    * console log them and their properties
    
    ? EASY
    * build a div for each one that will hold their name as h1, and their img
    * fill your body with the names and images of all of the digimons
    * style it appropriately (utilize flexbox)
    
    ? DIFFICULT
    * create a render function
    * it will take a parameter of data
    * it will need to be invoked within the data fetch fx
    * it will render the name, image and for each digimon
*/
let container = document.getElementsByClassName("digimon-container")[0]
let searchBtn = document.getElementById("submit")

searchBtn.addEventListener("click", async e => {
    // ? store all digimons locally
    let allDigimons = await getDigimons()
    // ? grab user input
    let input = e.target.previousElementSibling.value
    // ? check if user input matches name of any digimon stored locally
    let foundDigimon = allDigimons.filter(di => di.name === input)
    // ? render all if none match or one if match is found
    foundDigimon.length == 0
        ? renderData(allDigimons)
        : renderData(foundDigimon)
})

let renderData = info => {
    
    // ? Iterate through all objects of the digmon array
    info.forEach((di, index) => {
        // ? Create container and inner element for each instance (card)
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let img = document.createElement("img")
        let p = document.createElement("p")

        // ? Assign object property values to the elements
        div.className = "digimon"
        h1.textContent = `${index + 1} ${di.name}`
        img.src = di.img
        p.textContent = di.level

        // ? Append inner container elements to the container itself (card)
        div.append(h1, img, p)

        // ? Append cards to the outer container (card deck)
        container.appendChild(div)
    })

    let foundMon = info.filter(di => di.name === "SaberLeomon")
    console.log(foundMon)

}

let getDigimons = async() => {
    let res = await fetch("https://digimon-api.vercel.app/api/digimon")
    let data = await res.json()
    // renderData(data)
    return data
}

// getDigimons()