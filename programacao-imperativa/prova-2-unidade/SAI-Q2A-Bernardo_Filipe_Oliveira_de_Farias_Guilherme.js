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
 * Questão: 2a
 *
 */

let array = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];

function colLinhaPar(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] % 2 == 0) {
        console.log(`${array[i][j]} da posição ${i} ${j}, é par`);
      }
    }
  }
}
colLinhaPar(array);
