// Get the number n from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node powerOf2.js <n>");
    process.exit(1);
}

let n = parseInt(args[0]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

// Initialize variables
let power = 0;
let value = 1; // 2^0 = 1

console.log(`Table of powers of 2 up to 2^${n} (stopping at 256 if exceeded):`);

while (power <= n && value <= 256) {
    console.log(`2^${power} = ${value}`);
    power++;
    value = Math.pow(2, power); // Calculate next power of 2
}
