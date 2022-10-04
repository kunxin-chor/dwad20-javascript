const prompt = require('prompt-sync')()
//              0123456789
// Date format: DD-MM-YYYY

// LOOK UP TABLE
let months = ["Jan",
 "Feb",
 "Mar",
 "Apr",
 "May",
 "Jun",
 "Jul", 
 "Aug",
 "Sept",
 "Oct", 
 "Nov", 
 "Dec"]

let date = prompt("Please enter the date in the DD-MM-YYYY format:");
let day = date.slice(0, 2);
let month = date.slice(3, 5);
let year = date.slice(6);
console.log(day);
// console.log(month);
console.log(months[parseInt(month)-1]);
console.log(year);