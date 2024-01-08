class GestorDeProductos {
    constructor() {
        this.productos = [];
        this.contadorIdProducto = 1; 
    }

    agregarProducto(nombre, descripcion, precio, imagen, codigo, stock) {
        if (!nombre || !descripcion || !precio || !imagen || !codigo || !stock) {
            console.error('Todos los campos son obligatorios.');
            return;
        }

        if (this.productos.some(producto => producto.codigo === codigo)) {
            console.error('Ya existe un producto con el mismo código.');
            return;
        }

        const nuevoProducto = {
            id: this.contadorIdProducto++,
            nombre,
            descripcion,
            precio,
            imagen,
            codigo,
            stock,
        };

        this.productos.push(nuevoProducto);
        console.log(`Producto "${nombre}" agregado con ID ${nuevoProducto.id}.`);
    }

    obtenerProductos() {
        return this.productos;
    }

    obtenerProductoPorId(idProducto) {
        const producto = this.productos.find(producto => producto.id === idProducto);

        if (producto) {
            console.log(`Producto encontrado: ${producto.nombre}`);
            return producto;
        } else {
            console.error(`Producto con ID ${idProducto} no encontrado.`);
            return null;
        }
    }
}

//Ejemplo
const gestorDeProductos = new GestorDeProductos();

gestorDeProductos.agregarProducto('Laptop', 'Potente laptop', 999.99, 'laptop.jpg', 'LPT001', 10);
gestorDeProductos.agregarProducto('Smartphone', 'Teléfono inteligente', 399.99, 'smartphone.jpg', 'SPH001', 20);

console.log('Lista de productos:', gestorDeProductos.obtenerProductos());

const idProductoBuscado = 2;
const productoEncontrado = gestorDeProductos.obtenerProductoPorId(idProductoBuscado);
