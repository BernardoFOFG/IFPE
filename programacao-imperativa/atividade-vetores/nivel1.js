const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Primeira Questão");
/*
Implementar subprograma que retorna 
a soma todos os elementos de um vetor
*/
var resultado = somaVetor(array);
function somaVetor(vetor) {
  let soma = 0;

  for (i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  return soma;
}
console.log(resultado);

console.log("Segunda Questão");
/*
Implementar um subprograma que dados 
um vetor e um número, multiplica cada elemento 
do vetor pelo número recebido como parâmetro
*/
function multiNum(num) {
  multAux = 0;
  for (i = 0; i < array.length; i++) {
    multAux = array[i] * num;
    console.log(multAux);
  }
}
multiNum(6);

console.log("Terceira Questão");
/*
Implementar um subprograma 
que dados dois vetores, copia o conteúdo 
do primeiro para segundo vetor (elemento por elemento)
*/
var arrayAux = [];
function atribuiArray() {
  for (i = 0; i < array.length; i++) {
    arrayAux[i] = array[i];
  }
  console.log("Primeiro array", array, "Segundo array", arrayAux);
}
atribuiArray();

console.log("Quarta Questão: Quinta Questão");
/*
Implementar um subprograma que retorna a quantidade 
de elementos ímpares em um vetor

Implementar um subprograma que retorna a quantidade 
de elementos pares em um vetor
*/
function imparesParArray() {
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      console.log("Posição do array:", i, "é de valor:", array[i], "é impar");
    } else {
      console.log("Posição do array:", i, "é de valor:", array[i], "é par");
    }
  }
}
imparesParArray();

console.log("Sexta Questão");
/*
Implementar um subprograma que dado um vetor e um 
número, subtraí o número de todos os 
elementos do vetor
*/
function subNum(num) {
  subAux = 0;
  for (i = 0; i < array.length; i++) {
    subAux = array[i] - num;
    console.log(subAux);
  }
}
subNum(2);

console.log("Setima Questão");
/*
Implementar um subprograma que dado um vetor e um 
número, divide todos os elementos do vetor pelo número
*/
function divNum(num) {
  divAux = 0;
  for (i = 0; i < array.length; i++) {
    divAux = array[i] / num;
    console.log(divAux);
  }
}
divNum(6);

console.log("Oitava Questão");
/*
Implementar um subprograma que dado um vetor e um 
número, divide todos os elementos do vetor pelo número
*/
function comparaSomaArray() {
  let array1 = [4, 70, 9, 1];
  let array2 = [2, 5, 7, 9, 12];
  let soma1 = 0;
  let soma2 = 0;
  for (i = 0; i < array1.length; i++) {
    soma1 += array1[i];
  }
  for (j = 0; j < array2.length; j++) {
    soma2 += array2[j];
  }
  if (soma1 > soma2) {
    console.log(
      `A soma do array array1: ${soma1}\nÉ maior que\nA soma do array2: ${soma2}`
    );
  } else {
    console.log(
      `A soma do array array2: ${soma2}\nÉ maior que \nA soma do array1: ${soma1}`
    );
  }
}
comparaSomaArray();

console.log("Nona Questão");
/*
Implementar um subprograma que dado um vetor, computa a 
média dos seus elementos e retorna quantos 
elementos acima da média ele possui
*/
function mediaAcima(vetor) {
  let mediaElementos = 0;

  for (i = 0; i < vetor.length; i++) {
    mediaElementos += vetor[i] / vetor.length;
  }
  for (z = 0; z < vetor.length; z++) {
    if (vetor[z] > mediaElementos) {
      console.log(vetor[z]);
    }
  }
}

mediaAcima(array);
