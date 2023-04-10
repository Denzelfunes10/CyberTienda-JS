class ShoppingCart {
    constructor(listProducts) {
        this.listProducts = listProducts
        const savedCart = JSON.parse(localStorage.getItem("carrito")) || []
        this.carrito = savedCart;
    }

    addProduct(productCode, quantity = 1) {
        //productCode recibe el codigo del producto seleccionado
        const product = listProducts.find((product) => product.codigo === productCode) 
        if (!product) {
            alert(`Producto fuera de stock`)
        }
        const existingItem = this.carrito.find((i) => i.product.codigo === productCode)
        if (existingItem) {
            existingItem.quantity += quantity
            console.log(`Producto sumado ${existingItem.quantity}`)
        } else {
            this.carrito.push({ product, quantity })
            console.log(`${product.nombre} añadido`)
        }
    }

    removeProduct(productCode, quantity = 1) {
        const existingItemIndex = this.carrito.findIndex((i) => i.product.codigo === productCode);
        if (existingItemIndex === -1) {
            throw new Error(`Product with code ${productCode} not found in cart`);
        }
        const existingItem = this.carrito[existingItemIndex];
        if (existingItem.quantity <= quantity) {
            this.carrito.splice(existingItemIndex, 1);
        } else {
            existingItem.quantity -= quantity;
        }
    }

    getSubtotal() {
        return this.carrito.reduce((total, item) => total + item.product.precio * item.quantity, 0);
    }

    printCart() {
        console.log(`Items in cart:`);
        for (const { product, quantity } of this.carrito) {
            console.log(`- ${product.nombre} x ${quantity} = ${product.precio * quantity}`);
        }
        console.log(`Total: ${this.getSubtotal()}`);
    }
}
