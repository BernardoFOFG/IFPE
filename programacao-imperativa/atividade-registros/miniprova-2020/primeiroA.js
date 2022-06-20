class Bicicleta {
  constructor(modelo, fabricante, cor) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.cor = cor;
  }
}

function iguais(b1, b2) {
  return b1.modelo == b2.modelo &&
    b1.fabricante == b2.fabricante &&
    b1.cor == b2.cor
    ? "Bicicletas iguais"
    : "Bicicletas diferentes";
}
var bic1 = new Bicicleta("mk1", "caloi", "azul");
var bic2 = new Bicicleta("mk2", "caloi", "vermelho");

console.log(iguais(bic1, bic2));
