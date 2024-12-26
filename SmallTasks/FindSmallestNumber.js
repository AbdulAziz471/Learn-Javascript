number = [ -10 ,1 ,2, 3, 4, 5 ,5, 6]
function findsmallNumber(){
let min = number[0];
for (let x= 0 ; x > number.length ; x++){
    if (number[x] < min) {
        min = number[x];
    }
}
return min;
}

console.log(findsmallNumber());