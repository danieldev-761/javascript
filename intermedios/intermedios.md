# Guía de JavaScript Intermedio para Principiantes

> Conceptos clave con comparaciones en Python y ejemplos comentados.

---

## Objetivo: 
Aprender nuevos conceptos de Javascript y aplicarlos con guía pensada para desarrolladores que vienen de Python

## Índice

1. [Objetos](#1-objetos)
2. [Closures](#2-closures)
3. [Callbacks](#3-callbacks)
4. [.filter()](#4-filter)
5. [.reduce()](#5-reduce)

---

## 1. Objetos

Un objeto es una estructura que agrupa datos (propiedades) y funciones (métodos) bajo un mismo nombre.

> **Analogía Python:** Es como un diccionario que además puede contener funciones. La keyword `this` en JS cumple el mismo rol que `self` en una clase de Python — se refiere al objeto actual.

```js
const usuario = {
    cc: 1042641423,
    nombre: "Usuario1",
    edad: 20,

    // Método: función almacenada como valor dentro del objeto
    mostrarInfo: function() {
        console.log("Nombre:", this.nombre); // this = el objeto
        console.log("Edad:", this.edad);
    },

    esMayorDeEdad: function() {
        return this.edad >= 18; // retorna true o false
    },

    actualizarEdad: function(nuevaEdad) {
        this.edad = nuevaEdad; // modifica la propiedad
    }
};

// Llamadas a métodos
usuario.mostrarInfo();
usuario.actualizarEdad(25);
console.log(usuario.esMayorDeEdad()); // true
```

### ⚠️ ¿Por qué `const` no impide modificar el objeto?

`const` impide reasignar la **referencia** del objeto, pero sí permite modificar sus propiedades internas.

```js
// ✅ Esto sí funciona con const
usuario.edad = 30;

// ❌ Esto lanza error con const
usuario = { nombre: "otro" };
```

> **Regla fácil:** `const` fija el "letrero" que apunta al objeto, no el contenido del objeto.

---

## 2. Closures

Una closure es una función que **recuerda las variables del contexto donde fue creada**, incluso después de que esa función externa ya terminó de ejecutarse.

> **Analogía Python:** Se parece a las funciones anidadas — una función dentro de otra que accede a las variables de su función contenedora. La diferencia es que en JS, el valor se *mantiene vivo* incluso después de que la función externa terminó.

```js
function crearContador() {
    let contador = 0; // variable "privada", no accesible desde afuera

    return function() {
        // esta función recuerda "contador" aunque crearContador() ya terminó
        contador++;
        return contador;
    };
}

const contador = crearContador(); // guarda la función devuelta

console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
```

### ¿Por qué es útil?

Cada llamada a `crearContador()` crea su propio contador independiente:

```js
const contadorA = crearContador();
const contadorB = crearContador();

contadorA(); // 1 (contador de A)
contadorA(); // 2 (contador de A)
contadorB(); // 1 (contador de B, independiente)
```

> **Frase clave para recordarla:** *"guarda el valor aunque la función ya terminó".*

---

## 3. Callbacks

Un callback es una **función que se pasa como argumento a otra función**. La función receptora decide cuándo y cómo ejecutarla.

> **Analogía Python:** Es el mismo concepto — en Python también puedes pasar funciones como argumentos. Por ejemplo: `sorted(lista, key=mi_funcion)`.

```js
function saludar(nombre) {
    return "Hola " + nombre;
}

function procesarUsuario(callback) {
    return callback("Daniel"); // ejecuta la función que recibió
}

console.log(procesarUsuario(saludar)); // "Hola Daniel"
```

**Python equivalente:**
```python
def saludar(nombre):
    return f"Hola {nombre}"

def procesar_usuario(funcion):
    return funcion("Daniel")
```

### Callback con función anónima (forma compacta)

No siempre necesitas darle nombre a la función — puedes pasarla directamente:

```js
// Con function anónima
procesarUsuario(function(nombre) {
    return "Hola " + nombre;
});

// Con función flecha (arrow function) — mismo resultado, más corto
procesarUsuario(nombre => "Hola " + nombre);
```

> **⚠️ Trampa común:** Al pasar el callback, **no escribas los paréntesis**:
> - `procesarUsuario(saludar)` ✅ — pasa la función
> - `procesarUsuario(saludar())` ❌ — la ejecuta en el momento y pasa el resultado

---

## 4. .filter()

El método `.filter()` recorre cada elemento de un array y devuelve un **nuevo array** con solo los elementos que cumplen la condición. No modifica el original.

> **Analogía Python:** Equivale a una list comprehension con condición: `[n for n in lista if condicion]`.

```js
const numeros = [5, 12, 8, 20, 3];

const mayores = numeros.filter(function(num) {
    return num > 10; // true → se queda | false → se descarta
});

console.log(mayores); // [12, 20]
console.log(numeros); // [5, 12, 8, 20, 3] → el original no cambia
```

**Python equivalente:**
```python
numeros = [5, 12, 8, 20, 3]
mayores = [n for n in numeros if n > 10]  # [12, 20]
```

### Versión con función flecha

```js
const mayores = numeros.filter(num => num > 10); // mismo resultado
```

### Reglas clave de `.filter()`

| Situación | Resultado |
|---|---|
| El elemento cumple la condición (`true`) | Se incluye en el nuevo array |
| El elemento no cumple la condición (`false`) | Se descarta |
| Ningún elemento cumple | Devuelve `[]`, nunca `null` |
| Siempre | Devuelve un **nuevo** array, el original no cambia |

---

## 5. .reduce()

El método `.reduce()` recorre el array **acumulando un resultado** y al final devuelve un único valor.

> **Analogía Python:** Para sumar números equivale a `sum(lista)`. Para operaciones más complejas, se parece a `functools.reduce()`.

```js
const numeros = [5, 12, 8, 20, 3];

const suma = numeros.reduce(function(acumulador, num) {
    return acumulador + num; // suma el valor actual al acumulado
}, 0); // ← 0 es el valor inicial del acumulador

console.log(suma); // 48
```

### ¿Cómo funciona paso a paso?

```
Valor inicial del acumulador: 0

Iteración 1: acumulador=0  + num=5  → retorna 5
Iteración 2: acumulador=5  + num=12 → retorna 17
Iteración 3: acumulador=17 + num=8  → retorna 25
Iteración 4: acumulador=25 + num=20 → retorna 45
Iteración 5: acumulador=45 + num=3  → retorna 48 ✅
```

### Versión con función flecha

```js
const suma = numeros.reduce((acc, num) => acc + num, 0);
```

**Python equivalente:**
```python
sum(numeros)  # 48

# Para operaciones más complejas:
from functools import reduce
reduce(lambda a, b: a + b, numeros)
```

> **⚠️ Importante:** Siempre incluye el valor inicial (el `0` al final). Sin él, JS usará el primer elemento como acumulador, lo que puede dar resultados inesperados con arrays vacíos.

---

## Resumen rápido

| Concepto | ¿Qué hace? | Equivalente en Python |
|---|---|---|
| **Objeto** | Agrupa datos y métodos en una estructura clave-valor | `dict` con funciones / clase |
| **Closure** | Función que recuerda variables de su contexto aunque este terminó | Función anidada |
| **Callback** | Función pasada como argumento a otra función | Pasar funciones como argumentos |
| `.filter()` | Filtra elementos de un array según una condición | `[x for x in lista if condicion]` |
| `.reduce()` | Acumula todos los valores en un único resultado | `sum()` / `functools.reduce()` |


## Autor

- Daniel Echeverría - Coder Riwi 