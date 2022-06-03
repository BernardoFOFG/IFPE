function imprimirInverso(array) {
  for (i = array.length - 1; i > -1; i--) {
    for (j = array[i].length - 1; j > -1; j--) {
      if (array[i][j] % 2 != 0) {
        console.log(array[i][j]);
      }
    }
  }
}
let array = [
  [1, 2],
  [3, 4],
];

imprimirInverso(array);

function imprimirInverso2(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i].length != arr2[i].length) {
      // preciosoismo, não é necessário
      return false;
    }
    for (j = 0; j < arr2[i].length; j++) {
      if (arr1[i][j] != arr2[j][i]) {
        return false;
      }
    }
  }
  return true;
}
let array1 = [
  [1, 2],
  [3, 4],
];
let array2 = [
  [4, 3],
  [2, 3],
];
console.log(imprimirInverso2(array1, array2))