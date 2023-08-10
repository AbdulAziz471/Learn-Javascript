// Using const to declare variables
const pi = 3.14159;
const name = "Alice";

// const variables are also block-scoped
function printPi() {
    if (true) {
        const pi = 3.14; // Local to this block
    }
    console.log(pi); // Outputs: 3.14159
}
printPi();

// Cannot redeclare or reassign a const variable
const score = 100;
// const score = 200; // This would cause an error
// score = 150;      // This would also cause an error

console.log(score); // Outputs: 100
