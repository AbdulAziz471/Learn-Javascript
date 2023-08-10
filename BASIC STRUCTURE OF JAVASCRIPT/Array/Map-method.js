// Doubling Array Elements with .map():


let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]



// In this example, the .map() method iterates through each element in the numbers array and applies the callback function, which multiplies each number by 2. The results of the callback function are collected in the doubledNumbers array.

// Example: Converting Fahrenheit to Celsius with .map():


let fahrenheitTemperatures = [32, 68, 86, 104];

let celsiusTemperatures = fahrenheitTemperatures.map(function(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
});

console.log(celsiusTemperatures); 
