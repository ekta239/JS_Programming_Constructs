const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the range
let low = 1;
let high = 100;

// Function to guess the magic number
function findMagicNumber() {
    if (low > high) {
        console.log("Something went wrong! Try again.");
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);

    rl.question(`Is your number ${mid}? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === "yes") {
            console.log(`Great! Your Magic Number is ${mid}.`);
            rl.close();
        } else {
            rl.question(`Is your number greater than ${mid}? (yes/no): `, (greater) => {
                if (greater.toLowerCase() === "yes") {
                    low = mid + 1; // Narrow the range to the upper half
                } else {
                    high = mid - 1; // Narrow the range to the lower half
                }
                findMagicNumber(); // Repeat the process
            });
        }
    });
}

// Start the game
console.log("Think of a number between 1 and 100.");
findMagicNumber();
