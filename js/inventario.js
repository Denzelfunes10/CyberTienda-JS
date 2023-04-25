
const carrito = []


// const listProducts = [  
//     { codigo: 1, categoria: "Laptops", nombre: "Laptop 1", precio: 250.00, imagen: "./assets/img/imgProductos/acerNitro.png" },
//     { codigo: 2, categoria: "Laptops", nombre: "Laptop 2", precio: 350.00, imagen: "./assets/img/imgProductos/laptop-asus.jpg" },
//     { codigo: 3, categoria: "Laptops", nombre: "Laptop 3", precio: 450.00, imagen: "./assets/img/imgProductos/laptop-dell.jpg" },
//     { codigo: 4, categoria: "Laptops", nombre: "Laptop 4", precio: 550.00, imagen: "./assets/img/imgProductos/laptop-huawei.jpg" },
//     { codigo: 5, categoria: "Laptops", nombre: "Laptop 5", precio: 650.00, imagen: "./assets/img/imgProductos/macbook.jpg" },

//     { codigo: 6, categoria: "PC de escritorio", nombre: "PC 1", precio: 200.00, imagen: "./assets/img/imgProductos/PC.png" },
//     { codigo: 7, categoria: "PC de escritorio", nombre: "PC 2", precio: 300.00, imagen: "./assets/img/imgProductos/pc2.png" },
//     { codigo: 8, categoria: "PC de escritorio", nombre: "PC 3", precio: 400.00, imagen: "./assets/img/imgProductos/pc3.png" },
//     { codigo: 9, categoria: "PC de escritorio", nombre: "PC 4", precio: 500.00, imagen: "./assets/img/imgProductos/pc4.jpg" },
//     { codigo: 10, categoria: "PC de escritorio", nombre: "PC 5", precio: 600.00, imagen: "./assets/img/imgProductos/pc5.png" },

//     { codigo: 11, categoria: "Almacenamiento", nombre: "SSD 240GB", precio: 40.00, imagen: "./assets/img/imgProductos/ssd-kingston.png" },
//     { codigo: 12, categoria: "Almacenamiento", nombre: "SSD 480GB", precio: 60.00, imagen: "./assets/img/imgProductos/hdd.jpg" },
//     { codigo: 13, categoria: "Almacenamiento", nombre: "SSD 1TB", precio: 100.00, imagen: "./assets/img/imgProductos/ssd-m2.jpg" },
//     { codigo: 14, categoria: "Almacenamiento", nombre: "SSD 2TB", precio: 150.00, imagen: "./assets/img/imgProductos/ssd-wdblue.jpg" },
//     { codigo: 15, categoria: "Almacenamiento", nombre: "SSD 4TB", precio: 270.00, imagen: "./assets/img/imgProductos/ssd.png" },

//     { codigo: 16, categoria: "Memorias RAM", nombre: "RAM 2GB", precio: 10.00, imagen: "./assets/img/imgProductos/ram-fury.jpg" },
//     { codigo: 17, categoria: "Memorias RAM", nombre: "RAM 4GB", precio: 25.00, imagen: "./assets/img/imgProductos/ram-generica.jpg" },
//     { codigo: 18, categoria: "Memorias RAM", nombre: "RAM 8GB", precio: 45.00, imagen: "./assets/img/imgProductos/ram-impact.png" },
//     { codigo: 19, categoria: "Memorias RAM", nombre: "RAM 16GB", precio: 60.00, imagen: "./assets/img/imgProductos/ram-crucial.png" },
//     { codigo: 20, categoria: "Memorias RAM", nombre: "RAM 32GB", precio: 110.00, imagen: "./assets/img/imgProductos/ram.png" },

