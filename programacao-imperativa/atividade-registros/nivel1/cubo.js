class Cubo {
  constructor(aresta, vertices) {
    this.aresta = aresta;
    this.vertices = vertices;
  }
}

function areaTotal(cubo) {
  let areaTotal = 6 * cubo.aresta ** 2;
  return `Área total do cubo é: ${areaTotal}`;
}

function areaBase(cubo) {
  let areaBase = cubo.aresta ** 2;
  return `Área da base do cubo é: ${areaBase}`;
}

function areaLateral(cubo) {
  let areaLateral = 4 * cubo.aresta ** 2;
  return `Área lateral do cubo é: ${areaLateral}`;
}

function volumeCubo(cubo) {
  let volumeCubo = cubo.aresta ** 3;
  return `Volume do cubo é: ${volumeCubo}`;
}

let padrao = new Cubo(6, 8);
console.log(areaTotal(padrao));
console.log(areaBase(padrao));
console.log(areaLateral(padrao));
console.log(volumeCubo(padrao))