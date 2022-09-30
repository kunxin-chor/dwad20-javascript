function foobar(x) {
    x = x + 3;
}
let x = 10;
foobar(x); // the `x` variable will be simplifed to 10 first
           // and the integer 10 is the one passed to the local x in foobar.
           // since integer 10 is a value
           // this mechanism of assigning 10 to the local x in foobar
           // is known as PASS BY VALUE
console.log("x =", x);

function foo(y) {
    y.push("bananas");
}
let y = ["apples", "durians", "mangosteens"];
foo(y);  // PASS BY REFERENCE because y contains a reference to the array
         // and the local y variale of foo function will be passed that
         // reference, so both y variables actually refer to the same array
console.log(y);