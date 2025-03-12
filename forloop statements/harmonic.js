// Get the value of n from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node harmonicNumber.js <n>");
    process.exit(1);
}

let n = parseInt(args[0]);

if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer for n.");
    process.exit(1);
}

// Function to calculate the nth Harmonic Number
function calculateHarmonic(n) {
    let harmonic = 0.0;
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    return harmonic.toFixed(6); // Round to 6 decimal places
}

// Print the nth Harmonic Number
console.log(`The ${n}th Harmonic Number is: ${calculateHarmonic(n)}`);
