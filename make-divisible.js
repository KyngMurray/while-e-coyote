const prompt = require('prompt-sync')();

let first = (Number(prompt("Enter Your 1st Number: ")));

let second = (Number(prompt("Enter Your 2nd Number: ")));

while (first/second !== Math.round(first/second)) {
    first = first + 1;

    console.log(first);

}
console.log( first + " is Divisible by " + second );