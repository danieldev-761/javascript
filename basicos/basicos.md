# Ejercicios básicos de JavaScript

## Introducción

Este documento presenta una serie de ejercicios básicos de JavaScript orientados a practicar funciones, condicionales, ciclos y manipulación de datos. Además, se hace una relación breve con Python para facilitar la comprensión.

## Cómo probar el código

1. Guarda las funciones en un archivo llamado `script.js`.
2. Enlaza ese archivo en un `index.html`.
3. Abre `index.html` en el navegador.
4. Abre la consola del navegador (`F12` o `Ctrl + Shift + I`).
5. Ejecuta las funciones manualmente desde la consola.

Ejemplos:

```javascript
suma(5, 3);
parImpar(8);
cuadrados();
contadorLetras("hola mundo");
invertirString("javascript");
```

## 1. Función `suma(a, b)`

Esta función recibe dos números y retorna su suma.

```javascript
function suma(a, b) {
  return a + b;
}
```

Ejemplo:

```javascript
suma(4, 6); // 10
```

## 2. Función `parImpar(num)`

Esta función recibe un número entero y muestra en consola si es par o impar.  
Si el valor no es entero, muestra un error.

```javascript
function parImpar(num) {
  if (Number.isInteger(num)) {
    if (num % 2 == 0) {
      console.log(`El número ${num} es Par`);
    } else {
      console.log(`El número ${num} es Impar`);
    }
  } else {
    console.error("Imposible realizar operación. No es un número entero.");
  }
}
```

Ejemplo:

```javascript
parImpar(7); // El número 7 es Impar
```

## 3. Función `cuadrados(lista)`

Esta función recibe una lista de números y devuelve otra lista con cada número elevado al cuadrado.

```javascript
function cuadrados(lista) {
  if (Array.isArray(lista)) {
    const resultado = [];

    for (let i = 0; i < lista.length; i++) {
      resultado.push(lista[i] ** 2);
    }

    return resultado;
  } else {
    console.error("Imposible realizar operación. No es una lista.");
  }
}
```

Ejemplo:

```javascript
cuadrados(); // 
```

## 4. Función `contadorLetras(palabra)`

Esta función recorre un texto y cuenta cuántos caracteres tiene, ignorando los espacios.

```javascript
function contadorLetras(palabra) {
  let contador = 0;

  for (const caracter of palabra) {
    if (caracter !== " ") {
      contador++;
    }
  }

  return contador;
}
```

Ejemplo:

```javascript
contadorLetras("hola mundo"); // 9
```

## 5. Función `invertirString(string)`

Esta función invierte un texto.  
Primero lo separa en letras, luego las invierte y finalmente las vuelve a unir.

```javascript
function invertirString(string) {
  return string.split("").reverse().join("");
}
```

Ejemplo:

```javascript
invertirString("hola"); // "aloh"
```

## Consejos al pasar de Python a JavaScript

Si ya sabes Python, estos ejercicios no deberían parecerte tan difíciles, porque la lógica es casi la misma. Lo que cambia principalmente es la forma de escribir el código.

Al comparar ambos lenguajes en estos ejemplos, se puede notar lo siguiente:

- En Python defines funciones con `def`, mientras que en JavaScript se usa `function`, pero en ambos casos sirven para agrupar instrucciones y reutilizar código.
- En Python la estructura depende de la indentación; en JavaScript se usan llaves `{}` para marcar dónde empieza y dónde termina cada bloque.
- Las listas de Python equivalen a los arreglos de JavaScript, por eso una función como `cuadrados(lista)` sigue la misma idea de recorrer elementos y guardar resultados.
- Los condicionales funcionan casi igual: `if` y `else` mantienen la misma lógica, aunque en JavaScript las condiciones van entre paréntesis.
- Para mostrar resultados, en Python normalmente usarías `print()`, mientras que en JavaScript se usa `console.log()` para ver la salida en la consola del navegador.
- Métodos como `split()`, `reverse()` y `join()` pueden parecer nuevos al inicio, pero cumplen una función parecida a transformar y manipular cadenas o listas, como también se hace en Python.
- En ejercicios como `parImpar(num)`, JavaScript ofrece funciones propias como `Number.isInteger()` para validar datos antes de trabajar con ellos.

La idea no es aprender una lógica totalmente nueva, sino acostumbrarse a una sintaxis diferente. Si ya entiendes cómo resolver el problema en Python, en JavaScript el reto principal es aprender cómo escribir esa misma solución.

## Conclusión

Estos ejercicios permiten entender la lógica básica de JavaScript y muestran que, si ya se conoce Python, la transición al lenguaje puede ser mucho más sencilla.

## Autor

- Daniel Echeverría - Coder Riwi