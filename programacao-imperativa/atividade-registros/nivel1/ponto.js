class PontoCartesiano {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function acharPonto(ponto) {
  switch (true) {
    case ponto.x > 0 && ponto.y > 0:
      return `X e Y estão no primeiro quadrante`;
    case ponto.x < 0 && ponto.y < 0:
      return `X e Y estão no quarto quadrante`;
    case ponto.x < 0 || ponto.y > 0:
      return `X e Y estão no segundo quadrante`;
    case ponto.x > 0 || ponto.y < 0:
      return `X e Y estão no terceiro quadrante`;
  }
}

let padrao = new PontoCartesiano(4, -2);
console.log(acharPonto(padrao));
