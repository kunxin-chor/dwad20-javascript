const prompt = require('prompt-sync')();
// correct ans
// function multi(x) {
//     return x * 2;
// }

// let ans = multi(2);
// console.log(ans);

// to write a function
// 1. you must know what the result of the function to be
// 2. you must know the incoming parameters (aka input)
// 2b the variable name doesn't matter (it must be a valid name to begin with)
// 2c if there is more than one input (i.e incoming parameters), it's the ORDER
//    that matters
// 3. you must know what the results should be
// 4. you must know how to calculate the results from the input
function multi(x) {
    // if we are stuck on how to solve something
    // always begin with asking "do I need a new variable to store the result or some interimedate step?"
    let result = x * 2;
    return result;
}

function getAreaOfRect(length, breadth) {
    let area = length * breadth;
    return area;
}

console.log(getAreaOfRect(10,20));

let length = 10;
let breadth = 20;
console.log(getAreaOfRect(breadth, length))
// => console.log(getAreaOfRect(20, 10))

function multiTwo(x,y) {
    return x * y;
}

let num1 = Number(prompt('Please enter the first number: '));
let num2 = Number(prompt('Please enter the second number: '));
let result = multiTwo(num1, num2);
console.log("The multiplication of", num1, "and", num2, "=", result);

let speed = parseFloat(prompt("Enter the speed: "));
let time = parseFloat(prompt("Enter the time: "));

function calculateDistance(speed, time) {
    return speed * time;
}

console.log(calculateDistance(speed,time));

// The parametes length and breadth are to be integers
function perimeter(length, breadth) {
    let length = parseInt(length);
    breadth = parseInt(breadth);
    return length + length + breadth + breadth;
}

console.log(perimeter(2,3));