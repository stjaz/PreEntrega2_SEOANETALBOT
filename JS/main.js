const productos = [{
    id: 726,
    nombre: 'Camsieta Ohaio',
    precio: 5.00
},
{
    id: 897,
    nombre: 'Short Las Vegas',
    precio: 10.00
},
{
    id: 432,
    nombre: 'Sandalias Egypt',
    precio: 40.00
},
];

const carrito = [];

function mostrarProductos() {
productos.forEach(producto => {
    alert('Productos disponibles: '+`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio.toFixed(2)}`);
});
}

function agregarAlCarrito() {
const productoId = parseInt(prompt('Ingresa el ID del producto que deseas agregar al carrito:'));
const prodSeleccionado = productos.find(producto => producto.id === productoId);

if (prodSeleccionado) {
    carrito.push(prodSeleccionado);
    alert(`${prodSeleccionado.nombre} ha sido agregado al carrito.`);
} else {
    alert('Producto no encontrado.');
}
}

function mostrarCarrito() {
alert('Productos en el carrito:');
carrito.forEach(producto => {
    alert(`Nombre: ${producto.nombre}, Precio: $${producto.precio.toFixed(2)}`);
});

const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
alert(`Total del carrito: $${total.toFixed(2)}`);

seleccionMetodoPago();
}

function seleccionMetodoPago() {
const pagoMetodos = ['Tarjeta de crédito', 'PayPal', 'Transferencia bancaria'];
const pagoElegido = prompt(`Elige un medio de pago escribiendo exactamente como figura en la lista:\n${pagoMetodos.join('\n')}`);

if (pagoMetodos.includes(pagoElegido)) {
    alert(`Has elegido pagar con: ${pagoElegido}`);
    procesoPago(pagoElegido);
} else {
    alert('Medio de pago no válido.');
    seleccionMetodoPago(); // Vuelve a solicitar la elección si es inválida-> esto es un comentario de chatgpt, ni vi como hacerlo xd
}
}

function procesoPago(pagotMetodo) {
alert(`Procesando el pago con ${pagoMetodo}. ¡Gracias por elegirnos!`);
} //procesamiento de pago agregarlo acá para entrega3




let usuario = "Marta Sanchez";
let contrasenia = "121212";
let logueoUsuario = false;
let logueoContra = false;

for (let i = 2; i >= 0; i--) {
    let ingresoUsuario = prompt("Por favor ingresá tu Usuario");
    let ingresoContrasenia = prompt("Por favor ingresá tu Contraseña");
    if (usuario === ingresoUsuario && contrasenia === ingresoContrasenia) {
        alert("Bienvenida " + usuario + ". A continuación verás los productos disponibles para agregar al carrito de compras. Recuerda el ID, deberás ingresarlo luego.");
        logueoUsuario = true;
        logueoContra = true;
        mostrarProductos();
        agregarAlCarrito();
        agregarAlCarrito();
        mostrarCarrito();  
        break;
    } else {
        switch (i) {
            case i = 2:
                alert("Datos incorrectos. Quedan 2 intentos")
                break;
            case i = 1:
                alert("Datos incorrectos. Quedan 1 intentos")
                break;
            case i = 0:
                alert("Datos incorrectos. Inténtelo de nuevo más tarde")
                break;
        }
    }

}