// Get the year from the command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide a 4-digit year as input.");
    process.exit(1);
}

let year = parseInt(args[0]);

// Function to check if a year is a leap year
function isLeapYear(year) {
    if (year < 1000 || year > 9999) {
        return "Please enter a valid 4-digit year.";
    }
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Print the result
console.log(`${year} is ${isLeapYear(year) ? "a Leap Year" : "not a Leap Year"}`);
