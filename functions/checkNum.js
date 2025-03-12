const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

// Function to check if the number and its palindrome are prime
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        let palindromeNum = getPalindrome(num);

        console.log(`Its palindrome is ${palindromeNum}.`);
        
        if (isPrime(palindromeNum)) {
            console.log(`${palindromeNum} is also a prime number.`);
        } else {
            console.log(`${palindromeNum} is NOT a prime number.`);
        }
    } else {
        console.log(`${num} is NOT a prime number.`);
    }
}

// Take user input and check
rl.question("Enter a number: ", (input) => {
    let num = parseInt(input);
    if (!isNaN(num)) {
        checkPrimeAndPalindrome(num);
    } else {
        console.log("Invalid input! Please enter a valid number.");
    }
    rl.close();
});
