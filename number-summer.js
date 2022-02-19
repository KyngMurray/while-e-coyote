const prompt = require("prompt-sync")();

let input = 0;

let sum = 0;

while(input !== "done"){
    input = prompt("please input a number or the word 'done': ");
    console.log("input is: " + input);

    if(input === "done"){
        console.log("adding the numbers now...");
        console.log("The sum is: " + sum);
    } else{
    sum += Number(input);
    console.log("Right now the sum is: " + sum);
    }
}
