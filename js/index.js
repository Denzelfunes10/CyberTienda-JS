
//----------------------- CARGA DE CATEGORIAS -----------------------//

document.addEventListener("DOMContentLoaded", categorySelected)

const categoriesContainer = document.querySelector (".list-categories")
const rutaContainer = document.getElementById("category-rute"); 

if(categoriesContainer !== null){
    for (let i = 0; i < Categories.length; i++) {
        const li = document.createElement('li');
        li.id = Categories[i].codigo;
        li.className = "categoria";
        li.setAttribute("ruta", Categories[i].ruta);
        li.textContent = Categories[i].nombre;
        categoriesContainer.appendChild(li);
    }
}


function categorySelected() {
    const categories = document.getElementsByClassName("categoria");
    for (category of categories) {
        category.addEventListener("click", (event) => { 
            const productos = listProducts
            const categoria = event.target.textContent
            const productosFiltrados = filtrarPorCategoria(productos, categoria)

            const productsContainer = document.getElementById("products-section")
            productsContainer.innerHTML = ""

            productosFiltrados.forEach((producto)=>{
                productsContainer.innerHTML += cardReturn(producto)
            })

            const ruta = event.target.getAttribute("ruta");
            rutaContainer.textContent = ruta;
        })
    }
}

function filtrarPorCategoria(productos, categoria) {
    const productosFiltrados = []
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].categoria === categoria) {
            productosFiltrados.push(productos[i]);
        }
    }
    return productosFiltrados;
}


//----------------------- CARGA DE PRODUCTOS -----------------------//

function pushProducts(){
    const productsContainer = document.getElementById("products-section")
    if(productsContainer !== null){
        listProducts.forEach((producto)=>{
            productsContainer.innerHTML += cardReturn(producto)
        })
    }
}

document.addEventListener("DOMContentLoaded", pushProducts)

//----------------------- CARGA DE CARRITO -----------------------//

document.addEventListener('DOMContentLoaded', pushCarrito)

const productsContainer = document.getElementById("products-section");

if (productsContainer !== null){
    productsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-add")) {
            addToCart(event.target.id);
        }
    })
}

function addToCart(id) {
    let resultado = listProducts.find( producto => producto.codigo === parseInt(id))
    if(resultado !== undefined){
        let productInCart = carrito.find( producto => producto.codigo === parseInt(id))

        if(productInCart){
            productInCart.cantidad++;
            console.log(carrito)
            console.log(productInCart.cantidad)
        }
        else{
            resultado.cantidad = 1;
            carrito.push(resultado)
            console.log(carrito)
        }
        guardarCarrito()
        showNotification()
    }
    else{
        alert("Prodcuto fuera de Stock")
    }
}

function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.remove("hide")
    setTimeout(() => {notification.classList.add("hide")}, 3000)
}

function pushCarrito() {
    const carritoContainer = document.getElementById("carritoBody")
    const resumenContainer = document.getElementById("resumenCart")

    if(carritoContainer !== null){
        cargarCarrito()
        carrito.forEach((producto) => {
            carritoContainer.innerHTML += productCardReturn(producto)
        })
    }
}

function guardarCarrito() {
    // obtengo los productos guardados en el local storage
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    // añado los nuevos sin borrar los anteriores
    carritoGuardado.push(carrito[carrito.length - 1])

    localStorage.setItem("carrito", JSON.stringify(carritoGuardado))
    
}

function cargarCarrito() {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
    if (carritoGuardado !== null) {
        carrito.push(...carritoGuardado)
    }
}