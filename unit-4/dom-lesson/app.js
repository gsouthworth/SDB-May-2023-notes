/* 
    ? Document Object Model (DOM)
    * Data representation of the objects comprising the structure and content of a document on the web

    ? Basic Structure
    * Document
        *HTML
            * Head
                * Meta Tags
                * link tags
                * title tag
                * ... and all of its content
            * Body
                * NAv
                * Header
                * h1's, img's, aside's, div's....
*/

console.log(typeof document) // returns object
console.log(document) // returns object with properties

/* 
    ? Window vs Document vs Navigator vs History Object
    * Document allows access to the index.html file
    * Window allows us to access the browser object
    * Navigator allows access to the identity of user agent
    * History allows us to navigate the page
*/

console.log(window)

let userName = "Gavin"
console.log(userName)
console.log(window.userName) // if used var would show up. Var is unsecure - hackers can see it

//? Create our first element using DOM

// 1. use .createElement() method on a DOM object and pass an argument element we want to create
// 2. assign it to a variable for storage and modification
let h1 = document.createElement("h1")
// 3. modify the elements textContent property to render "DOM Lesson"
h1.textContent = "DOM Lesson"
// 4. Find an element to which you want to append our newly created element
console.log(document.body)
// 5. Append the element we created and modified to its parent element
document.body.appendChild(h1)
































// /* 
//     ? Document Object Model (DOM)
//     * data representation of the objects comprising the strucutre and content of a document on the web

//     ? Basic Structure:
//     * Document
//         * HTML
//             * Head
//                 * Meta tags
//                 * Links tags
//                 * Title tag
//                 * ...and all of its content (text, attribtues, comments)
//             * Body
//                 * Nav
//                 * Header
//                 * h1's, img's, aside's, div's, and so on...
//                 * ...and all of their attributes and values
// */

// console.log(typeof document) // returns object
// console.log(document) // returns object with properties

// /* 
//     ? Window vs Document vs Navigator vs History Objects
//     * document allows access to the index.html file
//     * window allows access to the browser object
//     * navigator alllows access to the identity of user agent
//     * history allows us to navigate the page
// */

// console.log(window)

// let userName = "paul"
// console.log(userName)

// var AWS_API_KEY = "9afe3chglk038"
// console.log(window.AWS_API_KEY)

// // ? Create our first element using DOM

// // 1. use .createElement() method on a DOM object and pass an argument element we want to create
// // 2. assign it to a variable for storage and modification
// let h1 = document.createElement("h1")
// // 3. modify the elements textContent property to render "DOM Lesson"
// h1.textContent = "DOM Lesson"
// h1.style.color = "blue"
// console.log(h1)
// // 4. Find an element to which you want to append your newly created element
// console.log(document.body)
// // 5. Append the element we created and modified to its parent element
// document.body.appendChild(h1)

// /* 
//     ? Accessing DOM elements
//     * Elements can be accessed several different ways. Most common are:
//     * getElementById()
//     * getElementsByClassName() [HTML Collection]
//     * getElementsByTagName() [HTML Collection]
//     * querySelector()
//     * querySelector(All) [NodeList]
// */

// /* 
//     ? .getElementById()
//     * returns first instance of id element
// */

// let ulToDo = document.getElementById("ulToDo")
// console.log(ulToDo)

// /* 
//     ? .getElementsByClassName()
//     * returns an HTML Collection of class instances
//     * array-like object (cannot use array methods)
//     * allows access to index and length
// */

// let listItem = document.getElementsByClassName("listItem")
// console.log(listItem)

// console.log(listItem[0]) // index access
// console.log(listItem.length)

// // listItem.forEach(i => console.log(i)) // TypeError (it's array-like, NOT an array)

// // ? Array-like object can be looped through

// for (i of listItem) {
//     // i.style.color = "red"
//     console.log(i)
// }

// /* 
//     ? .getElementsByTagName()
//     * returns all instances of an element
// */

// let allLargeHeaders = document.getElementsByTagName("h1")
// console.log(allLargeHeaders)

// for (i of allLargeHeaders) {
//     console.log(i)
//     i.style.color = "red"
// }

// /* 
//     ? .querySelector()
//     * most versatile
//     * returns the first instance of an element
//     * access using tag name, id, and class name
//     * MUST SPECIFY whether it's a tag, ., or #
//     * ex: "nav" for element; ".nav" for class; "#nav" for id
// */

// let listItemByQuerySelector = document.querySelector(".listItem")
// console.log(listItemByQuerySelector)

// /* 
//     ? .querySelectorAll()
//     * returns a NodeList of all instances of class, id, or element(s)
//     * allows the use of array methods to iterate over
// */

// let listItemsByQuerySelectorAll = document.querySelectorAll(".listItem")
// console.log(listItemsByQuerySelectorAll)

// listItemsByQuerySelectorAll.forEach(i => i.style.listStyleType = "upper-roman")

// /* 
//     ! Challenge
//     * Create an instance of a listItem that renders "Clean bedroom"
//     * Change its color to blue
//     * Append to the bottom of our list
// */

// let newLi = document.createElement("li")
// newLi.textContent = "Clean Bedroom"
// newLi.class = "listItem"
// newLi.style.color = "blue"

// let list = document.querySelector('#ulToDo')
// list.appendChild(newLi)

// /* 
//     ? HTML Collection vs NodeList
//     * HTML Collection returns a list that is live
//     * Live Lists DO show newly created elements
    
//     * NodeList returns a static list of elements
//     * NodeLists DO NOT show newly created elements
// */

// let htmlCollection = document.getElementsByClassName("listItem")
// let nodeList = document.querySelectorAll(".listItem")
// console.log("HTML COLLECTION", htmlCollection, "NODE LIST", nodeList)

// let newItem = document.createElement("li")
// newItem.textContent = "New item"
// newItem.className = "listItem"

// ulToDo.appendChild(newItem)

// // ? NodeList will only update hard-coded element styles
// // for (i of nodeList) {
// //     i.style.color = "red"
// // }

// // ? HTML Collection will update all element styles, even post-access
// for (i of htmlCollection) {
//     i.style.color = "blue"
// }