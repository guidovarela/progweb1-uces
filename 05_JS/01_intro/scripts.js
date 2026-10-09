
// esto es un comentario de linea
/* 
esto es un comentario de bloque
*/ 
var saludo = "Hola Mundo!"
saludo = "Chau Mundo!"

document.write(saludo)

// Variables
// var / let / const
let nombre = "Juan"
let apellido = "Perez"
const edad = 30 // error, no se puede reasignar una constante
let nombreCompleto = nombre + " " + apellido + " " + edad

nombre = "Pedro"

console.log(nombreCompleto) // Pedro Perez 30


// Tipos de datos
// String, Number, Boolean, Null, Undefined, NaN
let estaActivo
console.log(estaActivo) // undefined
//typeOf() -> devuelve el tipo de dato de la variable

// Tipos de datos no primitivos
// Object, Array, Function
// array
// let frutas = ["manzana", "banana", "naranja"]
let frutas = new Array("manzana", "banana", "naranja")
console.log(frutas[0]) // manzana

// let nuevo = prompt("Ingrese un nuevo valor")
// frutas.push(nuevo)
console.log(frutas)

// operadores comparativos
// == / === / != / !== / > / < / >= / <=
// operadores aritmeticos
// + / - / * / / / %

nro1 = 10
nro2 = "10"
let operacion1 = nro1*nro2
console.log(operacion1) // NaN

// condicionales o decisiones
// operadores logicos
// && / || / !

edadActiva = 18
let esHumano = true
let edadUser = prompt("Ingrese su edad")

if (esHumano && edadUser >= edadActiva) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}

// condicional ternario
let resultado = (edadUser >= edadActiva) ? "Es mayor de edad" : "Es menor de edad"
console.log(resultado)