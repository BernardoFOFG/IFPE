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
class ListaFilmes {
  constructor(filmes) {
    this.filmes = filmes;
  }
}

function contemFilme(lista, filme) {
  for (i = 0; i < lista.filmes.length; i++) {
    if (filmesIguais(filme, lista.filmes[i])) {
      return true;
    }
  }
  return false;
}

var ghost = new Filme("Ghost", 120);
var matrix = new Filme("Matrix", 130);
var avatar = new Filme("Avatar", 140);
var ursoPuf = new Filme("Ursinho Puff", 75);

var lista = new ListaFilmes([ghost, matrix, avatar]);

console.log(lista);

var contem = contemFilme(lista, matrix)

console.log("Matrix está na lista: ", contem)

var contem = contemFilme(lista, ursoPuf)

console.log("UrsoPuf está na lista: ", contem)
