/*
	Script de 3º clase del taller inicial
*/

var producto = parseInt(prompt("Introduzca el precio del producto"))

var precioIVA = producto * 1.21

console.log(producto, precioIVA)

function cambio(monto, moneda) {

	moneda = moneda.toLowerCase(); // Pasamos lo que haya ingresado a minisculas para evitar errores por mayus-minus

	if (moneda == "real") {
		alert(monto/12)
	} else if (moneda == "dolar") {
		alert(monto/14)
	} else if (moneda == "euro") {
		alert(monto/18)
	}
}

var monedaPedida = prompt("¿A qué moneda lo queres pasar?")

cambio(precioIVA, monedaPedida)