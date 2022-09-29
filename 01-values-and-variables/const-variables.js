// a `const` is short for "constant"
// a const variable is basically a variable once assigned a value
// cannot be REASSIGNED to
const pi = 3.14;
// pi = 3.1417; // <-- error! Cannot reassign to const

let x = 6;
x = 7; // <-- ok, because the variable is created using let

// we don't have any intent of reassigning a value to `ageOfAlice`
// so use const
const ageOfAlice = 18;
//ageOfAlice = 27; // illegal, because all girls are always 18

// Don't describe const as a "variable that cannot be changed"
// it's misleading -- it's better to say "const cannot be reassigned to"
const fruits = ["apples", "bananas", "oranges"];
// fruits = ["1", "2", "3"] <-- const only prevents reassignment to the variable
fruits[1] = "durians"; // <-- const does not prevent any other kind of manipulation
console.log("fruits=", fruits);

fruits.push("mangosteen");
console.log("fruits=", fruits);

// Old JavaScript tutorials will use var to declare variables
// var declares a variable but it does not respect scope
// it's depreciated
var y =100; // DON'T USE VAR


console.log(bar);

var bar = 100; // the bar definition is 'hoisted' (automatically placed before
// all others lines of code)