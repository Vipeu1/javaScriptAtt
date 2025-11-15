let readline = require("readline-sync");

let num = readline.questionInt ("Numero fatorial a se calcular: ");
let final = 1
for(let i = 1; i <= num; i++){
    final = i * final
}
console.log(final)