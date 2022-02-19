const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a Number to Double Up: "));

while (num < 100) {
    num*=2;

    console.log (num)}
