// if a variable is not assigned a value
// it will be `undefined`
let a;
console.log("a =", a);

// undefined + anything is NaN
console.log("a + 4= ", a + 4);

let x = 3;
let y = 4;
let z;

console.log("3.14 * (x+y+z) ** 2 =>", 3.14 * (x+y+z) ** 2);

// infinity
console.log("10 / 0 =", 10 / 0);

// null
// null always occurs because the programmer assign to a variable
// it has the same meaning as undefined
// using null preferable over undefined
let myName = null; // the programmer delibrately want to set myName to nothing

let rhyme =""; // empty string  