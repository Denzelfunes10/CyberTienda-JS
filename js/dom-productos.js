
//JS DEDICACO A LA CARGA DEL HTML DE PRODUCTOS
const productsContainer = document.getElementById("products-section")
// const listProducts = "../json/productos.json"

fetch('/json/productos.json')
    .then(respuesta => respuesta.json())
    .then((producto) => {
        producto.forEach( producto=>{
            productsContainer.innerHTML += cardReturn(producto)
        })
    })
    .catch(error => console.log(error))
    .finally(()=> console.log("proceso finalizado"))

// function pushProducts(){
//     const productsContainer = document.getElementById("products-section")
//     if(productsContainer !== null){
//         listProducts.forEach((producto)=>{
//             productsContainer.innerHTML += cardReturn(producto)
//         })
//     }
// }

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(cart.carrito))
}

if (productsContainer !== null){
    productsContainer.addEventListener("click", function(e) {
        if (e.target.classList.contains("btn-add")) {
            cart.addProduct((parseInt(e.target.id))) //Envio el codigo del producto a la clase ShoppingCart
            guardarCarrito()
        }
    }) 
}

// document.addEventListener("DOMContentLoaded", pushProducts)
