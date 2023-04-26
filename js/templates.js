function cardReturn(producto){
    return `<div class="product-target">
                <div class="imagen-target">
                <img src=".${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div>
                    <figcaption class="product">${producto.nombre}</figcaption>
                    <p>$${producto.precio}</p>
                    <div id="btnTarget${producto.codigo}"><button id="${producto.codigo}" class="btn btn-primary btn-add">Añadir al carrito</button></div>
                </div>
            </div>`
}

function productCardReturn(producto){
    return `<tr>
                <td>
                    <img src=".${producto.product.imagen}" alt="${producto.product.nombre}">
                </td>
                <td class="description">
                    <a href="#"><h4>${producto.product.nombre}</h4></a>
                    <button class="deleteBtn" data-producto="${producto.product.codigo}">
                        <img src="../assets/img/trash.svg" alt="Basurero">Eliminar
                    </button>
                </td>
                <td class="quantity-container">
                    <button class="subtract-btn" data-producto="${producto.product.codigo}">-</button>
                    <span class="quantity">${producto.quantity}</span>
                    <button class="add-btn" data-producto="${producto.product.codigo}">+</button>
                </td>
                <td>$${producto.product.precio}</td>
                <td>$${producto.product.precio * producto.quantity}</td> 
            </tr>`
}

function resumeCardReturn(){
    const subtotal = cart.getSubtotal()
    return `<thead>
                <tr>
                    <th colspan="2">Resumen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Subtotal</td>
                    <td>$${subtotal}</td>
                </tr>
                <tr>
                    <td>Costo de envío</td>
                    <td>Gratis</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        TOTAL
                        <p>IVA incluido</p>
                    </td>
                    <td>$${subtotal}</td>
                </tr>
                <tr>
                    <td colspan="2" class="checkout-btn-container">
                        <button class="checkout-btn" id="checkout">Tramitar Pedido</button>
                    </td>
                </tr>
            </tfoot>`
}

function emptyCardReturn(){
    return `
            <div class="emptycart">
                <img src="../assets/img/sadFace.png" alt="carita triste">
                <h3>Tu carrito se encuentra vacío</h3>
                <p><a href="./productos.html">!Vamos a llenarlo!<a></p>
            </div>`
}
