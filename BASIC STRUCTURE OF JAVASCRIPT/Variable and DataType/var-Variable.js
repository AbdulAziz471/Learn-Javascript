// Using var to declare variables
var age = 25;
var name = "John";

// var variables are function-scoped
function printAge() {
    if (true) {
        var age = 30; // Overrides the outer variable
    }
    console.log(age); // Outputs: 30
}
printAge();

// Var can be redeclared within the same scope
var score = 100;
var score = 200; // This is allowed

console.log(score); // Outputs: 200
