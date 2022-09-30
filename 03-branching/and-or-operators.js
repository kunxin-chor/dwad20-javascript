console.log("true && true =>", true && true);
console.log("1 && 2 =>", 1 && 2); 
// if both the left value and the right value are truthy value
// the result will be the LAST truthy value 
// i.e the second truthy value
console.log("2 && 1 && 3 =>", 2 && 1 && 3);
// => console.log(1 && 3);
// => console.log(3);
console.log('"shell" && "shore"=>',"shell" && "shore");
console.log("2 && 0 =>", 2 && 0);
console.log("2 && NaN =>", 2 && NaN);
// if one is values is falsy, then the expression will result in the first falsely value
console.log("NaN && 2 =>", NaN && 2); 
console.log("false && 2 =>", false && 2);
console.log("NaN && undefined =>", NaN && undefined);

// OR -- the first truthy value
console.log("1 || 0 =>", 1 || 0);
console.log("false || 1 =>", false || 1);
console.log("'first' || 'second' =>", 'first' || 'second');
console.log("NaN || undefined =>", NaN || undefined);