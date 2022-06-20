class Bicicleta {
  constructor(modelo, fabricante, cor) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.cor = cor;
  }
}
function iguais(b1, b2) {
  return (
    b1.modelo == b2.modelo && b1.fabricante == b2.fabricante && b1.cor == b2.cor
  );

}

class EstoqueBicicletas {
  constructor(loja, quantidades, bicicletas) {
    this.loja = loja;
    this.quantidades = quantidades;
    this.bicicletas = bicicletas;
  }
}

function verificaEstoque(estoque, bicicleta) {
  for (var i = 0; i < estoque.bicicletas.length; i++) {
    if (iguais(bicicleta, estoque.bicicletas[i])) {
      return estoque.quantidades[i];
    }
  }
  return 0;
}

var bic1 = new Bicicleta("mk1", "caloi", "azul");
var bic2 = new Bicicleta("mk2", "caloi", "vermelho");
var bic3 = new Bicicleta('mk3', 'monark', 'amarela')

var estoque = new EstoqueBicicletas("Bikes Igarassu", [0, 4], [bic1, bic2]);

console.log("Estoque da bic1:", verificaEstoque(estoque, bic1));
console.log("Estoque da bic2:", verificaEstoque(estoque, bic2));
console.log("Estoque de bic3:", verificaEstoque(estoque, bic3))