/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bernardo Filipe Oliveira de Farias Guilherme
 * Curso: TSI
 * Aula: Aula 09 - Arrays - Mini-prova
 * Questão: 2
 *
 */
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function dobroArray(posArray) {
  for (i = posArray.length - 1; i > -1; i--) {
    for (j = posArray[i].length - 1; j > -1; j--) {
      console.log(posArray[i][j] * 2);
    }
  }
}
dobroArray(array);
