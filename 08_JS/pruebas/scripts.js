
let persona = {
    nombre : "Pedro",
    apellido: "Diaz",
    fechaNac: "2000-01-10",
    estaActivo: true,
    saludar: function() {
        alert("hola "+this.nombre)
    }
}
//acceder a los datos: objeto.metodo
console.log(persona.nombre)

// Agregar claves
let nuevoValor = "Argentina"
persona.nacionalidad = nuevoValor
console.log(persona)

let user = []
let persona2 = {
    nombre : "maria",
    apellido: "de la paz",
    fechaNac: "2005-01-10",
    estaActivo: false,
    saludar: function() {
        alert("hola "+this.nombre)
    }
}

user.push(persona)
user.push(persona2)
console.log(user)

for (const element of user) {
    console.log(`Usuario: ${element.nombre} ${element.apellido}`)
    document.getElementById("users").innerHTML+=`Usuario: ${element.nombre} ${element.apellido}`
    
}

function popup(){
    window.open("http://google.com")
}

// DOM
console.log(document.getElementsByClassName("users")[0].textContent)
// console.log(document.body.childNodes[3].style="color:red")
document.get

// Eventos

let ubicacionBtn = document.querySelector("#btn1");
ubicacionBtn.addEventListener('click',function() {
    return popup()
})