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
 * Questão: 2
 *
 */
var a = 1;
var b = 5;
var c = 6;

delta = b**2 - 4*a*c;

if(delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2*a);
    x2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log("O valor de delta: " + delta + "\r\n" + "O valor de x1: " + x1 + "\r\n" + "O valor de x2: " + x2 + "\r\n")
    if(delta == 0) {
        console.log("O valor de delta é zero, logo não terá continuação.")
    }
}    else {
    console.log("Não existe raiz para o delta, verifique o valor inserido!")
}


