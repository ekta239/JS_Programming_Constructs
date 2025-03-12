// Get the number from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node primeFactors.js <number>");
    process.exit(1);
}

let num = parseInt(args[0]);

if (isNaN(num) || num < 2) {
    console.log("Please enter a valid integer greater than or equal to 2.");
    process.exit(1);
}

// Function to compute prime factors
function primeFactors(n) {
    let factors = [];

    // Remove all factors of 2
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    // Check for odd factors from 3 to √n
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // If n is still a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Compute and print prime factors
console.log(`Prime factors of ${num}: ${primeFactors(num).join(" ")}`);
