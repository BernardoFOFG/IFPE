const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("Primeira Questão")

var resultado = somaVetor(array)

function somaVetor(vetor) {
  let soma = 0;

  for (i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  return soma;
}

console.log(resultado)



console.log("Segunda Questão")

function multiNum(num) {
    multAux = 0;
    for(i = 0; i < array.length; i++) {
        multAux = array[i] * num 
        console.log(multAux)    
    }

}
multiNum(6)

console.log("Terceira Questão")

var arrayAux = []

function atribuiArray() {
  for(i = 0; i < array.length; i++) {
    arrayAux[i] = array[i] 
  }
  console.log("Primeiro array", array,"Segundo array", arrayAux)
}
atribuiArray()

console.log("Quarta Questão: Quinta Questão")

function imparesParArray() {
  for(i = 0; i < array.length; i++) {
    if(array[i] % 2 != 0) {
      console.log("Posição do array:", i, "é de valor:", array[i], "é impar")
    } else{
      console.log("Posição do array:", i, "é de valor:", array[i], "é par")
    }
  }
}
imparesParArray()

console.log("Sexta Questão")

function subNum(num) {
  subAux = 0;
  for(i = 0; i < array.length; i++) {
      subAux = array[i] - num 
      console.log(subAux)    
  }

}
subNum(2)

console.log("Setima Questão")

function divNum(num) {
  divAux = 0;
  for(i = 0; i < array.length; i++) {
      divAux = array[i] / num 
      console.log(divAux)
  }

}
divNum(6)

console.log("Oitava Questão")

function comparaSomaArray() {
  let array1 = [4, 7, 9, 1]
  let array2 = [2, 5, 7, 9, 12]
  let soma1 = 0;
  let soma2 = 0;
  for(i = 0; i < array1.length; i++) {
    soma1 += array1[i]
  } for(j = 0; j < array2.length; j++) {
    soma2 += array2[j]
  }
  if(soma1 > soma2) {
    console.log(soma1, "é maior que", soma2)
  } else {
    console.log(soma2, "é maior que", soma1)
  }
}

comparaSomaArray()

function arrayInverso() {
  let arrayAux = [];
  for(i = (array.length - 1); i >= 0; i--) {
    
    arrayAux.push(array[i])
  }
  console.log(arrayAux)
}
arrayInverso()

