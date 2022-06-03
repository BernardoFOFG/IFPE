let tabela = [
  ["Ana", "Igarassu"], // 0
  ["Carlos", "Recife"], // 1
  ["Maria", "Abreu e lima"], // 2
  ["José", "Paulista"], // 2
];

let linha = 1; // q
for (let i = 0; i < tabela[linha].length; i++) {
  console.log(tabela[linha][i]);
}

let coluna = 1; // 0 = nomes; 1 = cidades
for (let i = 0; i < tabela.length; i++) {
  console.log(tabela[i][coluna]);
}

for (let linha = 0; linha < tabela.length; linha++) {
  for (let coluna = 0; coluna < tabela[linha].length; coluna++) {
    process.stdout.write(
      "(" + linha + "," + coluna + ") " + tabela[linha][coluna] + ""
    );
  }
}

let pessoa = "Carls";
let achou = false;
for (let linha = 0; linha < tabela.length && !achou; linha++) {
  if ((pessoa = tabela[linha][0])) {
    console.log("Cidade:", tabela[linha][1]);
    achou = true;
  }
  if (!achou) {
    console.log("Não achou");
  }
}

function imprimir(vetor, indice) {
  if (indice === -1) {
    return;
  }

  console.log(vetor[indice]);
  imprimir(vetor, indice - 1);
}
let lista = [1, 2, 3, 4, 5, 6, 7, 8];
imprimir(lista, lista.length - 1);

const array = [1, 2, 3, 4, 5];
var resultado = somaVetor(array);

function somaVetor(vetor) {
  let soma = 0;

  for (i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  return soma;
}
console.log(resultado);
