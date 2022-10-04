const prompt = require('prompt-sync')();

let filename = prompt("Please enter the filename: ");
// let extension = filename.slice(-3);
let extension = filename(filename.length - 3);
console.log("Extension =", extension);
if (extension == "png" || extension == "jpg") {
    console.log("It is an image");
} else {
    console.log("It is not an image");
}