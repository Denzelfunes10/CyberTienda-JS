class compra{
    constructor(listProducts){
        this.listProducts = listProducts;
        this.cantidad = cantidad;
    }
}
    // class ruta{
    //     constructor(Categories){
    //         this.Categories = Categories;
    //     }
    // }
    // subtotal(){
    //     if(this.listProducts.length > 0){
    //         return this.listProducts.reduce((acc, nombre)=> acc + nombre.precio, 0)
    //     }
    //     else{
    //         return 'Error inesperado'
    //     }
    // }
    // shopConfirm(){
    //     if(this.subtotal() !== 'Error inesperado'){
    //         return `El pago de $${this.subtotal()} se ha confirmado\n!Muchas gracias por su compra!`
    //     }
    //     else{
    //         return 'Hubo un problema con la transacción, por favor intentelo mmas tarde'
    //     }
    // }