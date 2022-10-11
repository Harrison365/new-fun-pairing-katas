/*
  The function getMostRepeated should take a string and return the character that is most repeated throughout the string, ignoring whitespace and special characters. If two characters are both equally common, return the one that comes first alphabetically.
  If you have already implemented the getFrequencies function, it may be helpful! It is imported into this file for you to use if you wish.
*/

// const getFrequencies = require('./get-frequencies');

function getMostRepeated(str) {
  let arr = str.split("");
  let obj = {};

  arr.forEach((letter) => {
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  });
  console.log(Object.keys(obj));
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}

console.log(getMostRepeated("hello"));

module.exports = getMostRepeated;
