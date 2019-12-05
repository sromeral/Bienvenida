function mensaje(texto) {
	var parrafo = document.getElementById("mensaje");
	var linea = document.createTextNode(texto);
	parrafo.appendChild(linea);
}

function validar(cadena) {
	if (cadena === "") {
		mensaje("El valor no puede estar vacío.");
		return false;
	}
	else {
		if (cadena) {
			return true;
		}
		else {
			mensaje("El valor no puede estar vacío.");
			return false;
		}
	}
}

var nombre = prompt("Escribe tu nombre");
var apellido = prompt("Escribe tu apellido");
if (validar(nombre) && validar(apellido)) {
	mensaje("Hola, " + nombre + " " + apellido + ".");
}