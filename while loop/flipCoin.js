// Initialize counters for heads and tails
let headsCount = 0;
let tailsCount = 0;

// Function to simulate a coin flip
function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

// Keep flipping until either heads or tails reaches 11 wins
while (headsCount < 11 && tailsCount < 11) {
    let result = flipCoin();
    console.log(`Flipped: ${result}`);

    if (result === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Score -> Heads: ${headsCount}, Tails: ${tailsCount}`);
}

console.log("\nGame Over!");
if (headsCount === 11) {
    console.log("Heads won 11 times first!");
} else {
    console.log("Tails won 11 times first!");
}
