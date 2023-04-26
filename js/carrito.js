
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
    const carritoTable = document.getElementById("carrito-table")
    if(carritoContainer !== null){
        carritoContainer.innerHTML = ""
        resumenContainer.innerHTML = ""
        cargarCarrito()
        if(carrito.length > 0){
            carrito.forEach((product) => {
                carritoContainer.innerHTML += productCardReturn(product)
            })
            resumenContainer.innerHTML += resumeCardReturn()
        }
        else{
            carritoTable.innerHTML = emptyCardReturn()
        }
    }
}

function cargarCarrito() {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
    if (carritoGuardado !== null) {
        carrito.push(...carritoGuardado)
        console.log(carrito)
    }
}

function deleteItem(productCode){ //productCode se recibe unicamente cuando la cantidad del producto llega a cero 
    const deleteBtn = document.querySelectorAll(".deleteBtn")

    if(productCode !== undefined){ 
        Swal.fire({
            title: '¿Esta seguro de que desea eliminar el producto de carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo',
            cancelButtonText: 'No, cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                cart.removeProduct(productCode)
            } else{
                cart.modificarCantidad(productCode, 1) //vuelve a poner la cantidad a 1
            }
        })
    } 
    else { //si no se recibe productCode significa que se eliminara solo si se da click en eliminar
        deleteBtn.forEach((btn)=> {
            btn.addEventListener('click', ()=>{
                const codigoProducto = btn.dataset.producto
                Swal.fire({
                    title: '¿Esta seguro de que desea eliminar el producto de carrito?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminalo',
                    cancelButtonText: 'No, cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        cart.removeProduct(codigoProducto)
                    } 
                })
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
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito")
            location.reload()
        } 
    })
}