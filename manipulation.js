const numbers = [1, 3, 5, 8, 2];

function addNumber(array, number) {
  array.push(number);
}

function removeNumber(array, number) {
  const index = array.indexOf(number);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

function sortNumbers(array) {
  return array.slice().sort(); 
}

function calculateSum(array) {
  return array.reduce((sum, num) => sum + num, 0);
}

function calculateAverage(array) {
  return calculateSum(array) / array.length;
}

console.log("Initial array:", numbers);

addNumber(numbers, 4);
console.log("After adding 4:", numbers);

removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

const sortedNumbers = sortNumbers(numbers);
console.log("Sorted array:", sortedNumbers);

const sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

const average = calculateAverage(numbers);
console.log("Average of numbers:", average);