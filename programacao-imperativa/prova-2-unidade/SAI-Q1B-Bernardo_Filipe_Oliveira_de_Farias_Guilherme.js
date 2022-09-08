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
 * Questão: 1b
 *
 */

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function mediaAritmetica(vetor) {
  let media = 0;
  for (i = 0; i < vetor.length; i++) {
    media += vetor[i];
  }
  console.log(media / vetor.length);
}

mediaAritmetica(vetor);
