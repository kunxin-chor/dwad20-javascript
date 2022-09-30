const prompt = require('prompt-sync')();

// EXMAPLE: NaN is falsly
// let n = prompt("Please enter a number");
// n = parseInt(n);
// if (n) {
//     // any integer that is not a 0
//     // is considered as a true value
//     // aka truthy
//     console.log("Thank you for your integer");
// } else {
//     console.log("NaN is falsely")
//     console.log("You have provided an invalid integer")
// }

// EXAMPLE: Empty String is falsly
// ANY STRING is considered to be true
// let name = prompt("Please enter your name:")
// if ("") {
//     console.log("Hi ", name);
// } else {
//     console.log("Empty string is falsly");
//     console.log("Why so rude?????");
// }

if (0) {

} else {
    console.log("0 is considered to be falsy")
}

if (null) {

} else {
    console.log("Null is considered to be falsy");
}

if (undefined) {

} else {
    console.log("Undefined considered to be falsy");
}

let v = null;
// want to check if v contains a value that is not 0, not NaN
// not undefined, not null, not empty string
if (v) {
    console.log("v is truthy");
} else {
    console.log("v is falsly");
}