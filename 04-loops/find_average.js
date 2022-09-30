const prompt = require("prompt-sync")();

// model the program
// find variables to store the data 
// data which represent the problem and which represent the solution
// 1. the computer can only remember what is in the RAM 
// 2. the computer can only execute on instruction at a time

let count = 0;
let sum = 0;
// because the number variable determines whether to contuine with the loop
// it is the 'sentinel variable' (aka. loop sentry, loop guard)
// hence it must be declared outside of the while loop (actually before the while loop)
let number = parseInt(prompt("Please enter a number. To stop type in 0: "));
while (number != 0) {
    sum = sum + number;
    count = count + 1;
    number = parseInt(prompt("Please enter a numner To stop type in 0: "));
}
console.log("The average is", sum/count);