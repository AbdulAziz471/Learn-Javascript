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
let stud  = {
    FirstName: "aziz" ,
    LastName: "Tariq",
    DOB: "26-10-2001",
    work:   () => {
        console.log("Still working on web developement");
    
    }
}

console.log(calculator.add(5, 3)); 
console.log (calculate.multiple(7, 9));
console.log(stud.work());