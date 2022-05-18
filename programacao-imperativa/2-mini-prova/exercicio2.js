// Imprimir média de seis números;
// Questão - 1
const aritme = 6;
var num1 = 32;
var num2 = 42
var num3 = 10;
var num4 = 2;
var num5 = 12;
var num6 = 6;
ponderacao = num1+num2+num3+num4+num5+num6/aritme;
console.log("Média dos seis números são: " + ponderacao.toFixed(2));

//
const pond = 15;
var num1 = 32*3;
var num2 = 42*1
var num3 = 10*4;
var num4 = 2*2;
ponderacao = num1+num2+num3+num4/pond;
console.log("Média dos seis números são: " + ponderacao.toFixed(2) + "\r\n"); 
var altura = 1.66;
var peso = 72;
let indice = peso / altura**2;

function IMC() {
if (indice == 18.5 >= 24.9) {
    return indice;
    console.log("Peso Normal")
} if (indice == 25.0 >= 29.9) {
    return indice;
   // console.log("Sobrepeso")
} if (indice == 30 >= 39.9) {
    console.log("Obesidade")
} else if (indice > 40) {
    console.log("Obesidade Grave")
}
}
IMC()