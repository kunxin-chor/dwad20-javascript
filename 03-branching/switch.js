const prompt = require("prompt-sync")();

console.log("Select an option:");
console.log("1. Create new account");
console.log("2. Delete account");
console.log("3. End program");

let choice = parseInt(prompt("Enter a choice: "));
// the parameter for switch must be a value (or an expression that evaluates to a value)
// usually used for when there is a lot of discrete values
// 
switch(choice) {
    case 1:
        console.log("You are creating a new account");
        break;
    case 2:
        console.log("You are deleting an account");
        break;
    case 3:
        console.log("Goodbye");
        break;
}
