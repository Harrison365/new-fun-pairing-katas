/*
  The getFrequencies function should take a string and return an object that represents the frequencies of each character in the string. It should ignore spaces and special characters.
  E.g. 'hello world' would return:
  {
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 1
  }
*/

function getFrequencies(word) {
  let arr = word.split("");
  let obj = {};

  const letters = arr.filter((character) => {
   if (/[A-Za-z]/g.test(character)){
    return character
   }

  })
  letters.forEach((letter) => {
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }

})
return obj;
}

console.log(getFrequencies("hello"))
console.log(getFrequencies("hello251%"))
module.exports = getFrequencies;
