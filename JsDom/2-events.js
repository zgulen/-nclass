//* ======================================================
//*                        EVENTS
//* ======================================================

console.log('****** EVENTS *******');

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

// const header = document.getElementById("header").onmouseover = function (){
    
//     document.getElementById('header').style.color = "red"

// };


const header = document.getElementById("header")
header.onmouseover = function (){
    header.style.color = "red"
};
header.onmouseout = function (){
    header.style.color = "yellow"
};


const img = document.querySelector("img")
img.addEventListener("mouseover",() =>{
    img.style.transform = "scaleX(1.5)"
} )

img.addEventListener("mouseout",() =>{
    img.style.transform = "translateX(-5px)"
} )

const button = document.querySelector("#btn");
button.addEventListener("click", function (event){
    document.querySelector("body").style.backgroundImage = "linear-gradient(to right, purple, yellow)";
    button.textContent = "Search"
})



























