// Escribe una función declarada llamada calcularPrecioFinal:

// Debe recibir dos parámetros: precioBase (número) y descuento (porcentaje en número, ej: 15 para 15%).
// La función debe calcular el monto a restar y retornar el precio final con el descuento aplicado.
// Llama a la función pasándole un precio base de $1000 y un descuento del 20%, y muestra el resultado 



function calcularPrecioFinal(precioBase, descuento) {
    let montoDescuento = (precioBase * descuento) / 100;
    let precioFinal = precioBase - montoDescuento
    return precioFinal;
}

let proceso1 = calcularPrecioFinal(1000,20)
let proceso2 = calcularPrecioFinal(20030,10)
let proceso3 = calcularPrecioFinal(78000,15)
console.log(proceso1)
console.log(proceso2)
console.log(proceso3)

