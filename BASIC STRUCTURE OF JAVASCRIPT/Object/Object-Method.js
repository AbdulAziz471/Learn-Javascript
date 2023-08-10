const calculate = {
    multiple: (a, b) => a * b,
    divide: (a, b) => a / b
};


const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); 
console.log (calculate.multiple(7, 9));