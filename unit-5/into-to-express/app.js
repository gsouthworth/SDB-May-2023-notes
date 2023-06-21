require("dotenv").config()

/* 
    ? Creating a new project and express server
    * 1. init new np project using npm init (tip: 1npm init -y` does quick star)
    * 2. Install express using `npm i express`
    * 3. in your package.json:
        * under script, add `"start": "node app.js"`
        * add `"dev": "nodemon"
    * 4. create your entry file (index.js or app.js)
    * 5. run your server using 'npm run dev' command

*/

// * assign dependency import to a variable
const express = require("express")
// * invoke top level express function within a variable
const app = express()

// * define our constants
let PORT = process.env.PORT
let HOST = process.env.HOST

app.get("/", (req, res) => {
    console.log("The endpoint has been hit.")
})

// * Build our listener
app.listen(PORT, HOST, () => {
    console.log(`[server]: listening on ${HOST}:${PORT}`)
})
console.log(process.env)