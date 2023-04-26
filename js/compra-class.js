class ShoppingCart {
    constructor() {
        this.init()
        const savedCart = JSON.parse(localStorage.getItem("carrito")) || []
        this.carrito = savedCart
    }
    async init() {
        this.productos = await this.fetchProducts()
    }
    
    async fetchProducts() {
        const response = await fetch(listProducts)
        const data = await response.json()
        return data
    }

    addProduct(productCode, quantity = 1) {
        const product = this.productos.find((product) => product.codigo === productCode) 
        if (!product) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El producto se encuentra fuera de stock!',
            })
        }
        const existingItem = this.carrito.find((i) => i.product.codigo === productCode)
        if (existingItem) {
            existingItem.quantity += quantity
            // Mensaje
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto sumado a la cesta',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            this.carrito.push({ product, quantity })
            // Mensaje
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto añadido a la cesta',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    removeProduct(productCode) {
        const existingItem = this.carrito.find((producto) => producto.product.codigo.toString() === productCode.toString())
        if (existingItem !== undefined) {
            const index = this.carrito.indexOf(existingItem)
            this.carrito.splice(index, 1)
            guardarCarrito()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su producto ha sido eliminado correctamente',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload()
                } 
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El producto no se ha encontrado para ser eliminado!',
            })
        }
    }

    modificarCantidad(productCode, operador) {
        const existingItem = this.carrito.find((producto) => producto.product.codigo.toString() === productCode.toString())
        if (existingItem !== undefined) {
            existingItem.quantity += operador
            if(existingItem.quantity < 1){
                deleteItem(productCode)
            } else{
                location.reload()
            }
            guardarCarrito()
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido algun problema!'
            })
        }
    }

    getSubtotal() {
        return this.carrito.reduce((total, item) => total + item.product.precio * item.quantity, 0)
    }

    // ---------------- imprime carrito en la consola ---------------- //

    // printCart() {
    //     console.log(`Items in cart:`);
    //     for (const { product, quantity } of this.carrito) {
    //         console.log(`- ${product.nombre} x ${quantity} = ${product.precio * quantity}`);
    //     }
    //     console.log(`Total: ${this.getSubtotal()}`);
    // }
}
