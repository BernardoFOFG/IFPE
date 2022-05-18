/* S é o espaço percorrido pelo objeto;
s0 é o espaço inicial do objeto;
v0 é a velocidade inicial do objeto;
a é aceleração do objeto;
t é o tempo durante o qual o deslocamento do objeto foi medido. */

console.log("\r\n","Primeira Questão")

function distanciaS(a, b, c, d){
  return (a + (b*d) + 0.5 * c * d ** 2)
}

console.log(distanciaS(3, 4, 6, 2))


console.log("\r\n","Segunda Questão")
function verificaImpar(a,b) {
  if(a % 2 !== 0) {
    if(b % 2 !== 0) {
      console.log("Ambos números são impares")
    }
  } else{
    console.log("Teste falho!")
  }
}
verificaImpar(3, 3)

console.log("\r\n","Terceira Questão")
function verificaQuatroNum(num) {
  if(num % 5 == 0) {
console.log("É rapaz")
  } else {
    console.log("Ih rapaz")
  }
}

function quatroNum(a,b,c,d) {
  verificaQuatroNum(a)
  verificaQuatroNum(b)
  verificaQuatroNum(c)
  verificaQuatroNum(d)
}

quatroNum(5, 6, 7, 10)

console.log("\r\n","Quarta Questão")

function divSemOperador(num) {
  for(i=num;i <= num; i++) {
    return num - i
  }
}

console.log(divSemOperador(30))