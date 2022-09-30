const prompt = require('prompt-sync')();
console.log("Pet recommendor");
console.log("Enter y for yes and n for no");
let ans = prompt("Do you want a pet to care and love for?")
if (ans=="y") {

    console.log("Are you likely to forget that you have pet?");
    console.log("a. No");
    console.log("b. For weeks at a time");
    console.log("c. For days at a time");
    // we can `let ans` because right now we're in a new scope
    // because of if
    let ans = prompt("Enter your choice:");
    if (ans=='a') {
        let ans = prompt("Do you want a creature that returns your affection?");
      
        if (ans=="y") {
            let ans = prompt("Do you want to train your pets to do things?");
            if (ans=="y") {
                // ask if you want the pet do think of you as master or slave
                console.log("How you want your pet to think of you?");
                console.log("a. master");
                console.log("b. slave");
                let ans = prompt("Your choice");

                // can use else because only two choices and they are mutually exlcusive
                // if we ever have a third choice we can't use else

                if (ans=="a") {
                    console.log("Dog");
                } else {
                    console.log("Cat");   
                }

            } else {
                // ask if you have a zoo or enclosure
                let ans = prompt("Do you have a zoo or enclosure?");
                if (ans=="y") {
                    console.log("Giraffe");
                } else {
                    console.log("Cat");
                }
            }

        } else {
            let ans = prompt("Do you want to watch your pet do things?");
            if (ans=="y") {
                console.log("Fish")
            } else {
                console.log("You need a rock?")
            }
        } // for the question "do you want a creature to returns that your affection"

    } // for cases where the user answer "no" to "are you likely to forget that you have a pet"
    if (ans=='c') {
        console.log("FISH");
    } 
    if (ans=='b') {
        console.log("You need a rock");
    }
} else {
    console.log("You need a rock");
}