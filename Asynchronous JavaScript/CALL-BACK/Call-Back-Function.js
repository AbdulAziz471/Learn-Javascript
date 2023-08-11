
// Callbacks are functions passed as arguments to other functions. They are commonly used in asynchronous operations to specify what should happen once the operation is complete.

function add(a, b){
    return  a + b;
}
function subtract(a, b){
    return  a - b;
}
function multiple(a, b){
    return  a * b;
}
 
function Calculate(x, y , operation){
    return  operation(x , y ) ;
    
}
console.log(Calculate(4 , 3  , add));