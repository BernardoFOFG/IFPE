//1º
console.log("Primeira Questão");
var i = -1;
var numFinal = -20;

while (i >= numFinal) {
  console.log(i);
  i--;
}
//2º
console.log("Segunda Questão");

var i = 0;
var numFinal = 30;

do {
  console.log(i);
  i = i + 3;
} while (i <= numFinal);
//3º
console.log("Terceira Questão");
var numFinal = -30;
for (i = 0; i >= numFinal; i = i - 3) {
  console.log(i);
}
//4º
console.log("Quarta Questão");
var i = 1;
var numFinal = 10;
while (i <= numFinal) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
}
//5º
console.log("Quinta Questão");
var numFinal = 20;
for(i=0;i<=numFinal;++i) {
     if(i % 3 == 0) {
        console.log(i)
    }
}
// 6º
console.log("Sexta Questão")
var numFinal = 10;
var i = 0;
    while(i <= numFinal) {
    if(i%numFinal == 0) {
        console.log(i)
    }
    i++
}
// 7º
console.log("Setima Questão")
var i = 0;
var numFinal = 10;
do {
    console.log(i**2)
    i++
} while(i <= numFinal)
// 8º
console.log("Oitava Questão")
var i = 1;
var numFinal = 24;
while(i < numFinal) {
    console.log(numFinal)
    numFinal--
}