/*
  The function getDistinctLetters should take two strings and return a string of all the letters that are unique to either of the input strings, in alphabetical order.

  For example, when given 'hello' and 'world', the function should return 'dehrw'
  This is because h and e are in 'hello' but not in 'world', and w, r and d are in 'world' but not in 'hello'. hewrd' sorted => 'dehrw'
*/

function getDistinctLetters(word1, word2) {
  let arr1 = word1.split("");
  let arr2 = word2.split("");

  let newArr = [];

  arr1.forEach((letter1) => {
    if (!arr2.includes(letter1)) {
      newArr.push(letter1);
    }
  });
  arr2.forEach((letter2) => {
    if (!arr1.includes(letter2)) {
      newArr.push(letter2);
    }
  });
  return newArr.sort().join("");
}

module.exports = getDistinctLetters;

console.log(getDistinctLetters("hello", "world"));
