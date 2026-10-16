// Condicionales:

//// 1. Crear un programa que pida al usuario su edad y muestre en pantalla si es mayor de edad o no, siendo 18 años la mayoría de edad.

function puedeIngresar() {

    // Obtener la edad del cliente
    const edad = prompt("Ingrese la edad del cliente");
    // Definimos que para poder ingresar a ver la película, el cliente debe tener 15 o más años
    //  a - ✅ Si el cliente posee edad o más puede ingresar 
    //  b - ❌ Si el cliente posee menos de 15 años no puede ingresar 
    // ( condición  )
    if( edad >= 15 ) {
        console.log("✅ El cliente puede ingresar a ver la peli");
    } else {
        console.log("❌ El cliente NO puede ingresar")
    }

}

puedeIngresar();



console.log("Fin del programa")
