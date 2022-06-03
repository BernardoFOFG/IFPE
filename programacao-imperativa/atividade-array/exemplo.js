const notas = [
  [9.0, 6.7, 8.3, 4.2, 8.0],
  [3.1, 5.3, 2.6, 1.7, 9.4],
  [5.2, 3.1, 4.2, 7.1, 8.5],
];

var numeros = [];

for (i = 0; i < 10; i++) {
  numeros[i] = [];

  for (j = 0; j < 5; j++) {
    numeros[i][j] = [];

    for (k = 0; k < 7; k++) {
      numeros[i][j][k] = i + j + k;
    }
  }
}
console.log(numeros[9][4][0])

/*
function mediaEstudantes(notas) {
  var media = 0;

  for (i = 0; i < notas[estudantes].length; i++) {
    media = media + notas[estudantes][i];
  }

  media /= notas[estudantes].length;
  return media;
}

console.log(mediaEstudantes(notas, estudantes[1]))
*/
