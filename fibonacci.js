const prompt = require('prompt-sync')();

let num = Number(prompt("How many Fibonacci trems would you like to display? "));

let first = 0;
let second = 1;

let count = 0;

if (num > 0) {
    while (count !== num) { 
        console.log(first)    
        if (count === 0) {
            first++           
        } else {
            first += second        
            second = first - second    
        }
        count ++
    }
}else {
    console.log("Input a valid number for 'num'")
}