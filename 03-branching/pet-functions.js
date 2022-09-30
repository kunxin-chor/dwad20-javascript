const prompt = require('prompt-sync');

function askIfYouWantAPet() {
    let ans = prompt("Do you want a pet to care and love for?");
    if (ans=="y") {
        return true;
    } else {
        return false;
    }
}

function askIfYouWillForgetYourPet() {
    console.log("Are you likely to forget that you have pet?");
    console.log("a. No");
    console.log("b. For weeks at a time");
    console.log("c. For days at a time");
    let ans = prompt("Enter your choice: ");
}

function askIfWantToReturnAffection() {
    let ans = prompt("Do you want a creature that can return your affection");
    return ans == "y";
}

function askDoYouWantToWatchYourPet(){
    return prompt("Do you want to watch your pet do things?") == "y";
}

function askDoYouWantToTrainYourPet() {
    let ans = prompt("Do you want to train your pet?");
    return ans == "y";
}

function askHowThePetViewYou() {
    console.log("How will your pet view you? a) master b) slave");
    let ans = prompt("Your choice: ");
    return ans;
}

function askDoYouOwnAZoo() {
    let ans = prompt("Do you own a zoo?");
    return ans == "y";
}

if (askIfYouWantAPet()) {
    let ans = askIfYouWillForgetYourPet();
    if (ans=="a") {
        if (askIfWantToReturnAffection()) {
           // want affection
           if (askDoYouWantToTrainYourPet()) {
            // yes I want to train my pet
            let ans = askHowThePetViewYou();
            if (ans=='a') {
                console.log("Dog")
            } else {
                console.log("Cat")
            }
           } else {
            // no I don't want to train my pet
            if (askDoYouOwnAZoo()) {
                console.log("Giraffe")
            } else {
                console.log("Cat")
            }
           }
        } else {

            // no need affection
            if (askDoYouWantToWatchYourPet()) {
                console.log("Fish");
            } else {
                console.log("Rock")
            }
        }  
    }
    if (ans=="b"){
        if (askDoYouWantToWatchYourPet()) {
            console.log("Fish")
        } else {
            console.log("Rock")
        }
    }
    if (ans=="c"){
        console.log("Rock")
    }
} else {
    console.log("ROCK");
}