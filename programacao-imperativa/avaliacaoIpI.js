console.log("Primeira Questão")
function avaliaIMC(peso, altura) {
  let abaixo = 18.49;
  let ideal = 18.50;
  let acima = 25.00;
  let IMC = peso / (altura*altura/10000) // Conversão de centimetros para metro

  if(IMC <= abaixo) {
    return "Baixo peso"
  } else if (IMC >= ideal <= acima) {
    return "Peso ideal"
  } else {
    return "Sobrepeso"
  }
}

console.log(avaliaIMC(82, 165)) // Peço que o usuário entre com o valor em centrimentos