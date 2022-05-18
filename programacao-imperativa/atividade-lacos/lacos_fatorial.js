//FATORIAL DE UM NÚMERO COM LAÇOS
const num = 4;      //número a ser calculado o fatorial
let resultado = 1;  //resultado do fatorial (começar em 1 por ser uma multiplicação)

//percorrendo o fatorial de forma regressiva
for (let x = num; x > 0; x--) {
  //a cada loop, o resultado recebe seu valor atual multiplicado pela variável
  //de controle do laço
  
  resultado = resultado + x;
  /* 1 = 1 * 4
    2 = 2 * 4
    3 = 3 * 4
    4 = 4 * 4
    x = 0
  */
 console.log(resultado)
}

// var fatorial = 5;
// var resultado = fatorial;
// for (let i = 1; i < fatorial; i++) {
//   resultado *= i;
// }
// console.log(resultado);

console.log('fatorial:', resultado);

//variável que guardará quantos divisores o fatorial terá
/* let num_divisores = 0;

//percorrer o resultado do fatorial (começando em 1 por ser usado em divisão)
for (let x = 1; x <= resultado; x++) {
  //se for divisível pelo contador atual...
  if (resultado % x == 0) {
    //contabilizamos o contador de divisores em +1
    num_divisores++;    // num_divisores = num_divisores + 1
  }
}

//se o número de divisores for igual a 2 (1 e ele mesmo) o número é primo
if (num_divisores == 2) {
  console.log("Fatorial " + resultado + " é primo");
  //se não, o resultado do fatorial não é um número primo
} else {
  console.log("Fatorial " + resultado + " não é primo");
}

console.log("Qtd de divisores de " + resultado + ": " + num_divisores); */