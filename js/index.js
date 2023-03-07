const welcomeMessage = "Bienvenido a La CyberTienda, seleccione una opción \n" +
                        "a - Consultar precio de productos \n" +
                        "b - Consultar precio de clases \n"

const priceMessage = "Para conocer el precio ingrese el código del producto que desee: \n" +
                        "a1 - Monitor Samsung 32in \n" +
                        "a2 - Teclado HyperX \n" +
                        "a3 - Mouse Gamer \n" +
                        "a4 - Audifonos Inalambricos \n" +
                        "a5 - Laptop Acer Nitro 5 \n"

const classesMessage = "Para conocer el precio ingrese el código del producto que desee: \n" +
                        "b1 - Curso de Ofimatica Básica \n" +
                        "b2 - Curso de Reparación de electrodomesticos \n" +
                        "b3 - Curso de Introducción a la Programación \n" 

let continuar = true

function iniciarSimulacion() {
    while(continuar){
        Bienvenida()
    }
}
function Bienvenida(){
    let option = prompt(welcomeMessage).toLowerCase().trim()

    if (option !== "a" && option !== "b"){
        alert("⛔️ Debes ingresar una opción válida, por favor.")
    }
    else{
        if (option == "a"){
            precios()
        }
        else if (option == "b"){
            classes()
        }
        continuar = confirm("¿Desea consultar más precios?")
    }
}
function calcularPrecio(precioBase, cantidad) {
    let precioTotal = precioBase * cantidad
    return precioTotal
}
function precios(){
    let code = prompt(priceMessage).toLowerCase().trim()

    switch(code) {
        case "a1":
            let cantidad1 = parseInt(prompt("Ingrese la cantidad de unidades que deseas comprar"))
            let precio1 = calcularPrecio(200, cantidad1)
            alert(`El precio total es: $${precio1}`)
            break
        case "a2":
            let cantidad2 = parseInt(prompt("Ingrese la cantidad de unidades que deseas comprar"))
            let precio2 = calcularPrecio(100, cantidad2)
            alert(`El precio total es: $${precio2}`)
            break
        case "a3":
            let cantidad3 = parseInt(prompt("Ingrese la cantidad de unidades que deseas comprar"))
            let precio3 = calcularPrecio(35, cantidad3)
            alert(`El precio total es: $${precio3}`)
            break
        case "a4":
            let cantidad4 = parseInt(prompt("Ingrese la cantidad de unidades que deseas comprar"))
            let precio4 = calcularPrecio(50, cantidad4)
            alert(`El precio total es: $${precio4}`)
            break
        case "a5":
            let cantidad5 = parseInt(prompt("Ingrese la cantidad de unidades que deseas comprar"))
            let precio5 = calcularPrecio(50, cantidad5)
            alert(`El precio total es: $${precio5}`)
            break
        default: 
            alert("⛔️ Debes ingresar un código válido, por favor.")
            precios();
    }
}
function classes(){
    let code = prompt(classesMessage).toLowerCase().trim()

    switch(code) {
        case "b1":
            alert("Ofimatica Básica - $20/mes ")
            break
        case "b2":
            alert("Electrónica Básica - $30/mes")
            break
        case "b3":
            alert("Introducción a la Programación - $30/mes")
            break
        default: 
            alert("⛔️ Debes ingresar un código válido, por favor.");
            classes();
    }
}