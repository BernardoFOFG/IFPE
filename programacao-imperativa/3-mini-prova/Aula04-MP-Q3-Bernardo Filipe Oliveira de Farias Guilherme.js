/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bernardo Filipe Oliveira de Farias Guilherme
 * Curso: TSI
 * Aula: Aula 04 - Execução Condicional - Mini-prova
 * Questão: 3
 *
 */

var media = 6;
var nome = "Allan"; // O tipo de aspas usado não funciona para declarar string, a correta é: "" ou ''

if (media >= 6) {
  // Utilizando > 6 seria todo número acima de 6, e como a média é 6 é bom utilizarmos o >= para a média ser a partir do 6 // Verificação do == 10 para o valor da média não ser acima de 10;
  console.log(nome + " " + "foi aprovado!"); // ; Não serve para concatenação.
}
else {
  console.log(nome + " " + "não foi aprovado!"); // Novamente o uso da aspaas para string tá incorreta; E o uso da ; para concatenação tá incorreta.
}