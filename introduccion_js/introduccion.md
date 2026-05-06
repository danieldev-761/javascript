# Guía de JavaScript Introductorio para Principiantes

> Conceptos básicos explicados con comparaciones en Python y ejemplos comentados.

---

## Objetivo

Esta guía cubre los fundamentos de JavaScript pensada para quienes ya conocen Python. No se asume experiencia previa en JS — cada concepto se explica desde cero, comparándolo con su equivalente en Python para que la curva de aprendizaje sea lo más suave posible.

Al terminar esta guía serás capaz de:

- Declarar variables y entender los tipos de datos en JS
- Escribir condicionales y usar el operador ternario
- Crear funciones con las dos sintaxis principales de JS
- Usar `switch/case` como alternativa a múltiples `if/else`
- Manipular arrays y strings con los métodos nativos más usados

---

## Índice

1. [Variables y tipos de datos](#1-variables-y-tipos-de-datos)
2. [Condicionales](#2-condicionales-ifelse-y-operador-ternario)
3. [Funciones](#3-funciones-declaración-parámetros-y-retorno)
4. [Switch case](#4-switch-case)
5. [Métodos nativos de arrays y strings](#5-métodos-nativos-de-arrays-y-strings)

---

## 1. Variables y tipos de datos

En JS existen tres formas de declarar variables:

| Keyword | ¿Puede cambiar? | Cuándo usarla |
|---|---|---|
| `let` | Sí | Variable normal que puede cambiar |
| `const` | No | Valor fijo que no se reasigna |
| `var` | Sí | Forma antigua, **evítala** — tiene comportamientos raros con el scope |

```js
let nombre = "Daniel";   // string  (texto)
let edad = 20;           // number  (int o float en Python — en JS es solo number)
let esMayor = true;      // boolean (true/false — en Python es True/False con mayúscula)
let ciudad = null;       // null    (ausencia intencional de valor, como None en Python)

const PI = 3.14159;      // constante: no se puede reasignar
```

### `typeof` — saber qué tipo es una variable

```js
console.log(typeof nombre);   // "string"
console.log(typeof edad);     // "number"
console.log(typeof esMayor);  // "boolean"
```

> **Analogía Python:** `typeof` cumple el mismo rol que `type()` en Python.

### Template literals — insertar variables en texto

```js
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
```

Se usan comillas invertidas `` ` `` (no comillas normales), el símbolo `$` y llaves `{}` para insertar la variable.

**Python equivalente:**
```python
print(f"Hola, me llamo {nombre} y tengo {edad} años")
```

---

## 2. Condicionales: if/else y operador ternario

La estructura `if/else` es casi idéntica a Python — solo cambia la sintaxis: en JS se usan paréntesis `()` y llaves `{}` en lugar de los dos puntos `:` y la indentación.

```js
let puntaje = 75;

if (puntaje >= 90) {
    console.log("Excelente");
} else if (puntaje >= 60) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
```

### Operador ternario

Versión corta de un `if/else` para una sola condición en una línea.

```
condicion ? valorSiTrue : valorSiFalse
```

```js
let mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje); // "Es mayor de edad"
```

Es equivalente a:

```js
if (edad >= 18) {
    mensaje = "Es mayor de edad";
} else {
    mensaje = "Es menor de edad";
}
```

**Python equivalente:**
```python
mensaje = "Es mayor de edad" if edad >= 18 else "Es menor de edad"
```

> **Cuándo usarlo:** solo cuando la condición es simple y el resultado cabe cómodamente en una línea. Si es más complejo, usa `if/else` normal — la legibilidad importa.

---

## 3. Funciones: declaración, parámetros y retorno

En JS hay dos formas principales de declarar funciones.

### Forma 1 — `function` declaration

```js
function sumar(a, b) {
    return a + b;
}

console.log(sumar(3, 5)); // 8
```

**Python equivalente:**
```python
def sumar(a, b):
    return a + b
```

### Forma 2 — Arrow function (función flecha)

Forma moderna y compacta. Si el cuerpo es una sola expresión, el `return` es implícito y no necesita llaves `{}`.

```js
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 6)); // 24
```

**Python equivalente:**
```python
multiplicar = lambda a, b: a * b
```

Si el cuerpo tiene más de una línea, sí necesita llaves `{}` y `return` explícito:

```js
const dividir = (a, b) => {
    if (b === 0) return "No se puede dividir entre cero";
    return a / b;
};

console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // "No se puede dividir entre cero"
```

### ¿Cuál usar?

| Situación | Forma recomendada |
|---|---|
| Función reutilizable con nombre claro | `function` declaration |
| Función corta, pasada como argumento o en una línea | Arrow function `=>` |

---

## 4. Switch case

`switch` evalúa una variable y ejecuta el bloque que coincida con su valor. Es una alternativa más legible a varios `if/else if` seguidos cuando se compara el mismo valor contra múltiples opciones.

```js
let dia = 3;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
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
    default:
        nombreDia = "Fin de semana";
}

console.log(nombreDia); // "Miércoles"
```

### Partes del switch

| Parte | Qué hace |
|---|---|
| `case X:` | Compara el valor con `X` |
| `break` | Detiene la ejecución — **obligatorio en casi todos los casos** |
| `default` | Se ejecuta si ningún `case` coincide — equivale al `else` |

### ⚠️ El `break` es obligatorio

Si lo omites, JS sigue ejecutando todos los `case` siguientes aunque no coincidan — esto se llama **fall-through** y casi siempre es un error.

```js
switch (dia) {
    case 3:
        nombreDia = "Miércoles";
        // sin break → JS continúa al case 4
    case 4:
        nombreDia = "Jueves"; // esto también se ejecuta aunque dia sea 3
        break;
}
```

> **Analogía Python:** En Python 3.10+ existe `match/case` que cumple el mismo rol. En versiones anteriores se simulaba con diccionarios o cadenas de `if/elif`.

---

## 5. Métodos nativos de arrays y strings

JS tiene métodos incorporados para trabajar con arrays y strings, equivalentes a los de Python.

### Arrays

```js
const frutas = ["mango", "pera", "uva", "manzana"];
```

| Método JS | Qué hace | Equivalente Python |
|---|---|---|
| `.push(x)` | Agrega `x` al final | `.append(x)` |
| `.pop()` | Elimina y retorna el último elemento | `.pop()` |
| `.includes(x)` | Retorna `true` si `x` existe | `x in lista` |
| `.indexOf(x)` | Retorna la posición de `x` | `.index(x)` |
| `.join(sep)` | Une elementos en un string | `sep.join(lista)` |
| `.length` | Cantidad de elementos (propiedad, sin `()`) | `len(lista)` |

```js
frutas.push("sandía");
console.log(frutas); // ["mango", "pera", "uva", "manzana", "sandía"]

frutas.pop();
console.log(frutas); // ["mango", "pera", "uva", "manzana"]

console.log(frutas.includes("uva"));  // true
console.log(frutas.indexOf("pera"));  // 1
console.log(frutas.join(", "));       // "mango, pera, uva, manzana"
console.log(frutas.length);           // 4
```

> **Ojo con `.indexOf()`:** los índices empiezan en `0`. El primer elemento está en la posición `0`, el segundo en `1`, y así sucesivamente — igual que en Python.

### Strings

```js
let frase = "  Hola Mundo  ";
```

| Método JS | Qué hace | Equivalente Python |
|---|---|---|
| `.trim()` | Elimina espacios al inicio y al final | `.strip()` |
| `.toUpperCase()` | Convierte a mayúsculas | `.upper()` |
| `.toLowerCase()` | Convierte a minúsculas | `.lower()` |
| `.includes(x)` | Verifica si contiene el texto `x` | `x in frase` |
| `.replace(a, b)` | Reemplaza `a` por `b` | `.replace(a, b)` |
| `.split(sep)` | Divide en array según un separador | `.split(sep)` |

```js
console.log(frase.trim());                        // "Hola Mundo"
console.log(frase.trim().toUpperCase());          // "HOLA MUNDO"
console.log(frase.trim().toLowerCase());          // "hola mundo"
console.log(frase.includes("Mundo"));             // true
console.log(frase.trim().replace("Mundo", "JS")); // "Hola JS"
console.log(frase.trim().split(" "));             // ["Hola", "Mundo"]
```

Los métodos se pueden **encadenar** — el resultado de uno se convierte en la entrada del siguiente:

```js
frase.trim().toUpperCase().replace("MUNDO", "JS"); // "HOLA JS"
```

**Python equivalente:**
```python
frase = "  Hola Mundo  "
frase.strip()
frase.upper()
"Mundo" in frase
frase.replace("Mundo", "JS")
frase.split(" ")
```

---

## Resumen rápido

| Concepto | JS | Python |
|---|---|---|
| Variable mutable | `let x = 5` | `x = 5` |
| Variable inmutable | `const x = 5` | — (no hay equivalente directo) |
| Tipo de dato | `typeof x` | `type(x)` |
| String con variables | `` `Hola ${nombre}` `` | `f"Hola {nombre}"` |
| Condicional corto | `cond ? a : b` | `a if cond else b` |
| Función normal | `function f(x) { return x }` | `def f(x): return x` |
| Función compacta | `x => x * 2` | `lambda x: x * 2` |
| Múltiples casos | `switch / case / break` | `match / case` (Python 3.10+) |
| Ausencia de valor | `null` | `None` |
| Valor no asignado | `undefined` | — (no existe en Python) |


## Autor

- Daniel Echeverría - Coder Riwi