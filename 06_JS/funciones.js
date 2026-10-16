// funcion declarada
function mostrarUsuarios() {
        let users = ["Marcela", "Juan", "Pedro", "Maria"]
        for (let user of users) {
            document.body.innerHTML = document.body.innerHTML + user + "<br>"
        }  
    }
let planeta = "Tierra"
// funcion con parametros
    function saludar(nombre) {
        let mensaje = document.body.innerHTML + nombre + "<br>Estas el planeta"+planeta
        document.body.innerHTML = mensaje
    }
    // saludar("Marcela")
    // saludar("Juan")
    // saludar("Pedro")
    // saludar()
//ambitos de uso de una variable: global y local
    // console.log(mensaje)

    // funcion anonima
    const mostrarUsuarios2 = function() {
        let users = ["Marcela", "Juan", "Pedro", "Maria"]
        for(let user of users) {
            document.body.innerHTML += "Hola " + user + "<br>"
        }
    }
    // mostrarUsuarios2()

    // funcion flecha (arrow Function)
    const mostrarUsuarios3 = () => {
        let users = ["Marcela", "Juan", "Pedro", "Maria"]
        for(let user of users) {
            document.body.innerHTML += "Hola " + user + "<br>"
        }           
    }
    const square = x => x * x;
    console.log(square(4));

usuarios = []
function nuevoUsuario() {
    let nombre = prompt("Ingrese un nombre")
    usuarios.push(nombre)
}
function verUsuarios() {
    document.getElementById("usuarios").innerHTML = ""
    for (let user of usuarios) {
        document.getElementById("usuarios").innerHTML += "Hola " + user + "<br>"
    }
}
function borrarUsuarios() {
    let confirmacion = confirm("Desea borrar los usuarios?")
    if (confirmacion) {
        usuarios = []
        document.getElementById("usuarios").innerHTML = ""
    }
}   