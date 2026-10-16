
### Ejercicios Prácticos de JS

#### **Ejercicio 1: Control de Acceso y Operadores (Condicionales)**

Crea un programa en JavaScript que evalúe si un usuario puede ingresar a una sección exclusiva de un sitio web.

* Define variables para `edad` (número) y `tienePase` (booleano).
* Escribe una estructura condicional (`if / else`) que verifique si la persona es **mayor o igual a 18 años** **Y** cuenta con `tienePase === true`.
* Muestra por consola el mensaje: `"Acceso permitido"` si cumple ambas condiciones, o `"Acceso denegado"` en caso contrario.

---

#### **Ejercicio 2: Contador Progresivo (Estructuras Iterativas)**

Utilizando un bucle `for` o `while`:

* Muestra todos los números pares entre el `1` y el `20`.
* *Desafío opcional:* Si el número es igual a `10`, muestra junto al número el mensaje: `"(Número clave encontrado)"`.

---

#### **Ejercicio 3: Calculadora de Descuentos (Funciones)**

Escribe una función declarada llamada `calcularPrecioFinal`:

* Debe recibir dos parámetros: `precioBase` (número) y `descuento` (porcentaje en número, ej: `15` para 15%).
* La función debe calcular el monto a restar y retornar el precio final con el descuento aplicado.
* Llama a la función pasándole un precio base de `$1000` y un descuento del `20%`, y muestra el resultado.

---

#### **Ejercicio 4: Gestión de Lista de Estudiantes (Arrays y Métodos)**

Dado el siguiente array de nombres:

```
const estudiantes = ["Ana", "Carlos", "Federico", "Lucía", "María"];

```

1. Utiliza el método de array correspondiente para agregar un nuevo estudiante al final de la lista.
2. Utiliza el método `.forEach()` para recorrer el array y mostrar cada nombre en mayúsculas precedido por su posición (índice), por ejemplo: `"0: ANA"`.

#### **Ejercicio Integral**

Crear un programa con 3 acciones:
- lance un prompt para pedir un nombre, lo cargue a un array
- lea un array y lo muestre en pantalla, por medio de un boton
- que limpie el array