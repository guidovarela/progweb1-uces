// console.log("Funciones")

// const userName = prompt("Ingrese su nombre: ")

// function darSaludoBienvenida(){

//     alert("Bienvenido/a " + userName)

//     console.log("Función finalizada")

// }

// darSaludoBienvenida();

let alumnos = [];

function cargarAlumnos(){

    //Obtener el nombre del alumno: prompt
    let nuevoAlumno = prompt("Ingrese el nombre del alumno: ")

    //Agregar el alumno al array de alumnos
    alumnos.push(nuevoAlumno)

    pintarAlumnos();

}

function pintarAlumnos(){

    //Pintar en consola
    console.log(alumnos)

    //Pintar alumnos en HTML
    document.getElementById("listaAlumnos").innerText = alumnos;

}