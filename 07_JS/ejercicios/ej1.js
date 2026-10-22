// Crea un programa en JavaScript que evalúe si un usuario puede ingresar a una sección exclusiva de un sitio web.
// Define variables para edad (número) y tienePase (booleano).
// Escribe una estructura condicional (if / else) que verifique si la persona es mayor o igual a 18 años Y cuenta con tienePase === true.
// Muestra por consola el mensaje: "Acceso permitido" si cumple ambas condiciones, o "Acceso denegado" en caso contrario.

let edadUsuario, edadLegal, tienePase


edadLegal=18
edadUsuario = prompt("Ingresa tu edad")
tienePase = true

if(edadUsuario >= edadLegal   ){
    console.log("Acceso permitido")
}else{
    console.log("Acceso denegado")

}

    // console.error("error")
    // console.warn("warn")
    // console.info("info")

    
// nro1 = parseInt(prompt("nro1"))
// console.log(nro1+20)