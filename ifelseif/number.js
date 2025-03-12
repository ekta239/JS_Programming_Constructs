// Get the number from the command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a single-digit number (0-9) as input.");
    process.exit(1);
}

let num = parseInt(args[0]);

// Function to convert number to word
function numberToWord(num) {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    
    if (num >= 0 && num <= 9) {
        return words[num];
    } else {
        return "Invalid input! Please enter a single-digit number (0-9).";
    }
}

// Print the result
console.log(`Number in Words: ${numberToWord(num)}`);
