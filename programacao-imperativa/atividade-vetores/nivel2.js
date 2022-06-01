const array = [1, 2, 3, 4, 5, 6];

console.log("Primeira Questão");
/*
Implementar um subprograma que dado um vetor, retorna 
true se a soma dos seus elementos for 
positiva ou false, caso contrário
*/
var resultado = somaPositivoVetor(array);
function somaPositivoVetor(vetor) {
  var soma = 0;

  for (i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  if (soma > 0) {
    return true;
  } else if (soma == 0) {
    return "zero";
  } else {
    return false;
  }
}
console.log(resultado);

console.log("Segunda Questão");
/*Implementar um subprograma que dados dois vetores, copia o conteúdo do primeiro no segundo vetor 
(elemento por elemento) na ordem inversa
Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1]*/

function Inverso(vetor1) {
  let array2 = [];
  for (i = vetor1.length - 1; i >= 0; i--) {
    array2.push(vetor1[i]);
  }
  return array2;
}

console.log(Inverso(array));
