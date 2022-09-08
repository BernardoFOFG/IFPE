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
 * Questão: 1a
 *
 */

let vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function indiceParDoVetor(vetor) {
  for (i = 0; i < vetor.length; i++) {
    if (i % 2 == 0) {
      console.log(vetor[i]);
    }
  }
}

indiceParDoVetor(vetor)
