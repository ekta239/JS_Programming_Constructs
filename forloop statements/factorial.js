// Get the number from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node factorial.js <number>");
    process.exit(1);
}

let num = parseInt(args[0]);

if (isNaN(num) || num < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

// Function to calculate factorial
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Print the result
console.log(`Factorial of ${num} is: ${factorial(num)}`);
