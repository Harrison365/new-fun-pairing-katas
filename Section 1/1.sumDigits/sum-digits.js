/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

// function sumDigits(num) {
//   let numberStrings = num.toString().split("");
//   let numberStringNumbers = numberStrings.map(Number);
//   let count = 0;
//   let onlyNumbers = numberStringNumbers.forEach((numberString) => {
//     if (!isNaN(numberString)) {
//       count += numberString;
//     }
//   });
//   return count;
// }

function sumDigits(num) {
  let count = 0;
  let numString = num.toString();

  for (let i = 0; i < numString.length; i++) {
    let digit = Number(numString[i]);
    if (!isNaN(digit)) {
      count += digit;
    }
  }

  return count;
}

module.exports = sumDigits;
