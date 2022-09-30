// console.log and `return` are two different things

function foobar() {
    console.log(123); // <-- displays to the screen
                      // function's is undefined because there is no return statement!
}

// if the result of the function is be used in another function or another calculatiomn
// make sure to use return
function calculateBMI(weight, height) {
    // return weight / height ** 2;
    console.log(weight/height**2);
}

let f =foobar();
console.log("f =",f);

// since the result of the calculateBMI call is to be used
// in some other process (in this case, the if), so we must make
// sure that calculateBMI returns the bmi (not just console.log)
let bmi = calculateBMI(80, 1.5);
if (bmi < 18.5) {
    console.log("Underweight");
}