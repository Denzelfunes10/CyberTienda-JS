function cardReturn(producto){
    return `<div class="product-target">
                <img src=".${producto.imagen}" alt="${producto.nombre}">
                <figcaption>${producto.nombre}</figcaption>
                <button id="${producto.codigo}" class="btn btn-primary btn-add">Añadir al carrito</button>
            </div>`
}

function productCardReturn(producto){
    return `<tr>
                <td>
                    <img src=".${producto.product.imagen}" alt="${producto.product.nombre}">
                </td>
                <td>
                    <a href="#"><h4>${producto.product.nombre}</h4></a>
                    <p></p>
                </td>
                <td class="quantity-container">
                    <button class="button" id="subtract-btn${producto.product.codigo}">-</button>
                    <span class="quantity" id="quantity${producto.product.codigo}">${producto.quantity}</span>
                    <button class="button" id="add-btn${producto.product.codigo}">+</button>
                </td>
                <td>$${producto.product.precio}</td>
                <td>$</td> 
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
                        <button class="checkout-btn">Tramitar Pedido</button>
                    </td>
                </tr>
            </tfoot>`
}

