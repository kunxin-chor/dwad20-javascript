const prompt = require('prompt-sync')();

function findAverage() {
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

    //this function don't need to return anything
    //because no other code makes use of the average
}

let shallGoOn=true;
while(shallGoOn) {
   
    findAverage();

    let ans = prompt("Contuine with next set of numbers? ");
    if (ans == "n") {
        shallGoOn = false;
    }
}