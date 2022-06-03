const array2D = [
  [1, 2],
  [5, 6],
];

console.log("Primeira Questão");
/*
Implementar um subprograma que dado um 
array bidimensional e um número, 
multiplica cada elemento do array pelo número
*/

function multiplicar(array, num) {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      array[i][j] = array[i][j] * num;
    }
  }
}
multiplicar(array2D, 5);
console.log(array2D);
