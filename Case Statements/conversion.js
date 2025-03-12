// Get the unit conversion choice and value from the command-line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Usage: node unitConversion.js <choice> <value>");
    console.log("Choices: 1 - Feet to Inch, 2 - Feet to Meter, 3 - Inch to Feet, 4 - Meter to Feet");
    process.exit(1);
}

let choice = parseInt(args[0]);
let value = parseFloat(args[1]);

// Function to perform unit conversion
function convertLength(choice, value) {
    switch (choice) {
        case 1:
            return `${value} Feet = ${value * 12} Inches`;
        case 2:
            return `${value} Feet = ${(value * 0.3048).toFixed(2)} Meters`;
        case 3:
            return `${value} Inches = ${(value / 12).toFixed(2)} Feet`;
        case 4:
            return `${value} Meters = ${(value * 3.28084).toFixed(2)} Feet`;
        default:
            return "Invalid choice! Please select 1, 2, 3, or 4.";
    }
}

// Print the conversion result
console.log(convertLength(choice, value));
