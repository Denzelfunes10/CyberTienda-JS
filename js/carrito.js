
//JS DEDICACO A LA CARGA DEL CARRITO DE COMPRAS 

const cart = new ShoppingCart()

document.addEventListener('DOMContentLoaded', ()=>{
    pushCarrito()
    deleteItem()
    cantidad()
    checkout()
})

const resumenContainer = document.getElementById("resume-table")

function pushCarrito() {
    const carritoContainer = document.getElementById("carritoBody")
    if(carritoContainer !== null){
        carritoContainer.innerHTML = ""
        resumenContainer.innerHTML = ""
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

function deleteItem(productCode){
    const deleteBtn = document.querySelectorAll(".deleteBtn")
    if(productCode !== undefined){
        cart.removeProduct(productCode)
    } else{
        deleteBtn.forEach((btn)=> {
            btn.addEventListener('click', ()=>{
                const codigoProducto = btn.dataset.producto
                cart.removeProduct(codigoProducto)
            })
        })
    }
}

function cantidad(){
    const addBtn = document.querySelectorAll("button")

    addBtn.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            if (e.target.classList.contains("add-btn")){
                const codigoProducto = btn.dataset.producto
                cart.modificarCantidad(codigoProducto, 1)
            }
            else if(e.target.classList.contains("subtract-btn")){
                const codigoProducto = btn.dataset.producto
                cart.modificarCantidad(codigoProducto, -1)
            }
        })
    })
}

function checkout(){
    const checkout = document.getElementById("checkout")
    const continuebtn = document.getElementById("continueBtn")
    const cancelarbtn = document.getElementById("cancelar")
    const volverbtn = document.getElementById("returnbtn")
    const confirmar = document.getElementById("confirmar")

    if(checkout !== null){
        checkout.addEventListener("click", ()=>{
            document.getElementById('checkout-section').classList.toggle('hide')
        })
        continuebtn.addEventListener("click", ()=>{
            document.getElementById("shipment-section").classList.toggle('hide')
            document.getElementById("payment-section").classList.toggle('hide')
        })
        cancelarbtn.addEventListener("click", ()=>{
            document.getElementById("checkout-section").classList.toggle('hide')
            return
        })
        volverbtn.addEventListener("click", ()=>{
            document.getElementById("shipment-section").classList.toggle('hide')
            document.getElementById("payment-section").classList.toggle('hide')
        })
        confirmar.addEventListener("click", ()=>{
            finalizarCompra()
        })
    }
}

function finalizarCompra(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su compra ha sido realizada con exito',
        confirmButtonText: 'ok',
        timer: 1500
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito")
            location.reload()
        } 
    })
}