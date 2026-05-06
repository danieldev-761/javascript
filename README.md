# Proyecto JavaScript – Guía de Fundamentos (desde Python)

## 📌 Descripción

Este proyecto es una guía práctica para entender los fundamentos de JavaScript, especialmente pensada para personas que vienen de Python y ya dominan conceptos como variables, condicionales, ciclos, funciones y modularización.

El objetivo no es solo aprender sintaxis, sino **entender cómo piensa JavaScript**, ya que su modelo mental es diferente (y a veces confuso si no se aborda correctamente).

---

## 🎯 Objetivo del proyecto

- Comprender cómo funciona JavaScript en el navegador
- Adaptar tu forma de pensar de Python → JavaScript
- Dominar conceptos base que suelen causar confusión
- Practicar con ejercicios progresivos (introducción → básico → intermedio)

---

## 📁 Estructura del proyecto

```
JAVASCRIPT/
│
├── introduccion_js/
│   ├── index.html        → Teoría y ejemplos introductorios
│   ├── script.js         → Ejercicios: variables, tipos, condicionales, funciones, switch, métodos nativos
│   └── introduccion.md   → Guía explicativa del nivel
│
├── basicos/
│   ├── index.html        → Teoría y ejemplos de nivel básico
│   ├── script.js         → Ejercicios: loops, objetos, DOM básico
│   └── basicos.md        → Guía explicativa del nivel
│
├── intermedios/
│   ├── index.html        → Teoría y ejemplos de nivel intermedio
│   ├── script.js         → Ejercicios: closures, callbacks, filter, reduce
│   └── intermedios.md    → Guía explicativa del nivel
│
├── index.html            → Página principal del proyecto
├── style.css             → Estilos base
├── script.js             → Punto de entrada general
└── README.md             → Documentación del proyecto
```

---

## 🧠 Temas cubiertos

### 🟢 Introducción (`introduccion_js/`)
- Variables: `let`, `const`, `var` y tipos de datos
- Template literals vs f-strings
- Condicionales `if/else` y operador ternario
- Funciones: `function` declaration vs arrow functions
- `switch/case`
- Métodos nativos de arrays y strings

### 🔵 Básico (`basicos/`)
- Loops: `for`, `while`, `for...of`
- Objetos y sus propiedades
- Introducción al DOM

### 🟣 Intermedio (`intermedios/`)
- Objetos con métodos y `this`
- Closures
- Callbacks
- `.filter()` y `.reduce()`

---

## 🚀 Cómo usar este proyecto

1. Empieza por `introduccion_js/` — lee el `.md` y luego abre el `index.html`
2. Pasa a `basicos/` cuando te sientas cómodo con lo anterior
3. Termina con `intermedios/` — ahí es donde el JS empieza a volverse interesante
4. Usa la consola del navegador (`F12`) para probar y romper cosas

---

## ⚠️ Recomendaciones

- No memorices → **entiende**
- Prueba todo en consola
- Rompe el código y observa qué pasa — en JS los errores enseñan mucho

---

## 🧩 Siguiente paso sugerido

Cuando termines los tres niveles deberías poder manipular el DOM, entender cómo fluye JS y crear pequeñas apps. El siguiente nivel natural sería:

- Promesas y `async/await`
- Fetch API
- Mini proyecto real (ej: lista de tareas, consumir una API)

---

## 💡 Nota final

JavaScript no es difícil… pero sí es fácil hacerlo mal si no entiendes sus bases.
Este proyecto está diseñado para evitar eso.
