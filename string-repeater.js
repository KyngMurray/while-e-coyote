const prompt = require('prompt-sync')();

let str = prompt("Enter a String: ")

let total = " ";

let initial = 0;

while (initial <= 10){
    total += str

    console.log(total);

    initial += str.length;

} 