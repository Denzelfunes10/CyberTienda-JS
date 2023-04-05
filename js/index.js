
//----------------------- CARGA DE CATEGORIAS -----------------------//

document.addEventListener("DOMContentLoaded", () => {
    returnCarrito()
    if (carrito.length > 0) {
        pushCarrito()
    }
})

document.addEventListener("DOMContentLoaded", ()=>{categorySelected()})

const categoriesContainer = document.querySelector (".list-categories")
const rutaContainer = document.getElementById("category-rute"); 

for (let i = 0; i < Categories.length; i++) {
    const li = document.createElement('li');
    li.id = Categories[i].codigo;
    li.className = "categoria";
    li.setAttribute("ruta", Categories[i].ruta);
    li.textContent = Categories[i].nombre;
    categoriesContainer.appendChild(li);
}

function categorySelected() {
    const categories = document.getElementsByClassName("categoria");
    for (category of categories) {
        category.addEventListener("click", (event) => { 
            const ruta = event.target.getAttribute("ruta");
            rutaContainer.textContent = ruta;
        })
    }
}

//----------------------- CARGA DE PRODUCTOS -----------------------//

function pushProducts(){
    const productsContainer = document.getElementById("products-section");
    listProducts.forEach((producto)=>{
        productsContainer.innerHTML += cardReturn(producto)
    })
}

document.addEventListener("DOMContentLoaded", pushProducts)

//----------------------- CARGA DE CARRITO -----------------------//



function btnClick() {
    const btnAdd = document.getElementsByClassName("btn-add")
    for (btn of btnAdd){
            btn.addEventListener("click", (e) => {
                addToCart(e.target.id)
        })
    }
}

document.addEventListener("DOMContentLoaded", btnClick)
    
function addToCart(id) {
    let resultado = listProducts.find( producto => producto.codigo === parseInt(id))
    if(resultado !== undefined){
        let productInCart = carrito.find( producto => producto.codigo === parseInt(id))
        if(productInCart){
            productInCart.cantidad = productInCart.cantidad + 1;
            guardarCarrito()
            console.log(carrito)
        }
        else{
            resultado.cantidad = 1;
            carrito.push(resultado)
            guardarCarrito()
        }
    }
    else{
        alert("Ha ocurrido un error")
    }
}

function pushCarrito() {
    const carritoContainer = document.getElementById("carritoBody")
    returnCarrito()
    carrito.forEach((producto) => {
        carritoContainer.innerHTML += productCardReturn(producto)
    })
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function returnCarrito(){
    const carritoReturned = JSON.parse(localStorage.getItem("carrito"))
    if(carritoReturned.length > 0){
        carrito.push(...carritoReturned)
    }
}




// function buscar(codigo){
//     let resultado = listProducts.find((Product)=> Product.codigo === parseInt(codigo))
//     console.log(typeof(resultado))
//     return resultado
// }
