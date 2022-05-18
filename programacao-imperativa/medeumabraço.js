console.log("Segunda Questão"); // Receber um número como parâmetro e retornar true se ele for divisível 7 e false caso contrário;
function numTorF(num) {
  if (num >= 7) {
    console.log("Nota do aluno:",num, "True");
  } else {
    console.log("Nota do aluno:",num, "False");
  }
}
numTorF(7);

console.log("Terceira Questão"); // Receber como parâmetro a aresta de um cubo e retornar volume do cubo;
function volume(a) {
  return a ** 3;
}
console.log(volume(3));

console.log("Quarta Questão"); // Receber como parâmetro quatro números e retornar o valor da soma dos seus quadrados;
function firstSoma(a, b, c, d) {
  return a ** 2 + b ** 2 + c ** 2 + d ** 2;
}
console.log(firstSoma(2, 5, 6, 10));

console.log("Quinta Questão"); // Computar e retornar o valor de f(x) na seguinte função matemática: f(x) = x² + 2x + 3;
function funcao1(valorX) {
  let resultFuncao1 = valorX ** 2 + 2 * valorX + 3;
  return resultFuncao1;
}
console.log(funcao1(2));

console.log("Sexta Questão"); // Computar e retornar o valor de f(x) na seguinte função matemática: f(x) = x³ - 4x + 1;
function funcao2(valorY) {
  let resultFuncao2 = valorY ** 3 - 4 * valorY + 1;
  return resultFuncao2;
}
console.log(funcao2(4));

console.log("Setima Questão"); // Dados os catetos de um triângulo retângulo, calcular e imprimir o valor da sua hipotenusa;
function triRetangulo(catOposto, catAdjacente) {
  let hipotenusa = catOposto ** 2 * catAdjacente ** 2;
  return hipotenusa;
}
hipotenusa = triRetangulo(2, 7);
console.log(Math.sqrt(hipotenusa));

console.log("Oitava Questão"); // Dados os lados de um retângulo, retornar o valor da sua a área.
function retangulo(altura, largura) {
  let result = altura * largura;
  return result;
}
console.log("Área do retângulo: ", retangulo(2, 5));
