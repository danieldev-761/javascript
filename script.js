// Hoisting
console.log(x);
var x = 10;

// Closure
function contador() {
  let num = 0;
  return function() {
    num++;
    console.log(num);
  };
}

// Ejercicios
// 1. Crear una función que sume dos números
// 2. Crear un contador con closure
// 3. Diferencia entre var, let, const
// 4. Crear un callback simple
// 5. Manipular DOM (crear elemento)
