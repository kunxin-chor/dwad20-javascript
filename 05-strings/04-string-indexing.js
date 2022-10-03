// every string is actually -like- an array of characters but there
// are some key differences
let rhyme = "she sells seashell at seashore";
console.log(rhyme[5]);

for (let i = 0; i < rhyme.length; i++) {
    console.log(rhyme[i]);
}

// THE MAJOR DIFFERENCES BETWEEN STRINGS AND ARRAYS

let fruits = ["apples", "bananas", "cherries"];
fruits[1] = "oranges";
console.log(fruits);

// You cannot change a string
// We cannot change a string via indexing
rhyme[0] = "Z";
console.log(rhyme);

// WE CANNOT CHANGE A STRING
// the below is not changing the string
// it's REASSIGNING A NEW STRING TO AN EXISTING VARIABLE
rhyme = "Jack and Jill went up the hill"; 

// It means that strings are IMMUTABLE
// it means "cannot be changed"