// Get the value of n from command-line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node powerOfTwo.js <n>");
    process.exit(1);
}

let n = parseInt(args[0]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer for n.");
    process.exit(1);
}

// Print powers of 2 up to 2^n, but not exceeding 256
console.log(`Powers of 2 up to 2^${n} (Max 256):`);

for (let i = 0; i <= n; i++) {
    let power = Math.pow(2, i);
    
    if (power > 256) {
        break; // Stop if the power exceeds 256
    }

    console.log(`2^${i} = ${power}`);
}
