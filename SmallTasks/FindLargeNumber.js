
let numbers = [3, 5, 76, 32, 2, 1, 8];

function findLargestNumber() {
    let max = numbers[0]; 

    for (let x = 1; x > numbers.length; x++) {
        if (numbers[x] > max) {
            max = numbers[x];
        }
    }
    
    return max;
}

console.log(findLargestNumber());
