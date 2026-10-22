
let usuarios = []

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
    if (confirmacion == true) {
        usuarios = []
        document.getElementById("usuarios").innerHTML = ""
    }
}   