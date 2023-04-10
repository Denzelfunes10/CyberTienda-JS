
const carrito = []

const listProducts = [  
    { codigo: 1, categoria: "Laptops", nombre: "Laptop 1", precio: 250.00, imagen: "./assets/img/imgProductos/acerNitro.png" },
    { codigo: 2, categoria: "Laptops", nombre: "Laptop 2", precio: 350.00, imagen: "./assets/img/imgProductos/acerNitro.png" },
    { codigo: 3, categoria: "Laptops", nombre: "Laptop 3", precio: 450.00, imagen: "./assets/img/imgProductos/acerNitro.png" },
    { codigo: 4, categoria: "Laptops", nombre: "Laptop 4", precio: 550.00, imagen: "./assets/img/imgProductos/acerNitro.png" },
    { codigo: 5, categoria: "Laptops", nombre: "Laptop 5", precio: 650.00, imagen: "./assets/img/imgProductos/acerNitro.png" },
    { codigo: 6, categoria: "PC de escritorio", nombre: "PC 1", precio: 200.00, imagen: "./assets/img/imgProductos/PC.png" },
    { codigo: 7, categoria: "PC de escritorio", nombre: "PC 2", precio: 300.00, imagen: "./assets/img/imgProductos/PC.png" },
    { codigo: 8, categoria: "PC de escritorio", nombre: "PC 3", precio: 400.00, imagen: "./assets/img/imgProductos/PC.png" },
    { codigo: 9, categoria: "PC de escritorio", nombre: "PC 4", precio: 500.00, imagen: "./assets/img/imgProductos/PC.png" },
    { codigo: 10, categoria: "PC de escritorio", nombre: "PC 5", precio: 600.00, imagen: "./assets/img/imgProductos/PC.png" },
    { codigo: 11, categoria: "Almacenamiento", nombre: "SSD 240GB", precio: 40.00, imagen: "./assets/img/imgProductos/ssd.png" },
    { codigo: 12, categoria: "Almacenamiento", nombre: "SSD 480GB", precio: 60.00, imagen: "./assets/img/imgProductos/ssd.png" },
    { codigo: 13, categoria: "Almacenamiento", nombre: "SSD 1TB", precio: 100.00, imagen: "./assets/img/imgProductos/ssd.png" },
    { codigo: 14, categoria: "Almacenamiento", nombre: "SSD 2TB", precio: 150.00, imagen: "./assets/img/imgProductos/ssd.png" },
    { codigo: 15, categoria: "Almacenamiento", nombre: "SSD 4TB", precio: 270.00, imagen: "./assets/img/imgProductos/ssd.png" },
    { codigo: 16, categoria: "Memorias RAM", nombre: "RAM 2GB", precio: 10.00, imagen: "./assets/img/imgProductos/ram.png" },
    { codigo: 17, categoria: "Memorias RAM", nombre: "RAM 4GB", precio: 25.00, imagen: "./assets/img/imgProductos/ram.png" },
    { codigo: 18, categoria: "Memorias RAM", nombre: "RAM 8GB", precio: 45.00, imagen: "./assets/img/imgProductos/ram.png" },
    { codigo: 19, categoria: "Memorias RAM", nombre: "RAM 16GB", precio: 60.00, imagen: "./assets/img/imgProductos/ram.png" },
    { codigo: 20, categoria: "Memorias RAM", nombre: "RAM 32GB", precio: 110.00, imagen: "./assets/img/imgProductos/ram.png" }
]

const Categories = [
    { codigo: "C1", nombre: "Laptops", ruta: "/ Laptops"},
    { codigo: "C2", nombre: "PC de escritorio", ruta: "/ PC de escritorio"},
    { codigo: "C3", nombre: "Almacenamiento", ruta: "/ Almacenamiento"},
    { codigo: "C4", nombre: "Memorias RAM", ruta: "/ Memorias RAM"},
    { codigo: "C5", nombre: "Teclados", ruta: "/ Teclados"},
    { codigo: "C6", nombre: "Ratones", ruta: "/ Ratones"},
    { codigo: "C7", nombre: "Bocinas", ruta: "/ Bocinas"},
    { codigo: "C8", nombre: "Audifonos", ruta: "/ Audifonos"},
    { codigo: "C9", nombre: "Accesorios para celulares", ruta: "/ Accesorios para celulares"},
    { codigo: "C10", nombre: "Software", ruta: "/ Software"}
]