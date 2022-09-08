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
 * Questão: 3d
 *
 */

class Ano {
  constructor(nomes, numeroDoMes, quantidadeDias) {
    this.nomes = nomes;
    this.numeroDoMes = numeroDoMes;
    this.quantidadeDias = quantidadeDias;
  }
}

let lista = new Ano(
  [
    "Janeiro",
    "Fevereiro",
    "Marco",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
);
function dias(lista) {
  let contador = 0;
  for (i = 0; i < lista.length; i++) {
    contador += lista[i];
  }
  return contador;
}
console.log(dias(lista.quantidadeDias));
