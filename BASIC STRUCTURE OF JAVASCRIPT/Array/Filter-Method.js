// Creates a new array with all elements that pass the test implemented by the provided function.



let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
}); // [2, 4]
