// arrays can store multiple values into one variable
let d = [1,3,5,7,9];

// to create an array, we can:
let food = [];
let fruits = Array(); // --> the Array() function will return an empty array

let rojak = [42, 3.14, "she sells seashell", true, [1,2,3], {title:"The Lord of the Rings"}];

// ARRAYS ARE MUTABLE
// directly replace a value in an index
rojak[1] = 3.1417;
console.log(rojak);

// This means MOST functions that on array will CHANGE the array
fruits.push("Durian"); // to add something to back of the array
console.log(`After fruit.push("Durian") =>`, fruits);
// pop means remove the last item from the array
fruits.pop();
console.log("After fruits.pop() =>", fruits);

// splice function
// it takes two in argument
// first arugement: the index to start deleting from
// second argument: how many to delete from that index
// third argument: the new array to put in from the first argument
// return: the elements that you have deleted or replaced
let names = ["Abel", "Ben", "Cindy", "Daniel", "Eddie", "Fred", "Gloria"];

// delete cindy and daniel from the list
names.splice(3,2);
console.log("After names.splice(3,2)=>", names);

let students = ["Abel", "Ben", "Cindy", "Daniel", "Eddie", "Fred", "Gloria"];
// replace Cindy and Daniel with Zoe, Yennifer:
students.splice(2, 2, "Zoe", "Yennifier")
console.log(`students after students.splice(2, 2, "Zoe", "Yennifier") =>`, students);
