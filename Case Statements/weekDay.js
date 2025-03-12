// Get the number from the command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number between 1 and 7.");
    process.exit(1);
}

let num = parseInt(args[0]);

// Function to get the weekday name using switch case
function getWeekday(num) {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid input! Please enter a number between 1 and 7.";
    }
}

// Print the result
console.log(`Day of the Week: ${getWeekday(num)}`);
