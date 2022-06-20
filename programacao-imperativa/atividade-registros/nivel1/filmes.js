class Filme {
  constructor(nome, duracao) {
    this.nome = nome;
    this.duracao = duracao;
  }
}

function filmesIguais(f1, f2) {
  if (f1.nome == f2.nome && f1.duracao == f2.duracao) {
    return true;
  } else {
    return false;
  }
}
var ghost = new Filme("Ghost", 120);
var matrix = new Filme("Matrix", 130);

console.log(ghost);
console.log(matrix);

var iguais = filmesIguais(ghost, matrix);

console.log("Os filmes são iguais: ", iguais);

var iguais = filmesIguais(ghost, ghost);

console.log("Os filmes são iguais: ", iguais);
