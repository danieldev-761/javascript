// Ejercicios Introductorios


// 1. Declarar variables y tipos de datos

// En JS existen tres formas de declarar variables: var, let y const
// let  -> puede cambiar su valor (como una variable normal en Python)
// const -> no puede reasignarse (como una constante)
// var -> forma antigua, evítala (tiene comportamientos raros con el scope (alcance))

let nombre = "Daniel";        // string  (texto)
let edad = 20;                // number  (en Python serían int o float, en JS es solo number)
let esMayor = true;           // boolean (true/false, en Python es True/False con mayúscula)
let ciudad = null;            // null    (ausencia intencional de valor, como None en Python)

const PI = 3.14159;           // constante: no se puede reasignar

// typeof -> operador que dice qué tipo de dato es una variable (como type() en Python)
console.log("Tipo nombre:", typeof nombre);  // "string"
console.log("Tipo edad:", typeof edad);    // "number"
console.log("Tipo esMayor:", typeof esMayor);  // "boolean"

// Template literals -> forma de insertar variables en texto (como f-strings en Python)
console.log("Saludo:", `Hola, me llamo ${nombre} y tengo ${edad} años`); //Se usa una comilla especial (``), el simbolo $ y las llaves {}

console.log("\n");

// Python:
// nombre = "Daniel"
// print(f"Hola, me llamo {nombre}")


//----------------------------------------------------------------------------------------------------------------------------------


// 2. Condicionales: if/else y operador ternario

// La estructura if/else es casi idéntica a Python, solo cambia la sintaxis
// En JS se usan llaves {} en lugar de los dos puntos : y la indentación

let puntaje = 75;

if (puntaje >= 90) {
    console.log("Excelente");
} else if (puntaje >= 60) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

console.log("\n");

// Operador ternario -> versión corta de un if/else para una sola condición
// Estructura: condicion ? valorSiTrue : valorSiFalse

let mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log("Mensaje edad:", mensaje);
console.log("\n");


// Es equivalente a esto:
// if (edad >= 18) {
//     mensaje = "Es mayor de edad";
// } else {
//     mensaje = "Es menor de edad";
// }

// Python:
// mensaje = "Es mayor de edad" if edad >= 18 else "Es menor de edad"


//----------------------------------------------------------------------------------------------------------------------------------


// 3. Funciones: declaración, parámetros y retorno

// En JS hay dos formas principales de declarar funciones

// Forma 1: function declaration (como def en Python)
function sumar(a, b) {
    return a + b; 
}

// Forma 2: arrow function (función flecha) -> forma moderna y compacta con return no explícito
const multiplicar = (a, b) => a * b;

// Si el bloque de la funcion flecha tiene más de una línea, necesita llaves {} y return explícito
const dividir = (a, b) => {
    if (b === 0) return "No se puede dividir entre cero";
    return a / b;
};

console.log("Suma:", sumar(3, 5)); // 8
console.log("Multiplicación:", multiplicar(4, 6));// 24
console.log("División:", dividir(10, 2));   // 5
console.log("División (0):", dividir(10, 0)); // "No se puede dividir entre cero"
console.log("\n"); //Salto de línea


// Python:
// def sumar(a, b):
//     return a + b

// multiplicar = lambda a, b: a * b


//----------------------------------------------------------------------------------------------------------------------------------


// 4. Switch case

// switch evalúa una variable y ejecuta el bloque que coincida con su valor
// Es una alternativa más legible a varios if/else if seguidos cuando se compara el mismo valor

// En Python no existe switch nativo (antes de Python 3.10), se usaban diccionarios o if/elif
// En Python 3.10+ existe match/case, que cumple el mismo rol

let dia = 3;
let nombreDia; //let permite declarar sin asignar valor, queda como undefined hasta que se asigne

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;               // break es obligatorio para que no siga ejecutando los demás casos
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    default:                 // default = else (se ejecuta si ningún case coincide)
        nombreDia = "Fin de semana";
}

console.log("Día:", nombreDia);     // "Miércoles"
console.log("\n");

// ¿Qué pasa si olvidas el break?
// JS sigue ejecutando todos los cases siguientes hasta encontrar uno o llegar al final
// Esto se llama "fall-through" y casi siempre es un error


//----------------------------------------------------------------------------------------------------------------------------------


// 5. Métodos nativos de arrays y strings

// JS tiene métodos incorporados para trabajar con arrays y strings
// Son equivalentes a los métodos de listas y strings en Python

const frutas = ["mango", "pera", "uva", "manzana"];

// .push()    -> agrega al final          (como .append() en Python)
// .pop()     -> elimina y retorna el último (igual en Python)
// .includes()-> verifica si existe        (como "in" en Python)
// .indexOf() -> retorna la posición       (como .index() en Python)
// .join()    -> une elementos en un string (como "".join() en Python)
// .length    -> cantidad de elementos     (como len() en Python, pero es propiedad, no función)

frutas.push("sandía");
console.log("Frutas (+sandía):", frutas); // ["mango", "pera", "uva", "manzana", "sandía"]

frutas.pop();
console.log("Frutas (sin última):", frutas); // ["mango", "pera", "uva", "manzana"]

console.log("Incluye 'uva':", frutas.includes("uva")); // true
console.log("Índice 'pera':", frutas.indexOf("pera")); // 1 -> ojo, 0 es la primera, 1 es la segunda posición, no confundir!
console.log("Unidas:", frutas.join(", ")); // "mango, pera, uva, manzana"
console.log("Cantidad:", frutas.length);  // 4 (después de hacer el pop)
console.log("\n");




// Métodos de strings
let frase = "  Hola Mundo  ";

// .trim()       -> elimina espacios al inicio y al final (como .strip() en Python)
// .toUpperCase()-> convierte a mayúsculas (como .upper() en Python)
// .toLowerCase()-> convierte a minúsculas (como .lower() en Python)
// .includes()   -> verifica si contiene un texto (como "in" en Python con strings)
// .replace()    -> reemplaza texto (como .replace() en Python)
// .split()      -> divide en array según un separador (como .split() en Python)

console.log("Sin espacios:", frase.trim()); // "Hola Mundo"
console.log("Mayúsculas:", frase.trim().toUpperCase()); // "HOLA MUNDO"
console.log("Minúsculas:", frase.trim().toLowerCase()); // "hola mundo"
console.log("Contiene 'Mundo':", frase.includes("Mundo")); // true
console.log("Reemplazo:", frase.trim().replace("Mundo", "JS")); // "Hola JS"
console.log("Separado:", frase.trim().split(" "));  // ["Hola", "Mundo"]


// Python:
// frase = "  Hola Mundo  "
// frase.strip()
// frase.upper()
// "Mundo" in frase
// frase.replace("Mundo", "JS")
// frase.split(" ")