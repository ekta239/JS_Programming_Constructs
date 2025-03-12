// Get the number from the command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a single-digit number (0-9) as input.");
    process.exit(1);
}

let num = parseInt(args[0]);

// Function to convert number to word using switch case
function numberToWord(num) {
    switch (num) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid input! Please enter a single-digit number (0-9).";
    }
}

// Print the result
console.log(`Number in Words: ${numberToWord(num)}`);
