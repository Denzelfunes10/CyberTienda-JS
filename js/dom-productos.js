
//JS DEDICACO A LA CARGA DEL HTML DE PRODUCTOS
const productsContainer = document.getElementById("products-section")

function pushProducts(){
    const productsContainer = document.getElementById("products-section")
    if(productsContainer !== null){
        listProducts.forEach((producto)=>{
            productsContainer.innerHTML += cardReturn(producto)
        })
    }
}

function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.remove("hide")
    setTimeout(() => {notification.classList.add("hide")}, 800)
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(cart.carrito));
}

if (productsContainer !== null){
    productsContainer.addEventListener("click", function(e) {
        if (e.target.classList.contains("btn-add")) {
            cart.addProduct((parseInt(e.target.id))) //Envio el codigo del producto a la clase ShoppingCart
            guardarCarrito()
            showNotification()
            cart.printCart()
        }
    })
}

document.addEventListener("DOMContentLoaded", pushProducts)
