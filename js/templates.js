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
                    <img src=".${producto.imagen}" alt="${producto.nombre}">
                </td>
                <td>
                    <a href="#"><h4>${producto.nombre}</h4></a>
                    <p></p>
                </td>
                <td class="quantity-container">
                    <button class="button" id="subtract-btn${producto.codigo}">-</button>
                    <span class="quantity" id="quantity${producto.codigo}">${producto.cantidad}</span>
                    <button class="button" id="add-btn${producto.codigo}">+</button>
                </td>
                <td>$${producto.precio}</td>
                <td>$#</td>
            </tr>`
}

