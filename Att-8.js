let readline = require("readline-sync");

let num = readline.questionInt("Diga o numero maximo: ");

let result = 0
for(let i = 1; i <= num; i++){
    result = result + i
}
console.log(result)