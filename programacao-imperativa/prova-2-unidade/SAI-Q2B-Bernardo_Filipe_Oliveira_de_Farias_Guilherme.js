/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bernardo Filipe Oliveira de Farias Guilherme
 * Curso: TSI
 * Segunda Avaliação Individual
 * Questão: 2b
 *
 */

let array = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];

function aritmeticaArray(array) {
  let media = 0;
  let tamanhoArray = 0;

  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      media += array[i][j];
    }
    tamanhoArray += array.length + 1;
  }
  console.log(media / tamanhoArray);
}

aritmeticaArray(array);
