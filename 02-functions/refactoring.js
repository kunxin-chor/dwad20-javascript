const prompt = require('prompt-sync')();

function askForWeight() {
    const weight = parseFloat(prompt("Please enter your weight: "));
    if (weight <= 0) {
        return 1;
    }
    return weight;
}

function askForHeight() {
    let height = parseFloat(prompt("Please enter your height: "));
    return height;
}

function calculateBMI(weight, height){
    return weight  / height **2;
}

function displayBMI(bmi) {
    console.log(bmi);
    // sendSMS(9000000, bmi)
}

console.log("Please enter the first set of readings");
const weight = askForWeight();
let height = askForHeight();
let bmi = calculateBMI(weight, height);
displayBMI(bmi);

console.log("Please enter the second set of readings");
let w2 = askForWeight();
let h2 = askForHeight();
let bmi2 = calculateBMI(w2, h2);
displayBMI(bmi2);

