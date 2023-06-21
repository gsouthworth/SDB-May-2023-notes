let btn = document.getElementById("btn"),
pokemonName = document.getElementById("name"),
stats = document.querySelector(".stats"),
abilities = document.getElementById("abilities"),
mainCard = document.querySelector(".main-card")

let capitalize = str => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

let fetchData = async pokemon => {
    pokemon = pokemon.toLowerCase()
    let baseURL = "https://pokeapi.co/api/v2/pokemon/"
    let res = await fetch(`${baseURL}${pokemon}`)
    let data = await res.json()
    console.log(data)
    render(data)
}
console.log(stats)

let render = data => {
    pokemonName.textContent = `Name: ${capitalize(data.name)}`
    // checks if img element exists and clears it
    console.log(stats)
    stats.firstChild ? mainCard.removeChild(stats.nextElementSibling) : null
    // iterates thru remainder of children and clears them
    while(stats.firstChild) {
        stats.removeChild(stats.firstElementChild)
    }

    console.log(stats)
    let img = document.createElement("img")
    img.id = "poke-img"
    img.src = data.sprites.front_shiny
    stats.insertAdjacentElement("afterend", img)
    data.stats.forEach(i => {
        switch(true) {
            case i.stat.name === "hp":
                let p = document.createElement("p")
                p.textContent = `HP: ${i.base_stat}`
                stats.appendChild(p)
                break
            case i.stat.name === "attack":
                let p2 = document.createElement("p")
                p2.textContent = `Attack: ${i.base_stat}`
                stats.appendChild(p2)
                break
            case i.stat.name === "defense":
                let p3 = document.createElement("p")
                p3.textContent = `Defense: ${i.base_stat}`
                stats.appendChild(p3)
                break
            }
        })
    }

btn.addEventListener("click", e => {
    e.preventDefault()
    let input = e.target.form[0].value
    fetchData(input)
})