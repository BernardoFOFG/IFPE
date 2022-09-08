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
 * Questão: 1
 *
 */

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function posicaoArray(posArray) {
  let elemento = 2;
  let parada = false;
  for (i = 0; i < posArray.length && !parada; i++) {
    for (j = 0; j < posArray[i].length; j++) {
      if (posArray[i][j] == elemento) {
        console.log(
          `O elemento: ${elemento} se encontra na posição: linha ${i} e coluna ${j}`
        );
        parada = true;
      }
    }
  }
  if (!parada) {
    console.log(
      `O elemento: ${elemento} não foi encontrado, verifique o array!`
    );
  }
}
posicaoArray(array);