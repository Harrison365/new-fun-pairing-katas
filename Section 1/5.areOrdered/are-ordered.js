/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(numbers) {
  if (numbers.length === 0) {
    return false;
  }

  const sortedArray = [...numbers].sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== sortedArray[i]) {
      return false;
    }
  }

  return true;
}

module.exports = areOrdered;
