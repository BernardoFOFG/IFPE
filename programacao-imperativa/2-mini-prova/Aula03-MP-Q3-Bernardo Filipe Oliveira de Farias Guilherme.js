/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Bernardo Filipe Oliveira de Farias Guilherme
 * Curso: TSI
 * Aula: Aula 03 - Variáveis, Tipos e Operadores - Mini-prova
 * Questão: 3
 *
 */
// << = Serve para deslocamento de bits, logo não funciona para atribuição;
// : = Não serve para do javascript sintaxe para final de linha;
var raioBase = 2; 
var altura = 5;


// Invés de usar o 3.14 no javascript existe o Math.PI;
// x = Não serve para multiplicação;
// ² = Não serve para potencialização no javascript;
area = Math.PI * altura * raioBase**2;

// area ta dentro de "" logo não será atendido a variavel: area;
console.log("volume: " + area.toFixed(1));

