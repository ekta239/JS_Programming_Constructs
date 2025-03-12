// Get the range (start and end) from command-line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Usage: node primeRange.js <start> <end>");
    process.exit(1);
}

let start = parseInt(args[0]);
let end = parseInt(args[1]);

if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    console.log("Please enter valid positive integers where start >= 2 and start <= end.");
    process.exit(1);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // No even number >2 is prime

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Print prime numbers in the given range
console.log(`Prime numbers between ${start} and ${end}:`);
for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        process.stdout.write(num + " "); // Print numbers in the same line
    }
}
console.log(""); // New line after output
