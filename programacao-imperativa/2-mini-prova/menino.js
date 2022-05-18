function amizade(n, atual = 1, proximoImpar = 1) {
    if(n === 0) return;
    console.log(atual ** 2);
    proximoImpar += 2
    amizade(n - 1, atual + proximoImpar, proximoImpar)
}

amizade(10)