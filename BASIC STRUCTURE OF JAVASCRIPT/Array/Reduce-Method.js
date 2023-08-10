//   SYNTAX
//   let result = array.reduce(callbackFunction, initialValue);



let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Outputs: 15


let num = [3, 7, 1, 9, 2];

let max = num.reduce(function(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
});

console.log(max); // Outputs: 9
