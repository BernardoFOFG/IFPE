class Quadrado {
  constructor(lados) {
    this.lados = lados;
  }
}

function areaQuadrado(ladosQua) {
  return `A area do Quadrado é: ${ladosQua.lados ** 2}`;
}
function perimetroQuadrado(periQua) {
    return `O perimetro do Quadrado é: ${periQua.lados * 4}`
}

let acharArea = new Quadrado(5);

console.log(areaQuadrado(acharArea));
console.log(perimetroQuadrado(acharArea));


