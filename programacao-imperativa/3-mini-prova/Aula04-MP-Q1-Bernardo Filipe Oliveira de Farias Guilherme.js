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
 * Questão: 1
 *
 */
const padrao = 5;
var a = 5;
var b = 5;

console.log("A: " + a + "\r\n" + "B: " + b)
if (a % padrao == 0) {
    console.log("A é um número divisivel")
} else {
    console.log("A não é divisiel")
} 
if(b % padrao == 0) {
    console.log("B é um número divisivel")
} else {
    console.log("B não é divisel")
}

if(a && b % padrao == 0) {
    console.log("Ambos são divisiveis")
} else {
    console.log("Não são divisiveis")
}