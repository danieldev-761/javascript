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


function suma_dos_numeros(){
  const num1 =  Number(prompt("Ingrese el primer número: "));
  const num2= Number(prompt("Ingrese el segundo número: "));

  suma= num1 + num2;

  return suma;

}

// 2. Crear un contador con closure

function contadorAvanzado(){
  let contador= 0;

  return{
  
  incrementar: function() {
    contador++;
    return contador;
  },
  
  disminuir: function() {
    contador--;
    return contador;
  },

  obtener: function() {
    contador;
    return contador;
  }
};
}

const miContador= contadorAvanzado();






// 3. Diferencia entre var, let, const



// 4. Crear un callback simple



// 5. Manipular DOM (crear elemento)
