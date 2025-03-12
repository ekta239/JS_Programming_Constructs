// Get the number from the command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number (1, 10, 100, 1000, etc.).");
    process.exit(1);
}

let num = parseInt(args[0]);

// Function to get place value name
function getPlaceValue(num) {
    const placeValues = {
        1: "Unit",
        10: "Ten",
        100: "Hundred",
        1000: "Thousand",
        10000: "Ten Thousand",
        100000: "Lakh",
        1000000: "Ten Lakh",
        10000000: "Crore",
        100000000: "Ten Crore"
    };

    return placeValues[num] || "Invalid input! Please enter a valid place value (1, 10, 100, 1000, etc.).";
}

// Print the result
console.log(`Place Value: ${getPlaceValue(num)}`);
