// fetch("http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard")
//     .then(res => res.json())
//     .then(data => console.log(data))

// async function getScores() {
//     let res = await fetch("http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard")
//     console.log(res)
//     let scores = await res.json()
//     console.log(scores)
// }

// getScores()

console.log(window.location.search)
let queryParams = window.location.search

let params = new URLSearchParams(queryParams)
console.log(params)
console.log(params.get("email"))
console.log(params.get("subject"))
console.log(params.get("msg"))

let btn = document.querySelector(".email-container > button")

btn.addEventListener("click", e => {
    e.preventDefault()
    let body = {
        email: e.target.form[0].value,
        subject: e.target.form[1].value,
        message: e.target.form[2].value
    }
    fetch("https://google.com", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }),
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

