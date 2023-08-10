// Using let to declare variables
let age = 25;
let name = "John";

// let variables are block-scoped
function printAge() {
    if (true) {
        let age = 30; // Local to this block
    }
    console.log(age); // Outputs: 25
}
printAge();

// Cannot redeclare a let variable within the same scope
let score = 100;
// let score = 200; // This would cause an error

console.log(score); // Outputs: 100
