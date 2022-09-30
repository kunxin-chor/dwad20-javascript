// we use a for loop when .....???
let x = 0;
while (x < 10) {
    console.log(x);
    x = x + 1;
}

// FOR loop
console.log("---for loop---");
for(let i =0; i < 10; i=i+1) {
    console.log(i);
}

// the i variable in the for loop only exists in
// the scope of the for loop
// console.log("i outside of the for loop =>", i);

let fruits = ["apples", "bananas", "cherries", "durains"];
// i++ => i = i + 1
// ++i => same effect i++
for (let i =0; i < fruits.length; ++i) {
    console.log(fruits[i]);
}