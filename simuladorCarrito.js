/// Simulador de carrito con valores que nos otorga el usuario.


const SI = 'si'
const NO = 'no'
let precio;
let continuar;
let cantidad;
let total = 0;
let final;
let bienvenida;

function infoGeneral() {
    precio = +prompt('ingrese el precio de su producto');
    precio = validacionPrecio(precio);
    cantidad = +prompt('ingrese la cantidad');
    cantidad = validacionCantidad(cantidad);
}

function validacionCantidad(valorCantidad) {
    while (valorCantidad <= 0) {
        valorCantidad = +prompt('cantidad no valida por favor ingrese otro valor.');
    }
    return valorCantidad;
}

function validacionPrecio(valorPrecio) {
    while (valorPrecio < 0) {
        valorPrecio = +prompt('precio invalido pro favor ingrese otro valor.');
    }
    return valorPrecio;
}

bienvenida = 'hola bienvenido a mi simulador de carrito';
alert(bienvenida);

do {
    infoGeneral(); 
    continuar = prompt('desea agregar otro producto si/no');
    continuar = continuar.toLowerCase();
    while(continuar !== SI && continuar !== NO) {
        continuar = prompt('respuesta invalida, responda con si o no');
    }
    total = total + precio * cantidad;
} while(continuar == SI);

final = `Su total es de $${total}, gracias por comprar.`;

alert(final);
