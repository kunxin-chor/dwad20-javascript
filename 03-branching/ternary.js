// The ternary operator got 2 symbols -- ? :
let x = 3;
if (x > 0) {
    console.log("X is positive")
} else {
    console.log("X is negative");
}

// <condition> ? <what to do if true> : <what to do if false>
// x > 0 ? console.log("X is positive") : console.log("X is negative");
console.log(x > 0 ? "X is postive" : "x is negative");
// console.log( 3 > 0 ? "X is posiitve" : "x is negative")
// console.log(true ? "x is positive" : "x is negative")
// console.log("x is positive");

// let ans = prompt("Enter y or n");
// console.log( ans == y ? "Yes" : "No");

let password = "rotiprata";
let username = "admin";
if (username == "admin") {
    if (password == "rotiprata") {
        console.log("Logged into admin")
    } else {
        console.log("Wrong password")
    }
} else {
    console.log("Wrong username");
}

console.log(username == "admin" ? (password == "rotiprata" ? "logged into admin" : "wrong password") : "Wrong username")
