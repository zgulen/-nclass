const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {    

    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice)

    // sessionStorage.setItem("taxRate", taxRate);
    // sessionStorage.setItem("shippingPrice", shippingPrice)
});

//!capturing method

let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) =>{
    if (event.target.classList.contains("minus")){
        if (event.target.nextElementSibling.innerText > 1){
            event.target.nextElementSibling.innerText--;
        }else{
            if (confirm("Product will be deleted")){
                event.target.parentElement.parentElement.parentElement.remove();
            }
        }


    }else if (event.target.classList.contains("plus")){
        event.target.previousElementSibling.innerText++
        console.log("plus button clicked");


    }else if (event.target.classList.contains("remove-product")){
        event.target.parentElement.parentElement.parentElement.remove();
        console.log("Remove elements clicked");


    }else{
        console.log("Other elements clicked");
    }
});














