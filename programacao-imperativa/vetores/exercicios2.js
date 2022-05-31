var array = [10, 10, -100, 10, 10];

var resultado = somaPositivoVetor(array);

function somaPositivoVetor(vetor) {
  var soma = 0;

  for (i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  if (soma > 0) {
    return true;
  } else if (soma == 0) {
    return "neutro";
}else {
    return false;
  }
}

console.log(resultado);
