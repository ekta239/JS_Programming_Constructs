console.log("Unit Conversion Results:");

// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`42 inches = ${feet} feet`);

// b. Convert a rectangular plot of 60ft x 40ft to meters (1 ft = 0.3048 m)
let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log(`Rectangular plot dimensions: ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);

// c. Calculate the area of 25 such plots in acres (1 acre = 4046.86 m²)
let areaOnePlotMeters = lengthMeters * widthMeters;
let totalAreaMeters = areaOnePlotMeters * 25;
let totalAreaAcres = totalAreaMeters / 4046.86;
console.log(`Total area of 25 plots = ${totalAreaAcres.toFixed(4)} acres`);
