// Ejercicios Intermedios

// 1. Crear un objeto "usuario" con métodos

const usuario = {
    cc: 1042641423,      // objeto: estructura par clave-valor (como diccionario en Python)
    nombre: "Usuario1", // Ej. -> clave: nombre, valor: "Usuario1"
    edad: 20,


    //Los métodos de un objeto, en JS, son funciones almacenadas dentro de un valor
    //Métodos de objeto -> se escriben como clave: function() {}

    mostrarInfo: function() { // método dentro del objeto (en Python sería dentro de una clase (plano o plantilla para crear objetos con 'class' en Python))
        
        // this ≈ self (llamándose a sí mismo), se refiere al objeto, en este caso usuario
        console.log("Nombre:", this.nombre);
        console.log("Edad:", this.edad);
    },

    esMayorDeEdad: function() { //Este método tiene como clave esMayorDeEdad

        return this.edad >= 18;  // retorna un booleano (True or False), 
        // igual que en Python se usa return para devolver algo en una función 
    },

    actualizarEdad: function(nuevaEdad) { // modifica el atributo (self.edad en Python)
        
        this.edad = nuevaEdad; //Recordar: En JS, a pesar de que se declaró el objeto con const, 
        // este lenguaje deja modificar el contenido de ese objeto, mientras no se intente modificar su referencia (reasignar el objeto completo)
    }

    // Error en JS -> Intentas reasignar el objeto completo (usuario = { ... }).
};

// llamadas a métodos (no cambia la idea viniendo de Python) -> objeto.método([dato opcional]) -> ej: usuario.actualizarEdad(25)
console.log("Info usuario:");
usuario.mostrarInfo();

console.log("¿Mayor de edad?:", usuario.esMayorDeEdad());

console.log("Actualizar edad a 25");
usuario.actualizarEdad(25);

console.log("Info actualizada:");
usuario.mostrarInfo();


//----------------------------------------------------------------------------------------------------------------------------------


// 2. Simular un contador usando closure



//Closure es una función que recuerda las variables de donde fue creada, 
// incluso si ese lugar ya terminó de ejecutarse.

//Funciona como si la función encerrara en una caja su entorno (su contenido) y se lo lleva con ella,
//Así es posible utilizar esas variables luego, incluso si se usan dentro de otra función (la cual está dentro de esa misma función principal).


// En JS, una "closure" permite recordar variables aunque la función ya terminó
// En Python sería parecido a una función dentro de otra (funciones anidadas)

function crearContador() {
    let contador = 0; // variable "privada"

    return function() {
        // esta función recuerda "contador" que está en la función principal crearContador()
        contador++; //Aumenta en 1 la variable contador, si está en 0 ahora estará en 1 al ejecutarse, y así sucesivamente
        return contador; //Retorna el nuevo valor de contador
    };
}

const contador = crearContador(); // guardamos la función que se devuelve

console.log(`\nContador: ${contador()}`); // contador queda 1
console.log(`Contador: ${contador()} \n`); // contador queda 2

// Forma simple de entenderlo (comparación con Python):
// Es como una función dentro de otra que sigue usando la misma variable,
// Frase clave: "guarda el valor aunque la función ya terminó"



//----------------------------------------------------------------------------------------------------------------------------------


// 3. Crear una función que reciba otra función (callback)

// Un callback es una función que se pasa como argumento a otra función. 
// Argumento -> Valor que recibe una función para utilizar dentro de su bloque y hacer algo con ese valor

// En Python también puedes pasar funciones como argumentos

function saludar(nombre) { //funcion que recibe un nombre (texto-string)
    return "Hola " + nombre; //retorna ese nombre concatenado o unido con "Hola "
}

function procesarUsuario(callback) {
    // callback = función que se recibe 
    return callback("Daniel"); //retorna lo que haga la funcion callback con ese nombre, en este caso, "Hola Daniel"
}

console.log("\nCallback:", procesarUsuario(saludar)); // En este caso, la función que recibe procesarUsuario es saludar (callback)

// Python:

// def saludar(nombre):
//     return f"Hola {nombre}"

// def procesar_usuario(funcion):
//     return funcion("Daniel")


//----------------------------------------------------------------------------------------------------------------------------------


// 4. Filtrar números mayores a 10 en un array

// En JS se usa .filter()
//Reglas:  - La función que le pasas recibe cada elemento y debe devolver true (para quedárselo) o false (para descartarlo).
// - Si nadie cumple: Te devuelve un array vacío [], nunca null o undefined.

// En Python sería una list comprehension -> Piensa en ella como un bucle for escrito al revés

const numeros = [5, 12, 8, 20, 3]; //array de numeros

const mayores = numeros.filter(function(num) { //recibe un callback: funcion pasada como argumento
    return num > 10; // condición: si la condición es true → se guarda
    // si es false → se descarta
});

console.log("\nMayores a 10:", mayores); // [12, 20] -> No modifica el original: Te devuelve un nuevo array inmutable

// Python:
// numeros = [5, 12, 8, 20, 3]
// [n for n in numeros if n > 10] -> Estructura: [expresión for elemento in iterable]


//----------------------------------------------------------------------------------------------------------------------------------

// 5. Reducir un array a su suma total

// En JS se usa .reduce()
// En Python sería sum()

// const numeros = [5, 12, 8, 20, 3]; //array de numeros ya declarado antes

// reduce recorre todo el array uno por uno
const suma = numeros.reduce(function(acumulador, num) {  // acumulador guarda el resultado parcial
    // num: es cada número del array (como "n" en Python)

    return acumulador + num; // en cada paso suma el valor actual al acumulado

}, 0); // 0 es el valor inicial del acumulador

console.log("Suma:", suma);;

// Explicación breve
// empieza en 0
// va sumando cada número
// devuelve un solo resultado final

// Sin llaves {} ni palabra "return" (retorno no explícito), igual que una lambda en Python -> Lambda sencilla para sumar dos números: sumar = lambda a, b: a + b
// const suma = numeros.reduce((acc, num) => acc + num, 0); estilo version flecha

// Python:
// sum(numeros) // JS no tiene un método nativo para suma directa de numeros en arrays