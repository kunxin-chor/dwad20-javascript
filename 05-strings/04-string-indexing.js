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

// STRING SLICING
//                  456789012
let sentence = "The quick brown fox jumps over the lazy dogs";

// String methods are basically functions that can be used on strings
// but any function that is used on an object is a "method"
// Strings are objects but they are considered as primitive because they are immutable

// slice can take up to two parameters
// only the first parameter is complusory
console.log("sentence.slice(4) =>", sentence.slice(4)); //<-- return a copy of the string from index 4 onwards
console.log("sentence after slice=>", sentence); // <-- the string inside sentence is not
                                                 // changed --> the sentence function actually
                                                 // copy the original string as a new one
                                                 // then sliced the new one, so to maintain
                                                 // the principle that all strings are immutable
// if we have a second parameter, the second parameter is the end index (exclusive)
console.log("sentence.slice(4,12) =>", sentence.slice(4,12));