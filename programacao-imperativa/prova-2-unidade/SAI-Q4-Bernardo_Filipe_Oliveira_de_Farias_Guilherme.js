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
 * Questão: 4
 *
 */

class Janela {
  constructor(marca, altura, largura) {
    // constructor com "C" maisculuco
    this.marca = marca;
    this.altura = altura; // largura e altura estavam invertidos
    this.largura = largura; // largura e altura estavam invertidos
  }
}

function maior(largura1, profundidade1, largura2, profundidade2) {
  return largura1 * profundidade1 < largura2 * profundidade2
    ? largura1 * profundidade1
    : largura2 * profundidade2;
}
// criação das novas janelas
let janela1 = new Janela("Granlux", 5, 7);
let janela2 = new Janela("Granlux", 10, 12);

// chamando a função com os novos valores
console.log(
  maior(janela1.largura, janela1.altura, janela2.largura, janela2.altura)
);
