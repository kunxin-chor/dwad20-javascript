const prompt = require('prompt-sync')();

let shallGoOn=true;
while(shallGoOn) {
   
    let sum = 0;
    let count = 0;
    while(true) {
        let number = parseInt(prompt("Please enter a number: "));
        if (number==0) {
            break;
        }
        sum = sum + number;
        count++; // count = count + 1
    }

    console.log("Average =", sum/count);
    let ans = prompt("Contuine with next set of numbers? ");
    if (ans == "n") {
        shallGoOn = false;
    }
}