// Initial money and goal
let money = 100;
const goal = 200;
let bets = 0;
let wins = 0;

// Function to simulate a bet
function flipCoin() {
    return Math.random() < 0.5 ? "Win" : "Lose";
}

// Gambling loop
while (money > 0 && money < goal) {
    bets++;
    let result = flipCoin();
    
    if (result === "Win") {
        money += 1; // Win Rs 1
        wins++;
    } else {
        money -= 1; // Lose Rs 1
    }

    console.log(`Bet #${bets}: ${result} | Money: Rs ${money}`);
}

// Final result
console.log("\nGame Over!");
console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);

if (money === 200) {
    console.log("Congratulations! You reached your goal of Rs 200.");
} else {
    console.log("You went broke! Better luck next time.");
}
