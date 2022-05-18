// A = Base * Altura/2 - Area do Triangulo Equilatero 
// 3 * Lado - Perimetro Triangulo Equilatero 
// 1 - Questão
var ladoEquilatero = 5;
var alturaEquilatero = 2.5;
let areaEquilatero = ladoEquilatero * alturaEquilatero / 2; // Area do Triangulo Equilatero
let perEquilatero = ladoEquilatero * 3; // Perimetro do Triangulo Equilatero
console.log("1º")
console.log("Area do triangulo é: " + areaEquilatero);
console.log("Perimetro do triangulo é: " + perEquilatero + "\r\n");

// A = L² - Area do Quadrado
// P = 4 * lado - Perimetro Quadrado 
// 2 - Questão

var ladoQuadrado = 4;
let areaQuadrado = ladoQuadrado ** 2; // Area do Quadrado
let perQuadrado = ladoQuadrado * 4; // Perimetro do Quadrado
console.log("2º")
console.log("Area do quadrado é: " + areaQuadrado)
console.log("Perimetro do quadrado é: " + perQuadrado + "\r\n")

// A = Base * Altura - Area do Retangulo
// P = 2 * (B * H) - Perimetro Retangulo
// 3 - Questão

var baseRetangulo = 12;
var alturaRetangulo = 6;
let areaRetangulo = baseRetangulo * alturaRetangulo; // Area do Retangulo
let perRetangulo = 2 * (baseRetangulo + alturaRetangulo); // Perimetro do Retangulo
console.log("3º")
console.log("Area do retangulo é: " + areaRetangulo);
console.log("Perimetro do retangulo é: " + perRetangulo + "\r\n");

// A = 1/2 * (lado)*(apotema) - Area do Pentágono
// P = 5 * lado = Perimetro
// 4 - Questão
console.log("4º")
const pentagono = 5; // Números de arestas do pentagono
const pentagonoNotApotema = 10; // Número padrão caso o pentágono não tenha valor da apotema definido
const tang36 = 0.7265; // Valor padrão da tangente para encontrar o valor da apotema
var ladoPentagono = 7; // Valor alteravél para encontrar area do pentágono
var apotemaPentagono = 2; // Valor alteravél para encontrar area do pentágono
function apotemaNumber(){
        apotemaPentagono == Number;
        areaTrianguloPentagono =  1/2 * (ladoPentagono * apotemaPentagono); 
        areaPentagono = pentagono * areaTrianguloPentagono;
        console.log("Area do Pentágono: " + areaPentagono.toFixed(2))
}
function apotemaNotNumber() {
    apotemaPentagono == null;
    apotemaPentagono = (ladoPentagono/2)/tang36; // Descobrindo o apotema
    areaTrianguloPentagono = 1/2 * (ladoPentagono/2 * apotemaPentagono.toFixed(1));
    areaPentagono = pentagonoNotApotema * areaTrianguloPentagono.toFixed(1);
    console.log("Area do Pentágono sem saber o apotema: " + areaPentagono.toFixed(2))
}
apotemaNumber()
apotemaNotNumber()
perPentago = pentagono * ladoPentagono;
console.log("Perimetro do Pentágono: " + perPentago.toFixed(0) + "\r\n")

//  A = 3*lado²√3/2 - Area do Hexagono
//  P = 6 * Lado - Perimetro do Hexagono
// 5 - Questão

const hexagono = 6; // Número de arestas do hexagono
var ladoHexagono = 7; // Lados alteráveis do hexagono
var areaHexagono =  (hexagono/2 * ladoHexagono**2)/2 * Math.sqrt(3);
var perHexagono = hexagono  * 6;
console.log("5º")
console.log("Area do Hexagono: " + areaHexagono.toFixed(2));
console.log("Perimetro do Hexagono: " + perHexagono + "\r\n");

// Converter Segundos em Horas
// 6 - Questão

const hora = 24;
const minuto = 60;
const segundo = 3600;
horaMinuto = hora * minuto; // Hora => Minuto
horaSegundo = hora * segundo; // Hora => Segundos
console.log("6º")
console.log("Hora(s): " + hora)
console.log("Minuto(s): " + horaMinuto);
console.log("Segundo(s): " + horaSegundo + "\r\n");

// Solucionar a equação: f(x) = x² + 2x – 3
// 7 - Questão

var x = 5; // Valor Alterável para modificar a questão
funcao = x**2 + 2*x - 3; // Função
console.log("7º")
console.log("Resultado da função (f(x) = x² + 2x – 3) SE o valor de x for "+ x +" é: " + funcao + "\r\n");

// Solucionar a equação: f(x) = x³ + x² + 3x - 25
// 8 - Questão

var x = 4; // Valor Alterável para modificar a questão // Não há problema de reescrever o nome da variavel por conta da tipagem fraca do javascript que sobrescrever a variavel por ordem de escrita.
funcao = x**3 + x**2 + 3*x - 25; // Função // Não há problema de reescrever o nome da variavel por conta da tipagem fraca do javascript que sobrescrever a variavel por ordem de escrita.
console.log("8º")
console.log("Resultado da função (f(x) = x³ + x² + 3x - 25) SE o valor de x for "+ x +" é: " + funcao + "\r\n");