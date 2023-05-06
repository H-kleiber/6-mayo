// 1. Crea una función que retorne la potencia de un número dado, esta función
// deberá recibir la potencia y el número a potenciar.
 function potencia(base,exponente){
    return Math.pow(base,exponente);
 }
 console.log(potencia(7,2));



// 2. Crea una función que tome el array números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855


function sumOfCubes(numeros){
   
    for (i=0;i<numeros.length;i++){
        let suma;
        suma=Math.pow(numeros[i],3);
        suma++
        console.log(suma);
    }
}
sumOfCubes([1,5,9]);
// 3. Utilizando función arrow, crear una función que reciba como parámetros un
// nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre
// es sebastián yabiku y mi edad 33”

function contatenando(nombre, apellido, edad){
    console.log( `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad} `);
}
contatenando("sebastián","yabiku",33);

// 4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar
// parametros rest)

function sumar(num1,num2,...num3){
  let resul=num1+num2;
  num3.forEach(function(n){
    resul+=n;
  });
  return resul;
}
console.log(sumar(1,2,3,4,5));
// 5. Crear una función que reciba un array de valores y filtre los valores que no son
// string.
 const array=[1,3,"jorge","luis"]
 function filtrar(){
    for (i=0;i<array.length;i++){
        if (typeof(array[i])=="number"){
            console.log(array[i]+"  is number");
        }
    }

 }
 filtrar();

// 6. Cree una función que tome una array de números y devuelva los números
// mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minimoandmaximo(){
    minimo=Math.min(1, 2, 3, 4, 5);
    maximo=Math.max(1, 2, 3, 4, 5);
    console.log(`el minimo es ${minimo} el maximo es ${maximo}`);
}
minimoandmaximo();
// 7. Escriba una función que tome un array de 10 enteros (entre 0 y 9) y devuelva
// una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
 function cadena (array){
  console.log(``)
 }

// 8. Dada una palabra, escriba una función que devuelva el primer índice y el último
// índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// // The first "l" has index 2, the last "l" has index 3.
// charIndex("circumlocution", "c") ➞ [0, 8]
// // The first "c" has index 0, the last "c" has index 8.


// 9. Cree la función que toma una array de objetos y devuelve la suma de los
// presupuestos de las personas.
// getBudgets([
//  { name: "John", age: 21, budget: 23000 },
//  { name: "Steve", age: 32, budget: 40000 },
//  { name: "Martin", age: 16, budget: 2700 }
// ]) ➞ 65700
function presupuestos(){
    const getBudgets=[
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000},
        { name: "Martin", age: 16, budget: 2700}];

let presupuesto=[];
    for (i=0;i<getBudgets.length;i++){
        presupuesto.push(getBudgets[i].budget);};

    let total = 0;
    presupuesto.forEach(presupuesto => {
        total += presupuesto;  
     });
     console.log("La suma total de presuspuesto es: "+total);
    
}
presupuestos();



// 10. Cree una función que tome un array de estudiantes y devuelva un array de
// nombres de estudiantes.
// getStudentNames([
//  { name: "Steve" },
//  { name: "Mike" },
//  { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

function estudiantes(nombresEstudiante){
const estudiant=[{ name: "Steve" }, { name: "Mike" },{ name: "John" }]; 
let nuevoo=[];
for (i=0;i<estudiant.length;i++){
    nuevoo.push(estudiant[i].name);
}
console.log(nuevoo)
}
estudiantes();

// 11. Cree una función donde, dado el número n, devuelva la suma de todos los
// números cuadrados incluyendo n.
// squaresSum(3) ➞ 14
// // 1² + 2² + 3² =
// // 1 + 4 + 9 =
// // 14
// 12. Cree una función para multiplicar todos los valores de un array por la cantidad
// de valores del array dado.
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
// 13. Cree una función que tome un número como argumento y devuelva una matriz
// de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// 14. Cree una función que tome un array y devuelva la diferencia entre el número
// más grande y más pequeño.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// // Smallest number is -50, biggest is 32.
// 15. Cree una función que filtre las cadenas de un array y devuelva un array que solo
// contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filtarrr(filterList){
    const enteros = filterList.filter(
    element1 => typeof element1 === 'number');
    console.log(enteros);
}
filtarrr([1, 2, 3, "x", "y", 10]);


// 16. Cree una función que tome dos argumentos (elemento, tiempos). El primer
// argumento (elemento) es el elemento que necesita repetirse, mientras que el
// segundo argumento (veces) es la cantidad de veces que se debe repetir el
// elemento. Devuelve el resultado en un array.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]