
const welcomeMessage = "Bienvenido a La CyberTienda, seleccione la opción que desea realizar\n" +
                        "1 - Comprar\n" +
                        "2 - Ver mi carrito de compras \n"+
                        "3 - Salir"

const shopMessage = "Ingrese el codigo del producto que desea comprar"+
                    "1 - Acer Nitro 5 \n" +
                    "2 - Audifonos Logitech \n" +
                    "3 - Teclado HyperX Alloy \n" +
                    "4 - Monitor Samsung 32in \n" +
                    "5 - Mouse Logitech \n" +
                    "6 - Mouse Etouch \n" +
                    "7 - Audifonos P33 \n" +
                    "8 - Audifonos Bluetooth Pro 6 \n" +
                    "9 - Memoria Kingston 8GB \n" +
                    "10 - Nintendo Retro \n"

function iniciarSimulacion(){
    let opcion = parseInt(prompt(welcomeMessage))
    if(opcion == 1){
        shop()
    }
    else if(opcion == 2){
        verMiCarrito()
    }
    else if(opcion == 3){
        alert("Gracias por visitar nuestra pagina web, tenga un feliz día")
    }
    else {
        alert("Por favor ingrese una opción valida")
        let respuesta = confirm("¿Desea intentarlo nuevamente?")
        if(respuesta){
            iniciarSimulacion()
        }
        else{
            alert("Gracias por visitar nuestra pagina web, tenga un feliz día")
        }
    }
}
function shop(){
    //debugger
    let codigo = parseInt(prompt(shopMessage))
    console.log(typeof(codigo))
    if(isNaN(codigo)){
        alert("Codigo ingresado no valido o no se ha ingresado ningun valor")
        let respuesta = confirm("¿Desea intentarlo nuevamente?")
        if(respuesta){
            shop()
        }
        else{
            iniciarSimulacion()
        }
    }
    else {
        let productoSeleccionado = buscar(codigo)
        if(productoSeleccionado == undefined){
            alert("El código ingresado no existe o esta fuera de stock")
            let respuesta = confirm("¿Desea seleccionar un nuevo producto?")
            if(respuesta){
                shop()
            }
            else{
                iniciarSimulacion()
            }
        }
        else{
            alert(`El producto ${productoSeleccionado.nombre} ha sido añadido al carrito`)
            carrito.push(productoSeleccionado)
            let respuesta = confirm("¿Desea continuar la compra?")
            if (respuesta){
                shop()
            }
            else{
                tramitarPedido()
            }
        }
    }
}
function buscar(codigo){
    let resultado = listProducts.find((Product)=> Product.codigo === parseInt(codigo))
    console.log(typeof(resultado))
    return resultado
}
function verMiCarrito(){
    if(carrito.length > 0){
        console.table(carrito)
        let respuesta = confirm("¿Desea tramitar el pedido su carrito?")
        if(respuesta){
            tramitarPedido()
        }
        else{
            iniciarSimulacion()
        }
    }
    else{
        alert("Aun no tiene ningun producto agregado al carrito")
        iniciarSimulacion()
    }
}
function tramitarPedido(){
    if(carrito.length > 0){
        const shopping = new compra(carrito)
        alert(`El costo total del pedido es $${shopping.subtotal()}`)
        let respuesta = confirm("¿Desea realizar la compra?")
        if(respuesta){
            alert(shopping.shopConfirm())
            carrito.length = 0
        }
        else{
            iniciarSimulacion()
        }
    }
}
