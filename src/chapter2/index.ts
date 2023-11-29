
// Challenge: Create a function called `calculateAverage` that takes in an array of numbers and returns the average of those numbers.
// The function should return a number rounded to two decimal places.

// Example usage:
// const numbers = [5, 10, 15, 20];
// const average = calculateAverage(numbers);
// console.log(average); // Output: 12.50

function calculateAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  return Number(average.toFixed(2));
}

const numbers = [5, 10, 15, 20];
const average = calculateAverage(numbers);
console.log(average); // Output: 12.50
