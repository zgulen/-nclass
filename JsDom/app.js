const header = document.getElementById("header")
console.log(header);

header.style.color = "red"

const  btn = document.getElementById("btn")

btn.style.backgroundColor = "black"
btn.style.color = "yellow"
btn.style.fontSize = "2rem"


const image = document.getElementsByTagName("img")
image[0].style.border = "solid"
image[0].style.borderColor = "red"
image[0].style.transform = "rotate(-5deg)"

const param = document.getElementsByClassName("par");
// param[0].textContent = "DOM manipulation"
param[0].innerHTML = "DOM manipulation"


const badi = document.querySelector("title")
badi.textContent = "JS09-Dom ❤"

const myPars = document.querySelectorAll("p")

myPars.forEach((p) => console.log(p.innerText))

const myPars1 = document.getElementsByClassName("par")
const myParsArray = Array.from(myPars1)
console.log(myParsArray);

// myParsArray.forEach((p) =>(console.log(p.innerText)))
[...myPars1].forEach((p) =>(console.log(p.innerText)))



