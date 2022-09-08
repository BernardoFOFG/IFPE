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
 * Questão: 3b
 *
 */

class Mes {
  constructor(nomes, numeroDoMes, quantidadeDias) {
    this.nomes = nomes;
    this.numeroDoMes = numeroDoMes;
    this.quantidadeDias = quantidadeDias;
  }
}

const janeiro = new Mes("Janeiro", 1, 31);
const fevereiro = new Mes("Fevereiro", 2, 28);
const marco = new Mes("Marco", 3, 31);
const abril = new Mes("Abril", 4, 30);
const maio = new Mes("Maio", 5, 31);
const junho = new Mes("Junho", 6, 30);
const julho = new Mes("Julho", 7, 31);
const agosto = new Mes("Agosto", 8, 31);
const setembro = new Mes("Setembro", 9, 30);
const outubro = new Mes("Outubro", 10, 31);
const novembro = new Mes("Novembro", 11, 30);
const dezembro = new Mes("Dezembro", 12, 31);

function comparador(m1, m2) {
  if (m1.numeroDoMes < m2.numeroDoMes) {
    return -1;
  } else if (m1.numeroDoMes == m2.numeroDoMes) {
    return 0;
  } else {
    return 1;
  }
}
console.log(comparador(janeiro, janeiro));
