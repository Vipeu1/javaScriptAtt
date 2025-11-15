let readline = require("readline-sync");

let num1 = readline.questionInt ("Digita a primeira nota!") * 2;
let num2 = readline.questionInt ("Digita a segunda nota!") * 3;
let num3 = readline.questionInt ("Digita a terceira nota!") * 5;

console.log((num1 + num2 + num3)/10);
