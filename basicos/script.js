// Ejercicios básicos de JavaScript


// 1. Crear una función que reciba 2 números y retorne la suma

// Tal como en Python, una función sigue siendo lo mismo: 
// un bloque de código reutilizable que devuelve o no un resultado o dato.

function suma(a, b) { //Le asignamos un nombre a la función: 'suma' y le indicamos los parámetros que va a utilizar (a y b)
    return a + b; // Retorna o devuelve el resultado de la operación de sumar a con b
}

// 2. Crear una función que diga si un número es par o impar

function parImpar(num){ //Función parImpar que pide un número como parámetro

    if(Number.isInteger(num)){ //Number.isInteger() es un método que verifica si el valor pasado es un número entero. 
    // Si num es un número entero, se ejecuta el bloque de código dentro del if.

        if (num % 2 == 0){ //Si el número es divisible por 2 
        // (es decir, el resto de la división entre num y 2 es igual a 0), entonces es un número par.

            console.log(`El número ${num} es Par`); //Se imprime el resultadO PAR
        
        }

        else { //Si el número no es divisible por 2, entonces es un número impar.
            console.log(`El número ${num} es Impar`); //Se imprime el resultado IMPAR
        
        }
    }

    else { // Cualquier valor que no sea un número entero, se ejecuta este bloque de código
        console.error("Imposible realizar operación. No es un número entero.") //Se imprime un mensaje de error
        return
    }

}


// 3. Convertir una lista de números en sus cuadrados

function cuadrados(lista){ //Función cuadrados que recibe una lista de números como parámetro

    if(Array.isArray(lista)){ //Array.isArray() es un método que verifica si el valor pasado es un arreglo (lista). 
    // Si lista es un arreglo, se ejecuta el bloque de código dentro del if.

        // 2. Creamos una lista vacía para guardar los resultados
        const cuadrados = [];

        // 3. Recorremos la lista posición por posición, siendo indice cada posicion de cada uno de los numeros
        for (let indice = 0; indice < lista.length; indice++) {

        // 4. Elevamos el número actual al cuadrado
        const resultado = lista[indice] ** 2;
        
        // 5. Lo metemos en nuestra nueva lista
        cuadrados.push(resultado);
        }

        return cuadrados;
    }

    else { // Cualquier valor que no sea un arreglo, se ejecuta este bloque de código
        console.error("Imposible realizar operación. No es una lista.") //Se imprime un mensaje de error
        return
    }
}


// 4. Contar cuántas letras tiene una palabra


function contadorLetras(palabra){ //funcion contadorLetras que recibe una palabra y devuelve su cantidad en letras 
    let contador = 0; //declarar un contador inicializado en 0

    for (const caracter of palabra) { // similar a "for caracter in palabra" en Python. Lee cada letra de la palabra
        
        // Si el caracter NO es un espacio vacío, lo contamos
        if (caracter !== " ") { 
            contador++; //Se aumenta en 1 cada vez que lee un caracter diferente al espacio
        }
    }

    return contador; //Se devuelve la cantidad de letras de la palabra
}

    
// 5. Invertir un string

function invertirString(string){ 
    // En JS los strings no se pueden voltear directamente.
    
    // 1. split(""): Usa un separador vacío y convierte el texto en una lista de letras.
    // Es el equivalente en Python a hacer: list(string)
    const listaDeLetras = string.split(""); // "hola" -> Devuelve: ["h", "o", "l", "a"] (Corta en cada letra)
    
    // 2. reverse(): Voltea el orden de los elementos de esa lista.
    // Es el equivalente en Python a hacer: listaDeLetras.reverse()
    const listaInvertida = listaDeLetras.reverse(); //["h", "o", "l", "a"] -> ["a", "l", "o", "h"]
    
    // 3. join(""): Une los elementos de la lista en un solo texto, pegando las letras sin nada en medio.
    // Es el equivalente en Python a hacer: "".join(listaInvertida)
    const invertido = listaInvertida.join(""); //["a", "l", "o", "h"] -> "aloh"
    
    return invertido;
}
