let readline = require("readline-sync");

let num = readline.questionInt ("Numero max par escolhido: ");

for(let i = 1; i <= num; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}