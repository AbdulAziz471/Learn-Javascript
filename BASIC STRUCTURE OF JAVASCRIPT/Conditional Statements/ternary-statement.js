//simple example 
let age = 20;
let status = (age >= 18) ? "adult" : "minor";

//complex example
let numericalGrade = 87;
let letterGrade = (numericalGrade >= 90)
    ? "A"
    : (numericalGrade >= 80)
        ? "B"
        : (numericalGrade >= 70)
            ? "C"
            : (numericalGrade >= 60)
                ? "D"
                : "F";

console.log(`Numerical Grade: ${numericalGrade}`);
console.log(`Letter Grade: ${letterGrade}`);
console.log(status); 