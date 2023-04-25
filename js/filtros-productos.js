
//JS DEDICADO PARA FILTRAR LOS PRODUCTOS SEGUN DIFERENTES CRITERIOS

//--------------------por categoria--------------------//

document.addEventListener("DOMContentLoaded", categorySelected)

const categoriesContainer = document.querySelector(".list-categories")
const rutaContainer = document.getElementById("category-rute")

if(categoriesContainer !== null){
    fetch(Categories)
        .then(respuesta => respuesta.json())
        .then(data => {
            const Categories = data
            for (let i = 0; i < Categories.length; i++) {
                const li = document.createElement('li')
                li.id = Categories[i].codigo
                li.className = "categoria"
                li.setAttribute("ruta", Categories[i].ruta)
                li.textContent = Categories[i].nombre
                categoriesContainer.appendChild(li)
            }
        })
        .catch(error => console.log(error))
}

function categorySelected() {
    const categories = document.getElementsByClassName("categoria")
    const productsContainer = document.getElementById("products-section")
    let productos

    fetch(listProducts)
    .then(respuesta => respuesta.json())
    .then(data => {
        productos = data
        
        for (category of categories) {
            category.addEventListener("click", (event) => { 
                const categoria = event.target.textContent
                const productosFiltrados = filtrarPorCategoria(productos, categoria)
                
                productsContainer.innerHTML = ""
                
                productosFiltrados.forEach((producto)=>{
                    productsContainer.innerHTML += cardReturn(producto)
                })
                
                const ruta = event.target.getAttribute("ruta");
                rutaContainer.textContent = ruta
            })
        }
    })
    .catch(() => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al obtener la lista de productos!',
    }))

    
}

function filtrarPorCategoria(productos, categoria) {
    const productosFiltrados = []
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].categoria === categoria) {
            productosFiltrados.push(productos[i])
        }
    }
    return productosFiltrados
}