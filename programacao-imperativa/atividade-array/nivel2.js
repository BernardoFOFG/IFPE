console.log("Primeira Questão");
/*
Implementar um subprograma que dadas a 
quantidade de linhas e de colunas, cria um 
array de duas dimensões com a quantidade de 
linhas e colunas especificadas, inicializa 
seus índices com o 
valor -1, o imprime e o retorna
*/

function inicializar(linhas, colunas) {
    let array = []

    if(linhas < 1 || colunas < 1) {
        return array
    }
  for (i = 0; i < linhas; i++) {
      array[i] = [];
    for (j = 0; j < colunas; j++) {
        array[i][j] = -1
        process.stdout.write(`${array[i][j]}\t`) // assim eu exibo uma grande estring
    }
    console.log()
  }
  return array
}

let impressao = inicializar(5, 5)

console.log(impressao) // assim eu exibo o array completo