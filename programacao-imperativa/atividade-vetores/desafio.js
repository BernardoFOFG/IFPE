const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayInverso() {
  let arrayAux = [];
  for(i = array.length - 1; i >= 0; i--) {
    
    arrayAux.push(array[i])
  }
  console.log(arrayAux)
}
arrayInverso()