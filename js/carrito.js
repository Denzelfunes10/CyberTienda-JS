
//JS DEDICACO A LA CARGA DEL CARRITO DE COMPRAS 

const cart = new ShoppingCart()

document.addEventListener('DOMContentLoaded', pushCarrito)

const resumenContainer = document.getElementById("resume-table")

function pushCarrito() {
    const carritoContainer = document.getElementById("carritoBody")
    if(carritoContainer !== null){
        cargarCarrito()
        carrito.forEach((product) => {
            carritoContainer.innerHTML += productCardReturn(product)
            
        })
        resumenContainer.innerHTML += resumeCardReturn()
    }
}

function cargarCarrito() {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
    if (carritoGuardado !== null) {
        carrito.push(...carritoGuardado)
        console.log(carrito)
    }
}
