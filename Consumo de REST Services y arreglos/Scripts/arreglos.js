// Ejemplo de push() inserta un nuevo elemento al final del arreglo
const myArray1 = ["manzana", "pera"];
myArray1.push("uva");
// myArray1 ahora es ["manzana", "pera", "uva"]

// Ejemplo de pop() elimina un elemento del arreglo
const myArray2 = ["rojo", "verde", "azul"];
const elementoEliminado = myArray2.pop();
// elementoEliminado es "azul", myArray2 ahora es ["rojo", "verde"]

// Ejemplo de shift() elimina el elemento en el indice cero 
const myArray3 = ["Lunes", "Martes", "Miércoles"];
const primerDia = myArray3.shift();
// primerDia es "Lunes", myArray3 ahora es ["Martes", "Miércoles"]

// Ejemplo de unshift() agrega elementos al inicio del arreglo 
const myArray4 = [2, 3, 4];
myArray4.unshift(1);
// myArray4 ahora es [1, 2, 3, 4]

// Ejemplo de slice() devuelve una copia del arreglo emepezando por un rango de inicio y fin
const myArray5 = [10, 20, 30, 40, 50];
const newArray6 = myArray5.slice(1, 4);
// newArray6 ahora es [20, 30, 40]

// Ejemplo de concat()  une dos o más arreglos
const myArray1_1 = [100, 200];
const myArray2_1 = [300, 400, 500];
const newArray7 = myArray1_1.concat(myArray2_1);
// newArray7 ahora es [100, 200, 300, 400, 500]

// Ejemplo de sort() ordena los elementos de un arreglo 
const myArray8 = [8, 4, 10, 1, 6];
myArray8.sort();
// myArray8 ahora es [1, 10, 4, 6, 8]

// Ejemplo de reverse() ordena en reversa
const myArray9 = ["uno", "dos", "tres"];
myArray9.reverse();
// myArray9 ahora es ["tres", "dos", "uno"]

// Ejemplo de includes() determina si una matriz incluye en determinado elemento devuelve true o false segun corresponda
const myArray10 = ["a", "b", "c", "d"];
const contieneC = myArray10.includes("c"); // true

// Ejemplo de indexOf() devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde ; o -1 si no se encuentra dicho valor.
const myArray11 = ["gato", "perro", "conejo", "perro"];
const indicePerro = myArray11.indexOf("perro"); // 1

// Ejemplo de lastIndexOf()devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. 
const myArray12 = ["manzana", "naranja", "pera", "manzana"];
const ultimoIndiceManzana = myArray12.lastIndexOf("manzana"); // 3

// Ejemplo de forEach() itera sobre los elementos de un array y ejecutar una función determinada en cada uno de ellos. 
const myArray13 = [7, 14, 21, 28];
myArray13.forEach((numero) => {
  console.log(numero * 2);
});
// Imprime: 14, 28, 42, 56

// Ejemplo de map() implementa una estructura de tipo mapa, es decir, una estructuras donde tiene valores guardados a través de una clave para identificarlos. Comúnmente, esto se denomina pares clave-valor.
const myArray14 = [3, 6, 9, 12];
const newArray15 = myArray14.map((numero) => {
  return numero / 3;
});
// newArray15 ahora es [1, 2, 3, 4]