//     { codigo: 21, categoria: "Teclados", nombre: "Teclado 1", precio: 40.00, imagen: "./assets/img/imgProductos/teclado1.jpg" },
//     { codigo: 22, categoria: "Teclados", nombre: "Teclado 2", precio: 60.00, imagen: "./assets/img/imgProductos/teclado2.jpg" },
//     { codigo: 23, categoria: "Teclados", nombre: "Teclado 3", precio: 100.00, imagen: "./assets/img/imgProductos/teclado3.jpg" },
//     { codigo: 24, categoria: "Teclados", nombre: "Teclado 4", precio: 150.00, imagen: "./assets/img/imgProductos/teclado4.jpg" },
//     { codigo: 25, categoria: "Teclados", nombre: "Teclado 5", precio: 270.00, imagen: "./assets/img/imgProductos/teclado5.jpg" },

//     { codigo: 26, categoria: "Ratones", nombre: "Mouse 1", precio: 10.00, imagen: "./assets/img/imgProductos/mouse1.jpg" },
//     { codigo: 27, categoria: "Ratones", nombre: "Mouse 2", precio: 25.00, imagen: "./assets/img/imgProductos/mouse2.jpg" },
//     { codigo: 28, categoria: "Ratones", nombre: "Mouse 3", precio: 45.00, imagen: "./assets/img/imgProductos/mouse3.jpg" },
//     { codigo: 29, categoria: "Ratones", nombre: "Mouse 4", precio: 60.00, imagen: "./assets/img/imgProductos/mouse4.jpg" },
//     { codigo: 30, categoria: "Ratones", nombre: "Mouse 5", precio: 110.00, imagen: "./assets/img/imgProductos/mouse5.jpg" },
    
//     { codigo: 31, categoria: "Bocinas", nombre: "Bocinas 1", precio: 270.00, imagen: "./assets/img/imgProductos/bocina1.png" },
//     { codigo: 32, categoria: "Bocinas", nombre: "Bocinas 2", precio: 10.00, imagen: "./assets/img/imgProductos/bocina2.jpg" },
//     { codigo: 33, categoria: "Bocinas", nombre: "Bocinas 3", precio: 25.00, imagen: "./assets/img/imgProductos/bocina3.jpeg" },
//     { codigo: 34, categoria: "Bocinas", nombre: "Bocinas 4", precio: 45.00, imagen: "./assets/img/imgProductos/bocina4.jpg" },
//     { codigo: 35, categoria: "Bocinas", nombre: "Bocinas 5", precio: 60.00, imagen: "./assets/img/imgProductos/bocina5.png" },

//     { codigo: 36, categoria: "Audifonos", nombre: "Audifonos 1", precio: 110.00, imagen: "./assets/img/imgProductos/audifonos1.jpg" },
//     { codigo: 37, categoria: "Audifonos", nombre: "Audifonos 2", precio: 110.00, imagen: "./assets/img/imgProductos/audifonos2.jpg" },
//     { codigo: 38, categoria: "Audifonos", nombre: "Audifonos 3", precio: 110.00, imagen: "./assets/img/imgProductos/audifonos3.jpg" },
//     { codigo: 39, categoria: "Audifonos", nombre: "Audifonos 4", precio: 110.00, imagen: "./assets/img/imgProductos/audifonos4.jpg" },
//     { codigo: 40, categoria: "Audifonos", nombre: "Audifonos 5", precio: 110.00, imagen: "./assets/img/imgProductos/audifonos5.jpg" }
// ]

const Categories = [
    { codigo: "C1", nombre: "Laptops", ruta: "/ Laptops"},
    { codigo: "C2", nombre: "PC de escritorio", ruta: "/ PC de escritorio"},
    { codigo: "C3", nombre: "Almacenamiento", ruta: "/ Almacenamiento"},
    { codigo: "C4", nombre: "Memorias RAM", ruta: "/ Memorias RAM"},
    { codigo: "C5", nombre: "Teclados", ruta: "/ Teclados"},
    { codigo: "C6", nombre: "Ratones", ruta: "/ Ratones"},
    { codigo: "C7", nombre: "Bocinas", ruta: "/ Bocinas"},
    { codigo: "C8", nombre: "Audifonos", ruta: "/ Audifonos"}
]