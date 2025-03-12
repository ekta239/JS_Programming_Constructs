// Get the number from the command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a number between 1 and 7.");
    process.exit(1);
}

let num = parseInt(args[0]);

// Function to get the weekday name
function getWeekday(num) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if (num >= 1 && num <= 7) {
        return weekdays[num - 1]; // Adjust index (1 -> Sunday, 2 -> Monday, etc.)
    } else {
        return "Invalid input! Please enter a number between 1 and 7.";
    }
}

// Print the result
console.log(`Day of the Week: ${getWeekday(num)}`);
