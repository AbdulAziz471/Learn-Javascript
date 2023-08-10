// Higher-order function that takes a function as an argument
function operate(a, b, operation) {
    return operation(a, b);
}

let result1 = operate(5, 3, add);     // Using the add function
let result2 = operate(10, 2, divide); // Using the divide function

console.log(result1); 
console.log(result2);