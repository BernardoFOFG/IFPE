class Balanca {
  constructor(marca, pesoMaximo) {
    this.marca = marca;
    this.pesoMaximo = pesoMaximo;
  }
}

function imprimirBalanca(balanca) {
  console.log("marca: ", balanca.marca);
  console.log("peso máximo: ", balanca.pesoMaximo);
}

var b = new Balanca('aaa', 10)

imprimirBalanca(b)