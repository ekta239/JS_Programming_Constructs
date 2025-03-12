// Get command-line arguments (skip first two default arguments)
const args = process.argv.slice(2);

// Check if both day and month are provided
if (args.length < 2) {
    console.log("Please provide both day and month as command-line arguments.");
    process.exit(1);
}

let day = parseInt(args[0]);
let month = parseInt(args[1]);

// Function to check if the date is within range
function isDateInRange(day, month) {
    if (month < 3 || month > 6) {
        return false;
    }
    if (month === 3 && day < 20) {
        return false;
    }
    if (month === 6 && day > 20) {
        return false;
    }
    return true;
}

// Print the result
console.log(isDateInRange(day, month));
