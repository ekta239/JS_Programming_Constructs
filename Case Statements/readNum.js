// Get the number from the command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number (1, 10, 100, 1000, etc.).");
    process.exit(1);
}

let num = parseInt(args[0]);

// Function to get place value name using switch case
function getPlaceValue(num) {
    switch (num) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        case 100000: return "Lakh";
        case 1000000: return "Ten Lakh";
        case 10000000: return "Crore";
        case 100000000: return "Ten Crore";
        default: return "Invalid input! Please enter a valid place value (1, 10, 100, 1000, etc.).";
    }
}

// Print the result
console.log(`Place Value: ${getPlaceValue(num)}`);
