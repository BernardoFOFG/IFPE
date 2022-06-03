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
 * Questão: 3
 *
 */

let array1 = [ // array de testes
  [1, 2, 1],
  [3, 4, 1],
  [5, 6, 1],
];

function funcFuncFunc(arr) {
  let elemento = 1; // versão original: a = 1 -> nova versão: let elemento = 1
  let contador = 0; // criação da variavel contador para obtermos a quantidade de vezes que o elemento será encontrado dentro do array
  for (let i = 0; i < arr.length; i++) {
    // versão original: i < 10 -> nova versão: i < arr.length
    for (let j = 0; j < arr[i].length; j++) {
      // criação do for para as colunas
      if (arr[i][j] == elemento) {
        // versão original: elemento == 0 -> nova versão: arr[i][j] == elemento
        contador++; // versão original: i++(não serve para ser contador dessa questão) -> nova versão: contador++
      }
    }
  }
  return contador; // versão original: i++(que sempre iria retornar undefined por não estar dentro do for) -> nova versão: return contador | o valor após o loop será atribuido a ele
}
console.log(funcFuncFunc(array1)); // falta de chamada da função // e mesmo que não possua o elemento do array o contador não sairá do 0 e será exibido 0
