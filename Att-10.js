let readline = require("readline-sync");

let num = readline.questionInt("Diga o numero de segundos: ");

let seg = num
let min = num / 60
let hrs = min / 60

console.log("Segundos:" + seg + "\nMinutos: " + min + "\nHoras: " + hrs)