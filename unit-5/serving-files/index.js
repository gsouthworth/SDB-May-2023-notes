const express = require("express")
const app = express()

const PORT = 4000

/* 
    ? Middleware
    * function or method
    * gives us access to the request and response objects
    * gives us access to the next middleware fx in the stack
*/

app.use("/static", express.static(`${__dirname}/static`))


app.listen(PORT, () => {
    console.log(`[server] listening on ${PORT}`)
})