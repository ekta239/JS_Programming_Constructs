// Get the number from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node primeCheck.js <number>");
    process.exit(1);
}

let num = parseInt(args[0]);

if (isNaN(num) || num < 2) {
    console.log("Please enter a valid integer greater than or equal to 2.");
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

// Print the result
if (isPrime(num)) {
    console.log(`${num} is a Prime Number.`);
} else {
    console.log(`${num} is NOT a Prime Number.`);
}
