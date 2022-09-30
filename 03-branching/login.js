const prompt = require("prompt-sync")();
let username = prompt("Please enter your username: ");
let password = prompt("Please enter your password: ");

function increaseLoginAttempt() {
    console.log("Login detected")
    return true;
}

// we only recongized 'jonsnow' and the password is 'winterfell'
// and "snoopy" and the password is "charliebrown"
if (increaseLoginAttempt() && username == "jonsnow" && password=="winterfell" ) {
    console.log("Login successful for Jon Snow")
} 
if (increaseLoginAttempt() && username=="snoopy" && password=="charilebrown") {
    console.log("Login successful for snoopy")
} 
// this is super troublesome
if ( (username != "jonsnow"|| password !="winterfell") && (username !="snoopy" || password !="charilebrown"))
 {
    console.log("Invalid login")
 }    