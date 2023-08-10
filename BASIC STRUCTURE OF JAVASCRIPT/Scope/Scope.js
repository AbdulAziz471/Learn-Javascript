// Scope refers to the context in which variables are defined and can be accessed. JavaScript has two main types of scope: global scope and local scope.


// Global Scope: Variables defined outside of any function are in the global scope and can be accessed from anywhere in the code.

// Local Scope: Variables defined inside a function are in the local scope and can only be accessed within that function.



const globalVar = "I am global"; // Global Scope

function example() {
    const localVar = "I am local"; // Local Scope
    console.log(globalVar); // Accessible
}

console.log(globalVar); // Accessible
console.log(localVar); // Error: localVar is not defined
