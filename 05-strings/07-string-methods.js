// STRING MANIPULATION
// Change a copy of the original string and returns it
let rhyme = "She sells seashells";
console.log("rhyme.toUpperCase() =>", rhyme.toUpperCase());
console.log("rhyme.toLowerCase() =>", rhyme.toLowerCase());
console.log("Original string is not changed =", rhyme);

let bloated = "  I am very full  ";
console.log(bloated.trim() + "!");

console.log(`rhyme.replace("seashells", "coconuts") => `, rhyme.replace("seashells", "coconuts"));
console.log("Original string is not changed =", rhyme);

console.log(`rhyme.replace(" sells","") =>`, rhyme.replace(" sells",""));

let largerRhyme = rhyme.toUpperCase();
console.log(largerRhyme);

// reassigning the changed string into the original variable
rhyme = rhyme.toUpperCase();

// STRING CHECKING
// -- return true or false
// -- return an integer
let sentence = "Jack and Jill went up the hill";

// the `includes` function returns true if the given parameter
// is a substring of the string
// it's a case sentitive!
console.log(`sentence.includes("Jill") =>`, sentence.includes("Jill"));
console.log(`sentence.includes("jill") =>`, sentence.includes("jill"));
console.log(`sentence.toLowerCase().includes("jill") =>`, sentence.toLowerCase().includes("jill"));

// indexOf --> gives the index of the substring in the full string
console.log(`sentence.toLowerCase().includes("jill") =>`, sentence.indexOf("Jill"));
//           012345678901234567
let email = "tanahkow@gmail.com";
let atCharacterIndex = email.indexOf("@");
console.log("Domain =", email.slice(atCharacterIndex+1));
// console.log("Domain =", email.slice(email.indexOf("@")+1));

// for indexof if there are multiple matches, only the first one is returned
console.log(`abcabcabc".indexOf("a")=>`, "abcabcabc".indexOf("a"));

// SPLIT
let favoriteColors = "red,violet,black,blue";
console.log(`"red,violet,black,blue" =>`, favoriteColors.split(","));

let date = "2022-10-03"
let chunks = date.split("-");
console.log(`"2022-10-03".split() =>`, chunks);

let fox = "the quick brown fox jumps over the lazy dog";
console.log("How many words in `the quick brown jumps over the lazy dog` =>", fox.split(" ").length);