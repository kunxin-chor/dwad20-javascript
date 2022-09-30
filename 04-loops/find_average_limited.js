const prompt=require('prompt-sync')();

// initialization phase
let sum = 0;
let count = 0;
let limit = parseInt(prompt("How many numbers you to find average? "));
// we want to ask the user for five numbers and find the average
while (count < limit) {
    let number = parseInt(prompt("Enter a number: "));
    sum = sum + number;
    count = count + 1;
}
console.log(sum/5);