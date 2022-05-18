/* const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Bernardo", "Admin");
usuarios.set("Cleiton", "Admin");
usuarios.set("Rayane", "User");

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === "Admin") {
            admins.push(key + " - " + value);
        }
    }
    return admins;
}
function getUsers(map) {
    let users = [];
    for([key, value] of map) {
            if(value === "User") {
                users.push(key + " - " + value); 
            }
        }
        return users;
    }

console.log(getAdmins(usuarios))
console.log(getUsers(usuarios)) 

function pitagoras(cat1, cat2){
    result = ((cat1*cat1)+(cat2*cat2))**(1/2);
    return result;
}
console.log(pitagoras(4, 6).toFixed(1)) */

/*let num = 29;
let numAux = num;
let count = 0;
while (true) {
  if (num % 2 === 0) {
    num = num / 2;
  } else {
    num = num - 1;
  }
  count++;
  if (num == 0) {
      break
  }
}
console.log({count, num});
*/
//console.log(count)
// par = /2 = num
// impar = -1

let lines = ["2", '3', '4'];
let inicialValue = 0;
let productLines = lines.reduce((total, next) => total * Number(next), inicialValue+1) 
console.log(typeof productLines)
let sumLines = lines.reduce((total, next) => total + Number(next), inicialValue);
let subtract = productLines - sumLines
console.log(subtract)

// PROCURAR METODO REDUCE PARA ESTUDAR 