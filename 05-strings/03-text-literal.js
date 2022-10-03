// the text literal starts with the backtick
// the ways that the backtick is awesome

// 1. you can use enter and any whitespace and it will be respected 
console.log(`Dear Abby
    I want to write in to ask you about the greatest etiquette question
    of all the time. Do I leave the toilet seat up or down after using it?`);

// 2. You can use all the special characters you want
console.log(`Abby says, "This is indeed the greatest debate of all time.
I don't have any advice for you."`)

// 3. You can embed variables into it easily
let firstName = "Ah Kow";
let surname = "Tan";
let billAmount = 500;
let dateDue = "29/10/2022";

// without using back tick string
console.log("Dear", firstName, surname, "your bill amount of", billAmount,
    "is due", dateDue);

let letter = "Dear " + firstName + " " + surname + "\n" + "your bill amount of " + billAmount + "is due on " + dateDue;
console.log(letter);

// when using the backtick string, any ${} will have its content evaluated as javascript
console.log(`Dear ${firstName} ${surname},
    Your bill of $${billAmount} is due on ${dateDue}. If you do not pay on 
time, you will be charged an interest of $${0.25 * billAmount}.

Sincerely, 
your neighbourhood friendly bank

`)