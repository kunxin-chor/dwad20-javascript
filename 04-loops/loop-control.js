// way to control the loop
// You can break a loop -- end a loop prematurely
for (let i=0; i < 100; i++) {
    if (i==10) {
        break;
    }
    console.log(i);

}
console.log("Loop ended")
console.log("-------contuine------");
console.log("Skip the rest of the loop and move the program counter");
console.log("To the condition again");

for (let i=0; i < 100; i++) {
    if (i%2==0) {
        continue;
    }
    console.log(i);

}

// the same loop without using continue
for (let i=0; i < 100; i++) {
    if (i%2==1) {
        console.log(i)
    }

}