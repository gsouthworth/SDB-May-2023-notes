require("dotenv").config()

const express = require("express")
const app = express()

let PORT = process.env.PORT
let HOST = process.env.HOST

app.get("/", (req, res) => {
    res.send("hello home!")
})

app.get("/about", (req, res) => {
    res.send("about page")
})

app.get("/form", (req, res) => {
    res.send(
        `<form>
        
        `
    )
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

