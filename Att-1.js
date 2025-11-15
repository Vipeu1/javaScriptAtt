let readline = require("readline-sync");

let num = readline.questionInt("Digite um número: ");

if (num < 0) {
  console.log("Numero e negativo");
} else {
  console.log("Numero e positivo");
}