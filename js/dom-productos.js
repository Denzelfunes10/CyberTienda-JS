
//JS DEDICACO A LA CARGA DEL HTML DE PRODUCTOS
const productsContainer = document.getElementById("products-section")

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(cart.carrito))
}

if (productsContainer !== null){
    fetch(listProducts)
    .then(respuesta => respuesta.json())
    .then((producto) => {
        producto.forEach( producto=>{
            productsContainer.innerHTML += cardReturn(producto)
        })
    })
    .catch(error => console.log(error))
    
    productsContainer.addEventListener("click", function(e) {
        if (e.target.classList.contains("btn-add")) {
            cart.addProduct((parseInt(e.target.id)))
            guardarCarrito()
        }
    }) 
}
