// let menu = {
//     burger: 5.55,
//     pizza: 4.25,
//     sandwich: 8.75,
//     fries: 3.50,

//     order(orderPlaced) {
//         orderSplit = Object.values(menu)
//         let sum = 0
//         for (i of orderSplit){
//             sum = sum + orderSplit[1]
//         } return sum
//     } 
// }

// console.log(menu.order())

let menu = {
    burger: 5.55,
    pizza: 4.25,
    sandwich: 8.75,
    fries: 3.50,

    order(orderPlaced){
        let orderSplit = orderPlaced.split(", ")
        let sum = 0
        for(item of orderSplit) {
            sum += this[item]
        }
        return sum
    }
}

console.log(menu.order("burger, fries"))

//orderSplit.forEach(item => sum+= this[item])