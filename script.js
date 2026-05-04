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

//función es un bloque de código que se puede reutilizar, y que devuelve un resultado (o no devuelve nada, dependiendo del caso).
function suma_dos_numeros(){

  //Pide ingresar un número al usuario (primero texto, luego se convierte a Number)
  const num1 =  Number(prompt("Ingrese el primer número: ")); 
  const num2= Number(prompt("Ingrese el segundo número: "));

  suma= num1 + num2; //Simplemente usa los dos números para realizar la operación de suma

  return suma; //La función devuelve el resultado (número, en este caso)

}

// 2. Crear un contador con closure

//Closure es una función que recuerda las variables de donde fue creada, 
// incluso si ese lugar ya terminó de ejecutarse.

//Funciona como si la función encerrara en una caja su entorno (su contenido) y se lo lleva con ella,
//Así es posible utilizar esas variables luego, incluso si se usan dentro de otra función (la cual está dentro de esa misma función principal).


function contadorAvanzado(){
  let contador= 0;  //Hasta aquí, contadorAvanzado ya se ejecutó y terminó, pero contador no desapareció


  //Este conjunto de objetos con funciones que estamos devolviendo, quedaron con acceso al contador.
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
  //En resumen, el closure, nos permite que cada una de las funciones internas 
  // (incrementar, disminuir, obtener) recuerden "contador" y puedan hacer cada operación con él
};
}

const miContador= contadorAvanzado(); //Al final, se asigna la función principal a una variable



// 3. Diferencia entre var, let, const


/// var -> 1. Funciona en toda la función, incluso antes de declararla. 
// 2. Permite reasignación
// 3. Se sale de los bloques if o for

    if(true){
      var nombre = "Ana";
    }

    console.log(nombre);


// let -> 1. Su alcance es solo dentro del bloque donde se declaró.
// 2. Es usado para valores que van a cambiar (ej. Contador).
// 3. Permite reasignación.

    let cont= 0;

    function aumentar(){
      cont++;
    }
    

// const -> 1. Funciona como let, su alcance es dentro del bloque.
// 2. No permite reasignación, se debe dar valor al declararla.
//3. Con objetos o arrays se puede cambiar el contenido, pero no la referencia (por ejemplo, intentar que apunte a un objeto nuevo)

    const PI= 3.14;

    //PI = 3.14.16; ->Error: no es posible reasignar

    const persona= {nombre: "Luis"}

    persona.nombre = "Carlos" //Es posible cambiar el contenido de una clave

    // persona = {}; //Error: no es posible reasignar (se está intentando crear un nuevo objeto con el mismo nombre, por ende, intentando apuntar hacia otra referencia)

          
// 4. Crear un callback simple

//Callback: Es una función que se le pasa a otra función para que se ejecute después justo cuando la función principal lo llama.
//No siempre se ejecuta al final, su ejecución depende dónde lo ubiquemos dentro de la función principal.

function saludar(nombre, callback){
  console.log("Hola" + nombre);
  callback(); //ejecución del callback
}

//Función callback
function despedirse(){
  console.log("¡Chao!")
}

//Se pasa la función callback sin paréntesis
saludar("Ana", despedirse)


// 5. Manipular DOM (crear elemento)

// 1. Buscamos los elementos del HTML por su ID y los guardamos en variables
const btn = document.getElementById("btnAdd");       // El botón de "Agregar"
const input = document.getElementById("inputTask");  // El cuadro donde el usuario escribe
const lista = document.getElementById("task-list");  // El contenedor (ul o ol) donde irán las tareas

// 2. Le decimos al botón que "escuche" cuando alguien le haga clic
btn.addEventListener('click', function() {

  // 3. Guardamos el texto que el usuario escribió en el input
  const texto = input.value;

  // 4. Si el usuario no escribió nada (está vacío), salimos de la función y no hacemos nada
  if (texto === "") return;

  // 5. Creamos un nuevo elemento de lista (un <li>) "en el aire", todavía no se ve en la página
  const li = document.createElement('li');

  // 6. Le ponemos al nuevo <li> el texto que recogimos del input
  li.textContent = texto;

  // 7. Metemos el nuevo <li> dentro de nuestra lista para que por fin aparezca en el navegador
  lista.appendChild(li);

});
